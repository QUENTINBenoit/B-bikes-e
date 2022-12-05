<?php

namespace App\Form;

use App\Entity\Category;
use App\Entity\Genre;
use App\Entity\Marque;
use App\Entity\Produits;
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
                'label' => false
,            
          
                'required' => false, 
                'class' => Category::class,
                'expanded' => true,
                'multiple' => true,
            ] )
            ->add('marques', EntityType::class, [
                'label' => false,
                'required' => false, 
                'class' => Marque::class,
                'expanded' => true,
                'multiple' => true,
                ] )       
            

            ->add('genres', EntityType::class, [
                'label' => false,
                // 'attr' => [ 'class'=>' ml-6 flex flex-col'],
                'required' => false, 
                'class' => Genre::class,
                'expanded' => true,
                'multiple' => true,
                ] )       
       
        ;
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
