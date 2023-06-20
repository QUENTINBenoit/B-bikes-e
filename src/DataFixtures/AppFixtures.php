<?php

namespace App\DataFixtures;

use Faker;
use Stripe\Product;
use App\Entity\User;
use App\Entity\Marque;
use App\Entity\Category;
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

        // création de 10 marques
        for ($i = 0; $i < 10; $i++) {
            $marque = new Marque();
            $marque->setName($faker->company);
            $marque->setLogo('https://picsum.photos/200/300');




            $manager->persist($marque);
        }



        // création de users Role User
        for ($i = 0; $i < 10; $i++) {
            $user = new User();
            $user->setEmail($faker->email);
            $user->setPassword("demo1234");
            $user->setRoles(['ROLE_USER']);
            $user->setLastname($faker->lastName);
            $user->setFirstname($faker->firstName);

            $user->setAvatar('https://picsum.photos/200/300');
            $user->setIsVerified(true);

            $user->setAvatar($faker->imageUrl(100, 100));
            $manager->persist($user);
        }




        // création de users Role Admin


        $user = new User();
        $user->setEmail("ben@gmail.com");
        $user->setPassword("demo1234");
        $user->setRoles(['ROLE_SUPER_ADMIN']);
        $user->setLastname("Benoit");
        $user->setFirstname("QUENTIN");

        $user->setAvatar('https://randomuser.me/api/portraits/men/75.jpg');
        $user->setIsVerified(true);
        $manager->persist($user);


        // Création de 10  catégories de vélos
        for ($i = 0; $i < 10; $i++) {
            $categorie = new Category();
            $categorie->setName($faker->word);
            $categorie->setParent(rand(0, 4) ? $categorie : null);
            $categorie->setCategoryOrder($i);
            $categorie->addCategory($categorie);
            $categorie->setImageCatego('https://picsum.photos/200/300');


            $manager->persist($categorie);
        }

        // création de 10 produits
        for ($i = 0; $i < 10; $i++) {
            $product = new Produits();
            $product->setName($faker->word);
            $product->setDescription($faker->text);
            $product->setPrix($faker->numberBetween(100, 1000));
            $product->setPoids($faker->numberBetween(2, 8));
            $product->setReference($faker->numberBetween(100, 1000));
            $product->setNouveaute($faker->boolean);
            $product->setPromotion($faker->boolean);
            $product->setStock($faker->numberBetween(0, 100));
            $product->setFrein($faker->text(30));
            $product->setPedalier($faker->text(30));
            $product->setAmortisseur($faker->text(30));
            $product->setCadre($faker->text(30));
            $product->setCintre($faker->text(30));
            $product->setTailleRoueVTT($faker->numberBetween(24, 29));
            $product->setDerailleurAr($faker->text(30));
            $product->setFourche($faker->text(30));
            $product->setManettes($faker->text(30));
            $product->setPneus($faker->text(30));
            $product->addCategory($categorie);
            $product->addMarque($marque);

            $manager->persist($product);
        }




        $manager->flush();
    }
}
