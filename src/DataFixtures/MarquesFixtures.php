<?php

namespace App\DataFixtures;

use App\Entity\Catégories;
use DateTime;
use DateTimeImmutable;
use Doctrine\Bundle\FixturesBundle\Fixture;
use Faker;
use Doctrine\Persistence\ObjectManager;


class MarquesFixtures extends Fixture
{
    public function load(ObjectManager $manager): void
    {
        // Instanciation du Faker
        $faker = Faker\Factory::create('fr_FR'); 
        
    
        // Creation de 8 catégories 
        $cotegoriesList = [
            'Loisir',
            'Cross-Country',
            'Tout-Suspendu', 
            'All-Mountain',
            'Enduro', 
            'Descente',  
        ];
          $cotegoriesListTotal = count($cotegoriesList);      


        foreach( $cotegoriesList as $cat){
      
             
                $categories = new Catégories(); 
      
                 
                 $categories->setName($cat);  
                 $manager->persist($categories);     
            }
                
      


        // $product = new Product();


        $manager->flush();
    }
}
