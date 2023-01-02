<?php

namespace App\Controller;

use App\Repository\MarqueRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;


#[Route('/marques', name: 'marques_')]
class MarquesController extends AbstractController
{
    #[Route('/list', name: 'list')]
    public function index(): Response
    {
        return $this->render('marques/index.html.twig', [
            'controller_name' => 'MarquesController',
        ]);
    }

    #[Route('/{id}', name: 'listproduit', methods: ['GET'], requirements: ['id' => '\d+'])]
    public function listMarqueByProduit(int $id, MarqueRepository $marqueRepository): Response
    {

        $listMarquesByProduits = $marqueRepository->findProduitsByMarquesId($id);
        \dump($listMarquesByProduits);
        return $this->render('marques/index.html.twig', [
            'listProdByMarqueId' =>  $listMarquesByProduits,
        ]);
    }
}
