<?php

namespace App\Form;

use App\Entity\Category;
use App\Entity\Genre;
use App\Entity\Marque;
use App\Entity\Produits;
use App\Repository\MarqueRepository;
use Doctrine\ORM\EntityRepository;
use Symfony\Bridge\Doctrine\Form\Type\EntityType;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;

class FiterType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        $builder

            ->add('categories', EntityType::class, [
                'label' => false,

                'required' => false,
                'class' => Category::class,
                'query_builder' => function (EntityRepository $er) {
                    return $er->createQueryBuilder('c')
                        ->where('c.parent IS NOT NULL')
                        ->orderBy('c.name', 'ASC');
                },
                'expanded' => true,
                'multiple' => true,
            ])
            ->add('marques', EntityType::class, [
                'label' => false,
                'required' => false,
                'class' => Marque::class,
                'query_builder' => function (MarqueRepository $er) {
                    return $er->createQueryBuilder('m')
                        ->orderBy('m.name', 'ASC');
                },
                'expanded' => true,
                'multiple' => true,
            ])


            ->add('genres', EntityType::class, [
                'label' => false,
                'required' => false,
                'class' => Genre::class,
                'expanded' => true,
                'multiple' => true,
            ]);
    }

    public function configureOptions(OptionsResolver $resolver): void
    {
        $resolver->setDefaults([
            'data_class' => Produits::class,
            'method' => 'GET',
            'csrf_protection' => false,
        ]);
    }
}
