<?php

namespace App\Controller;


use App\Repository\CategoryRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;


class HomeController extends AbstractController
{

    #[Route('/', name: 'home', methods: ['GET'])]

    public function home(CategoryRepository $categoryRepository): Response
    {
        //\dump($categoryRepository->findAll());

        return $this->render('home/home.html.twig', [
            'categories' => $categoryRepository->findAll()
        ]);
    }
}
