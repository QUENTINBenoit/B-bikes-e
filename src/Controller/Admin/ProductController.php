<?php

namespace App\Controller\Admin;

use App\Entity\Equipements;
use App\Entity\Images;
use App\Entity\Produits;
use App\Form\ProductType;
use App\Repository\ProduitsRepository;
use App\service\PictureService;
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
    public function addProducts(Request $request,  EntityManagerInterface $em, PictureService $pictureService): Response
    {
        $product = new Produits;
        $form = $this->createForm(ProductType::class, $product);
        $form->handleRequest($request);
        if ($form->isSubmitted() && $form->isValid()) {
            // Service permettant l'upload d'un image

            $images = $form->get('image')->getData();


            foreach ($images as $image) {
                // On défini le dossier de destination de l'image
                $folder = 'products';
                // On appelle le service d'ajout d'image
                $fichier = $pictureService->add($image, $folder, 300, 300);
                // Mise a jour du chemin vers l'image en BDD
                $img = new Images;
                $img->setName($fichier);
                $product->addImage($img);
            }

            $em->persist($product);
            $em->flush();
            $this->addFlash('flash-success', 'le produit' . $product->getName() . ' a bien été ajouté');
            return $this->redirectToRoute('admin_product_list');
        }


        return $this->render('admin/product/add.html.twig', [
            'formProducts' => $form->createView(),
            'product' => $product
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

    public function editProduct(Produits $product, Request $request, ManagerRegistry $doctrine, PictureService $pictureService)
    {
        $form = $this->createForm(ProductType::class, $product);
        $form->handleRequest($request);
        dump($product);
        if ($form->isSubmitted() && $form->isSubmitted()) {
            // Service permettant l'upload d'un image

            $images = $form->get('image')->getData();


            foreach ($images as $image) {
                // On défini le dossier de destination de l'image
                $folder = 'products';
                // On appelle le service d'ajout d'image
                $fichier = $pictureService->add($image, $folder, 300, 300);
                // Mise a jour du chemin vers l'image en BDD
                $img = new Images;
                $img->setName($fichier);
                $product->addImage($img);
            }
            $em = $doctrine->getManager();
            $em->flush();
            $this->addFlash('flash-success', 'le produit ' . $product->getName() . ' a bien été mis à jour');
            return $this->redirectToRoute('admin_product_list');
        }
        return $this->render('admin/product/edit.html.twig', [
            'formProducts' => $form->createView(),
            'product' => $product
        ]);
    }
}
