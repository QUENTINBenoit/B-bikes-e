<?php

namespace App\Controller;

use App\Entity\Produits;
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

       
    #[Route('/{id}', name:'details', methods:['GET'], requirements: ['id' => '\d+'])] 
        public function detailsProduct(int $id, ProduitsRepository $produitsRepository): Response
        {
        \dump('route de details produits ');
         $detailsProduct = $produitsRepository->findWithDetailsProduct($id) ; 
         \dd($detailsProduct); 
        return $this->render('product/detailsProduit.html.twig', [
        
        ]);    
       
        }


}
