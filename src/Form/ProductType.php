<?php

namespace App\Form;

use App\Entity\Category;

use App\Entity\Genre;
use App\Entity\Marque;
use App\Entity\Produits;
use App\Repository\CategoryRepository;
use App\Repository\MarqueRepository;
use Symfony\Bridge\Doctrine\Form\Type\EntityType;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\FileType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\UX\Dropzone\Form\DropzoneType;
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
            // ->add('image', DropzoneType::class, [
            //     'label' => false,
            //     // 'multiple' => true,
            //     // 'attr' => ['data-controller' => 'mydropzone'],
            //     // 'attr' => [
            //     //     'placeholder' => 'Glisser et déposer un fichier ou cliquer pour parcourir',
            //     // ],
            //     'attr' => [
            //         'class' => 'w-full h-16 bg-gray-100 border-2 border-gray-300 border-dashed rounded-md',
            //         'placeholder' => 'Glisser et déposer un fichier ou cliquer pour parcourir',
            //     ],


            //     // 'multiple' => true,
            //     'mapped' => false,
            //     // 'required' => false,
            // ])
            ->add('image', FileType::class, [
                'label' => 'Image',
                'multiple' => true,
                'mapped' => false,
                'required' => false,
            ])
            // ->add('motorisation', EntityType::class, [
            //     'class' => Motorisation::class,
            //     'label' => 'Motorisation',
            //     'multiple' => true,
            //     'required' => true,
            //     'by_reference' => false,
            //     'query_builder' => function (EntityRepository $er) {
            //         return $er->createQueryBuilder('m')
            //             ->orderBy('m.marqueMoteur', 'ASC');
            //     }
            // ])

            // ->add('roues')
            // ->add('equipements', EntityType::class, [
            //     'class' => Equipements::class,

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
            ])

            ->add('TailleRoueVTT')
            ->add('pratiques')

            ->add('freinds')
            ->add('diametreDeRoue')
            ->add('cadre')
            ->add('amortisseur')
            ->add('fourche')
            ->add('derailleurAr')
            // ->add('deraileurAV')
            ->add('manettes')
            ->add('pneus')
            ->add('cassette')
            ->add('pedalier')
            ->add('potence')
            ->add('cintre')
            ->add('tigeDeSelle')
            ->add('Selle')
            ->add('Poids');
    }

    public function configureOptions(OptionsResolver $resolver): void
    {
        $resolver->setDefaults([
            'data_class' => Produits::class,

        ]);
    }
}
