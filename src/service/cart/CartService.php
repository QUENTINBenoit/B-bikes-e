<?php

namespace App\service\cart;


use Symfony\Component\HttpFoundation\RequestStack;
use Symfony\Component\HttpFoundation\Session\SessionInterface;

class CartService
{


  public function __construct(private RequestStack $RequestStack)
  {
  }

  /**
   * Récupérer la session
   *
   * @return SessionInterface
   */
  private function sessionBen(): SessionInterface
  {
    return $this->RequestStack->getSession();
  }


  /**
   * Récupérer le panier complet et calcule le total
   *
   * @param [type] $produitsRepository
   * @return array
   */
  public function getfullCart($produitsRepository): array
  {
    // je récupère le panier actuel
    $panier = $this->sessionBen()->get("panier", []);
    // je fabrique  les données
    $dataPanier = [];
    $total = 0;
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
    // je retourne les données
    return [
      "dataPanier" => $dataPanier,
      "total" => $total
    ];
  }




  /**
   * Ajouter un produit au panier
   *
   * @param integer $id
   * @return void
   */

  public function add(int $id)
  {
    // je récupère le panier actuel
    $panier = $this->sessionBen()->get('panier', []);


    // je vérifie si le produit est déjà dans le panier
    if (!empty($panier[$id])) {
      $panier[$id]++;
    } else {
      $panier[$id] = 1;
    }
    // Je sauvgaarde dans la session 
    $this->sessionBen()->set("panier", $panier);
  }

  /**
   * Supprimer un produit du panier
   *
   * @param integer $id
   * @return void
   */
  public function remove(int $id)
  {
    // je récupère le panier actuel
    $panier = $this->sessionBen()->get("panier", []);

    // je vérifie si le produit est déjà dans le panier
    if (!empty($panier[$id])) {
      if ($panier[$id] > 1) {
        $panier[$id]--;
      } else {
        unset($panier[$id]);
      }
    }
    // Je sauvgarde dans la session 
    $this->sessionBen()->set("panier", $panier);
  }

  
  /**
   * Supprimer un produit du panier
   *
   * @param integer $id
   * @return void
   */
  public function delete(int $id)
  {
    // je récupère le panier actuel
    $panier = $this->sessionBen()->get("panier", []);

    // je vérifie si le produit est déjà dans le panier
    // alors je le supprime
    if (!empty($panier[$id])) {
      unset($panier[$id]);
    }
    // Je sauvgarde dans la session 
    $this->sessionBen()->set("panier", $panier);
  }
}
