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
        CategoryRepository $categoryRepository,
        MarqueRepository $marqueRepository,
    ): Response {
        $cat = $categoryRepository->findAll();
        $maq = $marqueRepository->findAll();
        \dump($cat, $maq);
        return $this->render('home/home.html.twig', [
            'categories' => $cat,
            'marques' => $maq,
        ]);
    }


    #[Route('/search', name: 'search')]
    public function search(Request $request, ProduitsRepository $produitsRepository)
    {
        // recuperation des information saisie dans le formulaire
        $searchVaule = $request->get('q');
        \dump($searchVaule);
        $product = $produitsRepository->findBySearchValue($searchVaule);
        \dump($product);
        return $this->render('home/search.html.twig', [
            'product' => $product,
            'searchValue' => $searchVaule,
        ]);
    }
}
