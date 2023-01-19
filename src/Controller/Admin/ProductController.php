<?php

namespace App\Controller\Admin;


use App\Entity\Produits;
use App\Form\ProductType;
use App\Repository\ProduitsRepository;
use Doctrine\ORM\EntityManagerInterface;
use Doctrine\Persistence\ManagerRegistry;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;




#[Route('/admin/product', name: 'admin_product_')]
class ProductController extends AbstractController
{

    /**
     * Méthode affichant la liste des Produits
     *
     * @param ProduitsRepository $produitsRepository
     * @return Response
     */
    #[Route('/', name: 'list')]
    public function listPorduct(ProduitsRepository $produitsRepository): Response
    {

        return $this->render('admin/product/index.html.twig', [
            'produits' => $produitsRepository->findAll(),
        ]);
    }

    /**
     * Méthode d'ajout d'un produit 
     *
     * @param Request $request
     * @param EntityManagerInterface $em
     * @return Response
     */
    #[Route('/add', name: 'add')]
    public function addProducts(Request $request,  EntityManagerInterface $em): Response
    {
        $product = new Produits;
        $form = $this->createForm(ProductType::class, $product);

        $form->handleRequest($request);
        if ($form->isSubmitted() && $form->isValid()) {
            $em->persist($product);
            $em->flush();
            $this->addFlash('flash-success', 'le produit' . $product->getName() . ' a bien été ajouté');
            return $this->redirectToRoute('admin_product_list');
        }
        return $this->render('admin/product/add.html.twig', [
            'formProducts' => $form->createView(),
        ]);
    }
    /**
     * Méthode de suppression d'un produit
     *
     * @param Produits $produits
     * @param ManagerRegistry $doctrine
     * @return void
     */
    #[Route('/delete/{id}', name: 'delete')]
    public function deleteProduits(Produits $produits, ManagerRegistry $doctrine)
    {
        $em = $doctrine->getManager();
        $em->remove($produits);
        $em->flush();
        $this->addFlash('flash-success', 'le produit' . $produits->getName() . ' a bien été supprimé');
        return $this->redirectToRoute('admin_product_list');
    }


    /**
     * Méthode de mise à jour d'un produit
     *
     * @param Produits $produits
     * @param Request $request
     * @param ManagerRegistry $doctrine
     * @return void
     */
    #[Route('/edit/{id}', name: 'edit')]

    public function editProduct(Produits $produits, Request $request, ManagerRegistry $doctrine)
    {
        $form = $this->createForm(ProductType::class, $produits);
        $form->handleRequest($request);
        if ($form->isSubmitted() && $form->isSubmitted()) {
            $em = $doctrine->getManager();
            $em->flush();
            $this->addFlash('flash-success', 'le produit ' . $produits->getName() . ' a bien été mis à jour');
            return $this->redirectToRoute('admin_product_list');
        }
        return $this->render('admin/product/edit.html.twig', [
            'formEditProduct' => $form->createView(),
        ]);
    }
}
