<?php

namespace App\Controller;


use App\Repository\CategoryRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;


#[Route('/categorie', name: 'categorie_',)]
class CategorieController extends AbstractController
{
    #[Route('/list', name: 'list')]
    public function categorieList(CategoryRepository $categoryRepository): Response
    {
        dd($categoryRepository->findAll());
        return $this->render('categorie/index.html.twig', [
            'controller_name' => 'CategorieController',
        ]);
    }
    #[Route('/{id}', name: 'catego', methods: ['GET'], requirements: ['id' => '\d+'])]
    public function categorie(int $id, CategoryRepository $categoryRepository): response
    {

        $detailsCategory = $categoryRepository->findProduitByCetagoryId($id);
        \dump($detailsCategory);
        return $this->render('categorie/index.html.twig', [
            'listProdByCategoId' => $detailsCategory,
        ]);
    }
}
