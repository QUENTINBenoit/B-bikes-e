<?php

namespace App\DataFixtures;

use App\Entity\Category;
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
        $manager->flush();
    }
}
