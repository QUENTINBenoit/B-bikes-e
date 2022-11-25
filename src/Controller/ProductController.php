<?php

namespace App\Controller;

use App\Repository\ProduitsRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class ProductController extends AbstractController
{
    #[Route('/produit', name: 'product', methods:['GET'])]
    public function showAllProduct( ProduitsRepository  $produitsRepository): Response
    {
           $ben = $produitsRepository->findAll();
           dump($ben); 

        return $this->render('product/listProduits.html.twig', [
            'product' => $ben,
        ]);
    }
}
