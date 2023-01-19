<?php

namespace App\Controller\Admin;


use App\Entity\Produits;
use App\Form\ProductType;
use App\Repository\ProduitsRepository;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;




#[Route('/admin/product', name: 'admin_product_')]
class ProductController extends AbstractController
{

    /**
     * Méthode Affichant le liste des Produits
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
            $this->addFlash('flash-succecc', 'le produit' . $product->getName() . ' a bine été ajouter');
            return $this->redirectToRoute('admin_product_list');
        }
        return $this->render('admin/product/add.html.twig', [
            'formProducts' => $form->createView(),
        ]);
    }
}
