<?php

namespace App\Controller;

use App\Entity\Category;
use App\Entity\Produits;
use App\Form\FiterType;
use App\Repository\CategoryRepository;
use App\Repository\ProduitsRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;


#[Route('/categorie', name: 'categorie_',)]
class CategorieController extends AbstractController
{
    #[Route('/list', name: 'list')]
    public function categorieList(CategoryRepository $categoryRepository): Response
    {
        dump($categoryRepository->findAll());


        return $this->render('categorie/index.html.twig', [
            'categories' => $categoryRepository->findAll(),
        ]);
    }


    #[Route('/{id}', name: 'catego', methods: ['GET'], requirements: ['id' => '\d+'])]
    public function categorie(int $id, CategoryRepository $categoryRepository, Request $request, ProduitsRepository $produitsRepository): response
    {
        $produits = $produitsRepository->findAll();
        $detailsCategory = $categoryRepository->findProduitByCetagoryId($id);
        $productForm = new Produits;
        $filter = $request->query->all();
        $form = $this->createForm(FiterType::class, $productForm);
        $form->handleRequest($request);
        if ($form->isSubmitted() && $form->isValid()) {
            if (isset($filter['fiter'])) {
                $produits = $produitsRepository->findByFilter($filter['fiter']);
                // \dd($produits);
            } else {
                $produits = $produitsRepository->findAll();
            }
            return $this->render('product/listProduits.html.twig', [
                'product' => $produits,
                'form' => $form->createView()
            ]);
        }
        return $this->render('categorie/index.html.twig', [

            'listProdByCategoId' => $detailsCategory,
            'form' => $form->createView()

        ]);
    }
}
