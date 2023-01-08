<?php

namespace App\Repository;


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

    /**
     * Méthode permettant de récupérer toutes les donnes via l'entité produit
     *
     * @param [type] $id
     * @return void
     */
    public function findWithDetailsProduct($id)
    {
        $qb = $this->createQueryBuilder('product');
        $qb->where('product.id = :id');
        $qb->setParameter(':id', $id);
        $qb->leftJoin('product.equipements', 'eqpmts');
        $qb->leftJoin('product.marques', 'brand');
        $qb->leftJoin('product.images', 'img');
        $qb->leftJoin('product.roues', 'rs');
        $qb->leftJoin('product.motorisation', 'motor');
        $qb->addSelect('eqpmts', 'brand', 'rs', 'img', 'motor');
        $query = $qb->getQuery();
        return $query->getOneOrNullResult();
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
}
