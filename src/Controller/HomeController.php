<?php

namespace App\Controller;


use App\Repository\CategoryRepository;
use App\Repository\MarqueRepository;
use App\Repository\ProduitsRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;


class HomeController extends AbstractController
{
    /**
     *  Methode affichant la page home 
     *
     * @param CategoryRepository $categoryRepository
     * @param MarqueRepository $marqueRepository
     * @return Response
     */
    #[Route('/', name: 'home', methods: ['GET'])]
    public function home(
        ProduitsRepository $produitsRepository,
        CategoryRepository $categoryRepository,
        MarqueRepository $marqueRepository,
    ): Response {
        $prod = $produitsRepository->findAll();
        $cat = $categoryRepository->findBy([], ['categoryOrder' => 'asc']);
        $maq = $marqueRepository->findAll();
        return $this->render('home/home.html.twig', [
            'categories' => $cat,
            'product' => $prod,
            'marques' => $maq,
        ]);
    }


    #[Route('/search', name: 'search')]
    public function search(Request $request, ProduitsRepository $produitsRepository)
    {
        // recuperation des information saisie dans le formulaire
        $searchVaule = $request->get('q');

        $product = $produitsRepository->findBySearchValue($searchVaule);

        return $this->render('home/search.html.twig', [
            'product' => $product,
            'searchValue' => $searchVaule,
        ]);
    }
}
