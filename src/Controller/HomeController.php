<?php

namespace App\Controller;

use App\Form\SearchType;
use App\Model\SearchData;
use App\Repository\CategoryRepository;
use App\Repository\MarqueRepository;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;


class HomeController extends AbstractController
{

    #[Route('/', name: 'home', methods: ['GET'])]

    public function home(
        CategoryRepository $categoryRepository,
        MarqueRepository $marqueRepository,
        Request $request
    ): Response {
        $searchData = new SearchData();
        $form = $this->createForm(SearchType::class, $searchData);
        $form->handleRequest($request);
        if ($form->isSubmitted() && $form->isValid()) {
            dd($searchData->q);
        }



        $cat = $categoryRepository->findAll();
        $maq = $marqueRepository->findAll();

        \dump($cat, $maq);
        return $this->render('home/home.html.twig', [
            'categories' => $cat,
            'marques' => $maq,
            'form' => $form->createView(),
        ]);
    }
}
