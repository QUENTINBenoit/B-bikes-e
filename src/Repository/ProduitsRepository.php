<?php

namespace App\Repository;

use App\Entity\Category;
use App\Entity\Marque;
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

//    /**
//     * @return Produits[] Returns an array of Produits objects
//     */
//    public function findByExampleField($value): array
//    {
//        return $this->createQueryBuilder('p')
//            ->andWhere('p.exampleField = :val')
//            ->setParameter('val', $value)
//            ->orderBy('p.id', 'ASC')
//            ->setMaxResults(10)
//            ->getQuery()
//            ->getResult()
//        ;
//    }

//    public function findOneBySomeField($value): ?Produits
//    {
//        return $this->createQueryBuilder('p')
//            ->andWhere('p.exampleField = :val')
//            ->setParameter('val', $value)
//            ->getQuery()
//            ->getOneOrNullResult()
//        ;
//    }


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

  public function findByFilter($filter){

    $qb = $this->createQueryBuilder('p');
    
    
    if (isset($filter['marques'])){
   
        $qb->leftJoin('p.marques', "m");
        $qb->orWhere($qb->expr()->in('m.id', $filter['marques']));
        $qb->andWhere($qb->expr()->in('m.id', $filter['marques'])) ;
     
    if (isset($filter['categories'])) {
        $qb->leftJoin('p.categories', "c");
        $qb->orWhere($qb->expr()->in('c.id', $filter['categories']));
        $qb->andWhere($qb->expr()->in('c.id', $filter['categories'])); 
      }

    }
    if (isset($filter['genres'])){
        $qb->leftJoin('p.genres', 'g'); 
        $qb->orWhere($qb->expr()->in('g.id', $filter['genres'])); 
    }
    
      $qb->distinct();
      return $qb->getQuery()->getResult();
  }


}
