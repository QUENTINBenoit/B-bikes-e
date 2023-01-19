<?php

namespace App\Form;

use App\Entity\Category;
use App\Entity\Equipements;
use App\Entity\Genre;
use App\Entity\Marque;
use App\Entity\Produits;
use App\Repository\CategoryRepository;
use App\Repository\MarqueRepository;
use Doctrine\ORM\EntityRepository;
use Symfony\Bridge\Doctrine\Form\Type\EntityType;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;

class ProductType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        $builder
            ->add('Name')
            ->add('reference')
            ->add('Description')
            ->add('nouveaute')
            ->add('Promotion')
            ->add('stock')
            ->add('prix')
            ->add('PoucentagePromotion')
            ->add('PrixPromotion')
            ->add('Avis')
            ->add('utilisation')
            ->add('motorisation')
            ->add('roues')
            ->add('equipements', EntityType::class, [
                'class' => Equipements::class,

            ])
            // ->add('categories', EntityType::class, [
            //     'multiple' => true,
            //     'required' => true,
            //     'class' => Category::class,
            //     // 'data_class' => Category::class,
            // ])
            ->add('categories', EntityType::class, [
                'class' => Category::class,
                'multiple' => true,
                'required' => true,
                'choice_label' => 'name',
                'by_reference' => false,
                'label' => 'Catégorie',
                'group_by' => 'parent.name',
                'query_builder' => function (CategoryRepository $cr) {
                    return $cr->createQueryBuilder('c')
                        ->where('c.parent IS NOT NULL')
                        ->orderBy('c.name', 'ASC');
                },

            ])
            ->add('marques', EntityType::class, [
                'class' => Marque::class,
                'label' => 'Marques',
                'multiple' => true,
                'required' => true,
                'by_reference' => false,
                'query_builder' => function (MarqueRepository $m) {
                    return $m->createQueryBuilder('m')
                        ->orderBy('m.name', 'ASC');
                }
            ])
            ->add('genres', EntityType::class, [
                'class' => Genre::class,
                'label' => 'Genre',
                'multiple' => true,
                'required' => true,
                'by_reference' => false,
            ]);
    }

    public function configureOptions(OptionsResolver $resolver): void
    {
        $resolver->setDefaults([
            'data_class' => Produits::class,
        ]);
    }
}
