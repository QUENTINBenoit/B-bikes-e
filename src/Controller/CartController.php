<?php

namespace App\Controller;

use App\Entity\Produits;
use App\Repository\ProduitsRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\Session\SessionInterface;
use Symfony\Component\Routing\Annotation\Route;

#[Route('/cart', name: 'cart_')]
class CartController extends AbstractController
{
    /**
     * @Route("/", name="home")
     */
    #[Route('/', name: 'home')]
    public function index(SessionInterface $session, ProduitsRepository $produitsRepository): Response
    {
        // je récupère le panier actuel
        $panier = $session->get("panier", []);
        // je fabrique  les données
        $dataPanier = [];
        $total = 0;
        $image = [];
        // je récupère les produits du panier
        foreach ($panier as $id => $quantity) {
            $product = $produitsRepository->find($id);
            $dataPanier[] = [
                "produit" => $product,
                "quantite" => $quantity,
                // je récupère la première image du produit de mon tableau d'images
                "imageRecup" => $product->getImages()->first()
            ];
            // je calcule le total
            $total += $product->getPrix() * $quantity;
        }
        \dump($dataPanier, $total);
        return $this->render('cart/index.html.twig', [
            'produitPanier' => $dataPanier,
            'totalPanier' => $total
        ]);
    }


    /**
     * @Route("/add/{id}", name="add")
     */
    #[Route('/add/{id}', name: 'add')]
    public function add(Produits $produits, SessionInterface $session): Response
    {
        // je récupère le panier actuel
        $panier = $session->get("panier", []);
        // je récupère l'id du produit
        $id = $produits->getId();
        // je vérifie si le produit est déjà dans le panier
        if (!empty($panier[$id])) {
            $panier[$id]++;
        } else {
            $panier[$id] = 1;
        }
        // Je sauvgaarde dans la session 
        $session->set("panier", $panier);
        return $this->redirectToRoute("cart_home");
    }
}
