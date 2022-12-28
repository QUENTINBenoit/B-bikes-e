<?php

namespace App\Controller;


use App\Repository\CategoryRepository;
use App\Repository\ProduitsRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;


class HomeController extends AbstractController
{

    #[Route('/', name: 'home', methods: ['GET'])]

    public function home(ProduitsRepository $produitsRepository): Response
    {
        \dump($produitsRepository->findAll());

        return $this->render('home/home.html.twig', [
            'produits' => $produitsRepository->findAll()
        ]);
    }
}
