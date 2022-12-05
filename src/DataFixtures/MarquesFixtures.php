<?php

namespace App\DataFixtures;

use App\Entity\Category;
use App\Entity\Marque;
use App\Entity\Marques;
use App\Entity\Motorisation;
use App\Entity\Produits;
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
            $motorisation->setName($motList);
            $motorisation->setMarqueMoteur($faker->name());
            $motorisation->setBatterie($faker->numberBetween(0,10));  
            $motorisation->setPuissanceBatterie($faker->numberBetween(0,10));  
            $motorisation->setConsole($faker->name()); 
            $manager->persist($motorisation); 
        }

          // Creation des marques
          $marquesList = [
            'CUBE', 
            'XTRAIL', 
            'BEBIKE', 
            'OVONE',
            'XGTBIKE',
            'HAIBIKE',
            'ORBEA',
            'GHOST',
            'GIANT',
        ];
        foreach($marquesList as $marquesNameList){ 
            $marques = new Marque(); 
            $marques->setBrand($marquesNameList);
            $manager->persist($marques);   
            }



            $produitsList = [
                'Mega 290 Factory Carbon intl', 
                'HAIBIKE AllTrail 6 27,5', 
                'Orbea Oiz H30', 
                'Ghost Riot AM AL Full Party',
                'Trance 2', 
            ];
            foreach ($produitsList as $produitNamesList){
                $prosuits = new Produits();
                $prosuits->setName($produitNamesList); 
                $prosuits->setDescription($faker->realText(1800)); 
                $prosuits->setReference($faker->randomNumber(8)); 
                $prosuits->setNouveaute($faker->numberBetween(0, 1)); 
                $prosuits->setPromotion($faker->numberBetween(0, 1)); 
                $prosuits->setStock($faker->numberBetween(0, 50)); 
                $prosuits->setPrix($faker->numberBetween(900, 3500)); 
                $manager->persist($prosuits); 
            }
        $manager->flush();

    }
}
