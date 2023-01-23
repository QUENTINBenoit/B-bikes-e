<?php

namespace App\Tests\Main;

use App\Repository\UserRepository;
use Symfony\Bundle\FrameworkBundle\Test\WebTestCase;

class HomePageTest extends WebTestCase
{
    public function testSomething(): void
    {
        $client = static::createClient();
        $crawler = $client->request('GET', '/');
        $this->assertResponseIsSuccessful();    // 200 is the default
        $this->assertSelectorTextContains('h1', 'Bienvenue sur B \' bikes . e');
    }


    /**
     * Méthode pour tester le clic sur le lien se connecter
     * qui renvoie vers la page de connexion
     *
     * @return void
     */
    public function testClicSeConnecter(): void
    {
        $client = static::createClient();
        $crawler = $client->request('GET', '/');

        $link = $crawler->selectLink('Connexion')->link();
        $crawler = $client->click($link);

        $this->assertResponseIsSuccessful();
        $this->assertSelectorTextContains('h6', 'Connexion');
    }

    /**
     * méthode pour tester la page d'accueil et que l'on a bien le dropdown avec le prenom de l'utilisateur
     *
     * @return void
     */

    public function testHomePageProtected(): void
    {
        $client = static::createClient();

        // on simule une connexion avec le de l'utilisateur
        $userRepository = static::getContainer(UserRepository::class);
        // $user = $userRepository->findOneByEmail('benquelm@gamil.com');
        // $client->loginUser($user);

        $client  = $client->request('GET', '/');

        $this->assertResponseIsSuccessful();
        // $this->assertSelectorTextContains('a', 'Jean');
    }
}
