<?php

namespace App\DataFixtures;

use App\Entity\Adresse;
use Faker;
use Stripe\Product;
use App\Entity\User;
use App\Entity\Marque;
use App\Entity\Category;
use App\Entity\Genre;
use App\Entity\Images;
use App\Entity\Produits;
use Doctrine\Persistence\ObjectManager;

use Doctrine\Bundle\FixturesBundle\Fixture;
use function PHPSTORM_META\registerArgumentsSet;

class AppFixtures extends Fixture
{
    public function load(ObjectManager $manager): void
    {
        // instanciation de Faker
        $faker = Faker\Factory::create('fr_FR');
    

       
      
              // Création de 6 catégories et 8 sous-catégories
              $categories = [];
              for ($i = 0; $i < 6; $i++) {
                  $category = new Category();
                  $category->setName($faker->word());
                  $category->setImageCatego('https://picsum.photos/200/300'); 
                  $category->setCategoryOrder($i);
                  
                  for ($j = 0; $j < 8; $j++) {
                      $subCategory = new Category();
                      $subCategory->setName($faker->word());
                      $subCategory->setParent($category);
                      $subCategory->setCategoryOrder($j);
                      $manager->persist($subCategory);
                  }
                  $manager->persist($category);
                  $categories[] = $category;
              }
      
              // Crétaion des marques
              $marques = [];
              for ($i = 0; $i < 10; $i++) {
                  $marque = new Marque();
                  $marque->setName($faker->company());
                  $marque->setlogo('https://picsum.photos/50/200');
                  $manager->persist($marque);
                  $marques[] = $marque;
              }
            // Création des images
              $images = [];
              for ($i = 0; $i < 200; $i++) {
                  $image = new Images();
                  $image->setName('https://picsum.photos/70/250');
                  $manager->persist($image);
                  $images[] = $image;
              }
              // Création des genres
              $genres = [];
            
                  $genre = new Genre();
                  $genre->setName('Homme');
                  $manager->persist($genre);
                  $genre = new Genre();
                  $genre->setName('Femme');
                  $manager->persist($genre);
                  $genres[] = $genre;
                  $genre = new Genre();
                  $genre->setName('Enfant');
                  $manager->persist($genre);
                  $genres[] = $genre;
                  
      
              
      
              // Création de 200 produits
               $produits = [];
              for ($i = 0; $i < 200; $i++) {
                  $produit = new Produits();
                  $produit->setName($faker->word());
                  $produit->setDescription($faker->text());
                  $produit->setPrix($faker->randomFloat(2, 0, 6000));
                  $produit->setStock($faker->numberBetween(0, 20));
                  $produit->addCategory($faker->randomElement($categories));
                  $produit->addMarque($faker->randomElement($marques));
                  for ($j = 0; $j < 8; $j++) {
                      $produit->addImage($faker->randomElement($images));
                  }
                  $produit->setReference($faker->ean8());
                  $produit->setNouveaute($faker->boolean());
                  $produit->setPromotion($faker->boolean());
                  $produit->setPrixPromotion($faker->randomFloat(2, 0, 6000));
                  $produit->setCadre($faker->word());
                  $produit->setFourche($faker->word());
                  $produit->setPneus($faker->word());
                  $produit->setPoids($faker->numberBetween(8, 20));
                  $produit->setTailleRoueVTT($faker->numberBetween(16, 29));
                  $produit->addGenre($faker->randomElement($genres));
                  $produit->addCategory($faker->randomElement($categories));
                  $produit->addMarque($faker->randomElement($marques)); 
                  $produit->setIsVae($faker->boolean());
      
                  $manager->persist($produit);
      
                  $produits[] = $produit;
              }
      
              // Création de 10 utilisateurs
              $users = [];
              for ($i = 0; $i < 10; $i++) {
                  $user = new User();
                  $user->setEmail($faker->email());
                  $user->setFirstname($faker->firstName());
                  $user->setLastname($faker->lastName());
                  $user->setPassword($faker->password());
                  $user->setRoles(['ROLE_USER']);
                  $manager->persist($user);
                  $users[] = $user;
              }
              $user = new User();
              $user->setEmail('benquelm@gmail.com');
              $user->setFirstname('Benoit');
              $user->setLastname('Quentin'); 
              $user->setPassword('demo1234');
              $user->setRoles(['ROLE_ADMIN']);
              $manager->persist($user);
              $users[] = $user; 
      
      
                 // Création de 50 adresses
                    $adresses = [];
                      for ($i = 0; $i < 50; $i++) {
                          $adresse = new Adresse();
                          $adresse
                              ->setNomAdresse($faker->word())
                              ->setCodePostal($faker->numberBetween(35000, 78000))
                              ->setVille($faker->city())
                              ->setNumeroRue($faker->buildingNumber())
                              ->setRue($faker->streetName())
                              ->setAddresseFav($faker->boolean())
                              ->setUser($faker->randomElement($users))                        
                              ;                    
                              $manager->persist($adresse);
                          $adresses[] = $adresse;
                      }
      

        $manager->flush();
    }
}
