<?php

namespace App\Controller\Admin;

use App\Entity\Category;
use App\Form\CategoriesType;
use App\Repository\CategoryRepository;
use Doctrine\Persistence\ManagerRegistry;
use Faker\Guesser\Name;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

#[Route('/admin/categories', name: 'admin_categories_')]
class CategoriesController extends AbstractController
{

    /**
     * Methode Affichant la liste des catégories 
     *
     * @param CategoryRepository $categoryRepository
     * @return Response
     */
    #[Route('/', name: 'list')]
    public function listCategories(CategoryRepository $categoryRepository): Response
    {
        $cat = $categoryRepository->findAll();
        \dump($cat);

        return $this->render('admin/categories/index.html.twig', [
            'categories' => $cat,
        ]);
    }

    /**
     * Methode permettant d'ajouter une catégorie
     *
     * @param Request $request
     * @param ManagerRegistry $doctrine
     * @return void
     */
    #[Route('/add', name: 'add')]
    public function addCategories(Request $request, ManagerRegistry $doctrine)
    {

        $categories = new Category;
        $form = $this->createForm(CategoriesType::class,  $categories);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $em = $doctrine->getManager();
            $em->persist($categories);
            $em->flush();
            $this->addFlash('flash-success', 'la categorie ' . $categories->getName() . 'a bien ete ajouté');
            return $this->redirectToRoute('admin_categories_list');
        }



        return $this->render('admin/categories/add.html.twig', [
            'formCategories' => $form->createView(),
        ]);
    }

    /**
     * Methode permettant de supprimer une catégorie
     *
     * @param Category $category
     * @param ManagerRegistry $doctrine
     * @return void
     */
    #[Route('/delete/{id}', name: 'delete')]
    public function deleteCategories(Category $category, ManagerRegistry $doctrine)
    {
        $em = $doctrine->getManager();
        $em->remove($category);
        $em->flush();
        $this->addFlash('flash-success', 'la categorie ' . $category->getName() . ' a bien été supprimée');
        return $this->redirectToRoute('admin_categories_list');
    }

    #[Route('/edit/{id}',  name: 'edit')]
    public function editCategories(Category $category, Request $request, ManagerRegistry $doctrine)
    {
        $form = $this->createForm(CategoriesType::class, $category);
        $form->handleRequest($request);
        if ($form->isSubmitted() && $form->isValid()) {
            $em = $doctrine->getManager();
            $em->flush();
            $this->addFlash('flash-success', 'la categorie ' . $category->getName() . ' a bien été mise jour');
            return $this->redirectToRoute('admin_categories_list');
        }
        return $this->render('admin/categories/edit.html.twig', [
            'formEditCategorie' => $form->createView(),
            'categories' => $category,
        ]);
    }
}
