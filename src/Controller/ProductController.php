<?php

namespace App\Controller;

use App\Entity\Category;
use App\Entity\Produits;
use App\Form\CategoryType;
use App\Form\FiterType;
use App\Repository\CategoryRepository;
use App\Repository\ProduitsRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
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
        public function showAllProduct( ProduitsRepository  $produitsRepository, Request $request): Response
        {  
           $produits = $produitsRepository->findAll();
           \dump($produits);
           $productsFrom = new Produits();
           
           $form = $this->createForm(FiterType::class, $productsFrom);
       
           $form->handleRequest($request);
          
           if($form->isSubmitted() && $form->isValid() ){
            dump($form->getData());
           }
        
        return $this->render('product/listProduits.html.twig', [
            'product' => $produits,
            'form' => $form->createView()
        ]);
        }

       
    #[Route('/{id}', name:'details', methods:['GET'], requirements: ['id' => '\d+'])] 
        public function detailsProduct(int $id, ProduitsRepository $produitsRepository): Response
        {
        \dump('route de details produits ');
         $detailsProduct = $produitsRepository->findWithDetailsProduct($id) ; 
         \dump($detailsProduct); 
        return $this->render('product/detailsProduit.html.twig', [
                'productId' => $detailsProduct,         
        ]);    
       
        }


        #[Route('/add', name: 'add', methods:['GET'])]
        public function addProdutis(Request $request, ProduitsRepository $produitsRepository){
            $produits = new Produits();
            $form = $this->createForm(FiterType::class, $produits);
            $form->handleRequest($request);
            return $this->render('product/addProduits.html.twig', [
                'form' => $form->createView()
            ]);
        }


}
