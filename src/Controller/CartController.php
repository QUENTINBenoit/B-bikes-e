<?php

namespace App\Controller;

use App\Repository\ProduitsRepository;
use App\service\cart\CartService;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

#[Route('/cart', name: 'cart_')]
class CartController extends AbstractController
{
    /**
     * Afficher le panier
     */
    #[Route('/', name: 'home')]
    public function index(CartService $cartService, ProduitsRepository $produitsRepository): Response
    {

        $data = $cartService->getfullCart($produitsRepository);
        return $this->render('cart/index.html.twig', [
            'produitPanier' => $data['dataPanier'],
            'totalPanier' => $data['total']
        ]);
    }


    /**
     * Ajouter un produit au panier
     * en faisant appel à la méthode add du service CartService
     */
    #[Route('/add/{id}', name: 'add')]
    public function add($id, CartService $cartService): Response
    {
        $cartService->add($id);
        return $this->redirectToRoute("cart_home");
    }
    /**
     * Supprimer un produit du panier
     * en faisant appel à la méthode remove du service CartService
     */
    #[Route('/remove/{id}', name: 'remove')]
    public function remove($id, CartService $cartService): Response
    {
        $cartService->remove($id);
        return $this->redirectToRoute("cart_home");
    }
}
