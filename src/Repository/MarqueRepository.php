<?php

namespace App\Repository;

use App\Entity\Marque;
use App\Entity\Marques;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @extends ServiceEntityRepository<Marques>
 *
 * @method Marques|null find($id, $lockMode = null, $lockVersion = null)
 * @method Marques|null findOneBy(array $criteria, array $orderBy = null)
 * @method Marques[]    findAll()
 * @method Marques[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class MarqueRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, Marque::class);
    }

    public function save(Marque $entity, bool $flush = false): void
    {
        $this->getEntityManager()->persist($entity);

        if ($flush) {
            $this->getEntityManager()->flush();
        }
    }

    public function remove(Marque $entity, bool $flush = false): void
    {
        $this->getEntityManager()->remove($entity);

        if ($flush) {
            $this->getEntityManager()->flush();
        }
    }


    /**
     * Récupère tous les produits liés à une marque 
     *
     * @param [type] $id
     * @return void
     */
    public function findProduitsByMarquesId($id)
    {
        $qb = $this->createQueryBuilder('m');
        $qb->where('m.id = :id');
        $qb->setParameter(':id', $id);
        $qb->leftJoin('m.products', 'produits');
        $qb->addSelect('produits');
        $query = $qb->getQuery();
        return $query->getOneOrNullResult();
    }
}
