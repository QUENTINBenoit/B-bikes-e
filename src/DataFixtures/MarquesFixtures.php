<?php

namespace App\DataFixtures;


use Faker;
use App\Entity\Catégories;
use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Persistence\ObjectManager;


class MarquesFixtures extends Fixture
{
    public function load(ObjectManager $manager): void
    {
        // Instanciation du Faker
        $faker = Faker\Factory::create('fr_FR'); 
        
    
        // Creation des catégories  
        $cotegoriesList = [
            'Loisir',
            'Cross-Country',
            'Tout-Suspendu', 
            'All-Mountain',
            'Enduro', 
            'Descente',  
        ];
        foreach( $cotegoriesList as $cat){
                $categories = new Catégories(); 
                 $categories->setName($cat);  
                 $manager->persist($categories);     
            }
        $manager->flush();
    }
}
