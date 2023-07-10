<?php

namespace App\Controller;

use App\Entity\Produits;
use App\Form\FiterType;
use App\Repository\ProduitsRepository;
use Knp\Component\Pager\PaginatorInterface;
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
    public function showAllProduct(
        ProduitsRepository $produitsRepository,
        PaginatorInterface $paginator,
        Request $request
    ): Response {
        $data = $produitsRepository->findAll();
        $produits = $paginator->paginate(
            $data,
            $request->query->getInt('page', 1),
            15
        );
        $productsFrom = new Produits();
        $filter = $request->query->all();
        $form = $this->createForm(FiterType::class, $productsFrom);
        $form->handleRequest($request);
        if ($form->isSubmitted() && $form->isValid()) {
            if (isset($filter['fiter'])) {
                $data = $produitsRepository->findByFilter($filter['fiter']);
                $produits = $paginator->paginate(
                    $data,
                    $request->query->getInt('page', 1),
                    15
                );
            } else {
                $produits;
            }
        }

        return $this->render('product/listProduits.html.twig', [
            'product' => $produits,
            'form' => $form->createView()
        ]);
    }

    // methodes pour afficher les produits de type vae 
    #[Route('/list/vae', name: 'list_vae', methods: ['GET'])]
    public function showAllProductVae(
        ProduitsRepository $produitsRepository,
        PaginatorInterface $paginator,
        Request $request
    ): Response {
        $data = $produitsRepository->findByeVae();
        $produits = $paginator->paginate(
            $data,
            $request->query->getInt('page', 1),
            15
        );
        $productsFrom = new Produits();
        $filter = $request->query->all();
        $form = $this->createForm(FiterType::class, $productsFrom);
        $form->handleRequest($request);
        if ($form->isSubmitted() && $form->isValid()) {
            if (isset($filter['fiter'])) {
                $data = $produitsRepository->findByFilterVae($filter['fiter']);
                $produits = $paginator->paginate(
                    $data,
                    $request->query->getInt('page', 1),
                    15
                );
            } else {
                $produits;
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
}
