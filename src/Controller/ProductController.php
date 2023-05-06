<?php

namespace App\Controller;

use App\Entity\Produits;
use App\Form\FiterType;
use App\Form\ProductType;
use App\Repository\ProduitsRepository;
use Doctrine\Common\Proxy\Proxy;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;


#[Route('/produit', name: 'product_',)]
class ProductController extends AbstractController
{
    /**
     * Méthode permettant d'afficher tous les produits
     *
     * @param ProduitsRepository $produitsRepository
     * @return Response
     */
    #[Route('/list', name: 'list', methods: ['GET'])]
    public function showAllProduct(ProduitsRepository  $produitsRepository,  Request $request): Response
    {
        $produits = $produitsRepository->findAll();
        $productsFrom = new Produits();
        $filter = $request->query->all();
        $form = $this->createForm(FiterType::class, $productsFrom);
        $form->handleRequest($request);
        if ($form->isSubmitted() && $form->isValid()) {
            if (isset($filter['fiter'])) {
                $produits = $produitsRepository->findByFilter($filter['fiter']);
            } else {
                $produits = $produitsRepository->findAll();
            }
        }

        return $this->render('product/listProduits.html.twig', [
            'product' => $produits,
            'form' => $form->createView()
        ]);
    }

    /**
     * Affiche le detail d'un produit 
     *
     * @param integer $id
     * @param ProduitsRepository $produitsRepository
     * @return Response
     */
    #[Route('/{id}', name: 'details', methods: ['GET'], requirements: ['id' => '\d+'])]
    public function detailsProduct(int $id, ProduitsRepository $produitsRepository): Response
    {

        $detailsProduct = $produitsRepository->findWithDetailsProduct($id);


        return $this->render('product/detailsProduit.html.twig', [
            'productId' => $detailsProduct,
        ]);
    }


    #[Route('/add', name: 'add', methods: ['GET'])]
    public function addProdutis(Request $request, ProduitsRepository $produitsRepository)
    {
        $produits = new Produits();
        $form = $this->createForm(FiterType::class, $produits);
        $form->handleRequest($request);
        return $this->render('product/addProduits.html.twig', [
            'form' => $form->createView()
        ]);
    }

    #[Route('/dropzone', name: 'dropzone')]
    public function dropzone(Request $request, ProduitsRepository $produitsRepository)
    {
        $produits = new Produits();
        $form = $this->createForm(ProductType::class, $produits);
        $form->handleRequest($request);
        return $this->render('product/dorpzone/test.html.twig', [

            'form' => $form->createView()
        ]);
    }
}
