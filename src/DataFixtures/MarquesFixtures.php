<?php

namespace App\DataFixtures;

use App\Entity\Category;
use App\Entity\Motorisation;
use Faker;
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
            'trail', 
            'enduro', 
            'loisir', 
            'Descentes',
        ];
        foreach($cotegoriesList as $cat){ 
            $categories = new Category();  
            $categories->setName($cat);
            $manager->persist($categories);  
           
            }
       


          // Creation des Motorisations 
        $motoristationsList = [
            'Bosh', 
            'Shimano', 
            'Yamaha', 
            'Panasonic',
            'Inpulse', 
            'Aeg', 
            ];

        foreach($motoristationsList as $motList){
            $motorisation = new Motorisation();
            $motorisation->setNom($motList);  
            $manager->persist($motorisation); 
        }


        $manager->flush();

    }
}
