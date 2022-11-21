<?php

namespace App\Controller;

use App\Entity\Category;
use App\Repository\CategoryRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class HomeController extends AbstractController
{
    #[Route('/home', name: 'app_home', methods: ['GET'])]
    public function home(CategoryRepository $categoryRepository): Response
    {
             
            // dd($categoryRepository->findAll()); 

        return $this->render('home/index.html.twig', [
            'categories' => $categoryRepository->findAll(),
        ]);
    }

    #[Route('/test/{id}', name: 'tes', methods: ['GET'])]
    public function testParent(int $id, CategoryRepository $categoryRepository): Response
    {
             
           

        return $this->render('home/test.html.twig', [
            'categories' => $categoryRepository->findBy(['id' => $id]),
        ]);
    }

}
