<?php

namespace App\Controller;

use App\Repository\ProduitsRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;


#[Route('/produit', name: 'product_',)]
class ProductController extends AbstractController
{
    /**
     * Methode permettant d'affiche tout les produits
     *
     * @param ProduitsRepository $produitsRepository
     * @return Response
     */
    #[Route('/list', name: 'list', methods:['GET'])]
        public function showAllProduct( ProduitsRepository  $produitsRepository): Response
        {
           $produits = $produitsRepository->findAll();
           dump($produits); 

        return $this->render('product/listProduits.html.twig', [
            'product' => $produits,
        ]);
        }

       
    #[Route('/details', name:'details', methods:['GET'])] 
        public function detailsProduct(): Response
        {
        \dump('route de details produits '); 
        return $this->render('product/detailsProduit.html.twig');    
       
        }


}
