<?php

namespace App\Controller;

use App\Entity\Category;
use App\Repository\CategoryRepository;
use App\Repository\MarqueRepository;
use App\Repository\ProduitsRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;


class HomeController extends AbstractController
{

    #[Route('/', name: 'home', methods: ['GET'])]

    public function home(
        CategoryRepository $categoryRepository,
        MarqueRepository $marqueRepository,

    ): Response {

        $cat = $categoryRepository->findAll();
        $maq = $marqueRepository->findAll();

        \dump($cat, $maq);
        return $this->render('home/home.html.twig', [
            'categories' => $cat,
            'marques' => $maq
        ]);
    }
}
