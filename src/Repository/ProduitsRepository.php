<?php

namespace App\Repository;

use __TwigTemplate_dd85f86ae4ceaeb27bfff5ae9ccf061d;
use App\DTO\SearchDto;
use App\Entity\Produits;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;


/**
 * @extends ServiceEntityRepository<Produits>
 *
 * @method Produits|null find($id, $lockMode = null, $lockVersion = null)
 * @method Produits|null findOneBy(array $criteria, array $orderBy = null)
 * @method Produits[]    findAll()
 * @method Produits[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class ProduitsRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, Produits::class);
    }

    public function save(Produits $entity, bool $flush = false): void
    {
        $this->getEntityManager()->persist($entity);

        if ($flush) {
            $this->getEntityManager()->flush();
        }
    }

    public function remove(Produits $entity, bool $flush = false): void
    {
        $this->getEntityManager()->remove($entity);

        if ($flush) {
            $this->getEntityManager()->flush();
        }
    }


    // public function findWinthBenoit()
    // {
    //     $qb = $this->createQueryBuilder('p');
    //     // $qb->where('product.id = :id');
    //     // $qb->setParameter(':id', $id);
    //     $qb->leftJoin('p.equipements', 'e');
    //     $qb->leftJoin('p.marques', 'm');
    //     $qb->leftJoin('p.images', 'img');
    //     $qb->leftJoin('p.roues', 'r');
    //     $qb->leftJoin('p.motorisation', 'mot');
    //     $qb->addSelect('e', 'm', 'r', 'img', 'mot');
    //     $query = $qb->getQuery();
    //     return $query->getResult();
    // }



    /**
     * Méthode permettant de récupérer toutes les données via l'entité produit
     *
     * @param [type] $id
     * @return void
     */
    public function findWithDetailsProduct($id)
    {
        $qb = $this->createQueryBuilder('product');
        $qb->where('product.id = :id');
        $qb->setParameter(':id', $id);
        $qb->leftJoin('product.marques', 'brand');
        $qb->leftJoin('product.images', 'img');

        $qb->leftJoin('product.motorisation', 'motor');
        $qb->addSelect('brand', 'img', 'motor');
        $query = $qb->getQuery();
        return $query->getOneOrNullResult();
    }

    // Méthode permettant de récupérer les produits de type vae
    public function findbyeVae()
    {
        $qb = $this->createQueryBuilder('product');
        $qb->where('product.isVae = :isVae');
        $qb->setParameter(':isVae', '1');

        $query = $qb->getQuery();

        return $query->getResult();
    }




    /**
     * Méthode permettant de filtrer les produits 
     *
     * @param [type] $filter
     * @return void
     */
    public function findByFilter($filter)
    {

        $qb = $this->createQueryBuilder('p');
        if (isset($filter['marques'])) {
            $qb->leftJoin('p.marques', 'm');
            $qb->andWhere($qb->expr()->in('m.id', $filter['marques']));
        }
        if (isset($filter['categories'])) {
            $qb->leftJoin('p.categories', 'c');
            $qb->andWhere($qb->expr()->in('c.id', $filter['categories']));
        }
        if (isset($filter['genres'])) {
            $qb->leftJoin('p.genres', 'g');
            $qb->andWhere($qb->expr()->in('g.id', $filter['genres']));
        }

        $qb->distinct();
        return $qb->getQuery()->getResult();
    }


    // Méthode permettant de filtrer les produits Vae

    public function findByFilterVae($filter)
    {
        $qb = $this->createQueryBuilder('p');
        $qb->where('p.isVae IS NOT NULL');

        if (isset($filter['marques'])) {

            $qb->leftJoin('p.marques', 'm');
            $qb->andWhere($qb->expr()->in('m.id', $filter['marques']));
            $qb->andWhere('p.isVae = 1');
        }
        if (isset($filter['categories'])) {
            $qb->leftJoin('p.categories', 'c');
            $qb->andWhere($qb->expr()->in('c.id', $filter['categories']));
            $qb->andWhere('p.isVae = 1');
        }
        if (isset($filter['genres'])) {
            $qb->leftJoin('p.genres', 'g');
            $qb->andWhere($qb->expr()->in('g.id', $filter['genres']));
            $qb->andWhere('p.isVae = 1');
        }
        $qb->distinct();
        return $qb->getQuery()->getResult();
    }

    /**
     *Requête permettant de récupérer les donnes vie la barre de recherche
     *
     * @param [type] $Name
     * @return void
     */
    public function findBySearchValue($Name)
    {
        $qb = $this->createQueryBuilder('p');
        $qb->leftJoin('p.categories', 'c');
        $qb->leftJoin('p.genres', 'g');
        $qb->leftJoin('p.marques', 'm');
        $qb->addSelect('c', 'g', 'm');
        // Récupération des données dans la table produit 
        $qb->andwhere('p.Name LIKE :Name');
        $qb->setParameter(':Name', "%$Name%");
        // Récupération des données dans la table categories
        $qb->orWhere('c.name LIKE :name');
        $qb->setParameter(':name', "%$Name%");
        // Récupération des données dans la table genre 
        $qb->orWhere('g.name LIKE :name');
        $qb->setParameter(':name', "%$Name%");
        // Récupération des données dans la table marque 
        $qb->orWhere('m.name LIKE :name');
        $qb->setParameter(':name', "%$Name%");
        $query = $qb->getQuery();
        return $query->getResult();
    }

    /**
     * Méthode permettant de récupérer les données de l'entité produit avec les liveComponent
     */

    public function searchDto(?SearchDto $searchDto): array
    {
        $qb = $this->createQueryBuilder('p');
        if ($searchDto->search) {
            $qb->leftJoin('p.categories', 'c');
            $qb->leftJoin('p.genres', 'g');
            $qb->leftJoin('p.marques', 'm');
            $qb->addSelect('c', 'g', 'm');
            $qb->andWhere('p.Name LIKE :search')
            ->setParameter('search', "%$searchDto->search%");
            $qb->orWhere('c.name LIKE :search')
            ->setParameter('search', "%$searchDto->search%");
            $qb->orWhere('g.name LIKE :search')
            ->setParameter('search', "%$searchDto->search%");
            $qb->orWhere('g.name LIKE :search')
            ->setParameter('search', "%$searchDto->search%");
            $qb->orWhere('m.name LIKE :search')
            ->setParameter('search', "%$searchDto->search%");
        }
  
        

        if ($searchDto->minPrice) {
            $qb->andWhere('p.prix >= :minPrice')
            ->setParameter('minPrice', $searchDto->minPrice);
        }

        if ($searchDto->maxPrice) {
            $qb->andWhere('p.prix <= :maxPrice')
            ->setParameter('maxPrice', $searchDto->maxPrice);
        }


        return $qb->getQuery()->getResult();
         
    }

    /**
     * Méthode permettant de récupérer les données de l'entité produit vae avec les liveComponent
     */

    public function searchDtoVae(?SearchDto $searchDto): array
    {
        return $this->createQueryBuilder('p')
            ->andWhere('p.isVae = 1')
            ->setParameter('search', '%' . $searchDto?->search . '%')
            ->getQuery()
            ->getResult();
    }


}
