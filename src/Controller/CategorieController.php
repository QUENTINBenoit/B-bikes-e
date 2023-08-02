<?php

namespace App\Controller;

use App\Entity\Category;
use App\Entity\Produits;
use App\Form\FiterType;
use App\Repository\CategoryRepository;
use App\Repository\ProduitsRepository;
use Doctrine\ORM\Tools\Pagination\Paginator;
use Knp\Component\Pager\PaginatorInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;




#[Route('/categorie', name: 'categorie_',)]
class CategorieController extends AbstractController
{
    /**
     * Méthode permettant d'afficher toutes les categories
     *
     * @param CategoryRepository $categoryRepository
     * @return Response
     */
    #[Route('/list', name: 'list')]
    public function categorieList(CategoryRepository $categoryRepository): Response
    {
        // dump($categoryRepository->findAll());


        return $this->render('categorie/index.html.twig', [
            'categories' => $categoryRepository->findAll(),
        ]);
    }


    /**
     * Méthode permettant d'afficher les produits d'une categorie
     *
     * @param integer $id
     * @param CategoryRepository $categoryRepository
     * @param Request $request
     * @param ProduitsRepository $produitsRepository
     * @param PaginatorInterface $paginator
     * @return Response
     */
    #[Route('/{id}', name: 'catego', methods: ['GET'], requirements: ['id' => '\d+'])]
    public function categorie(
        int $id,
        CategoryRepository $categoryRepository,
        Request $request,
        ProduitsRepository $produitsRepository,
        PaginatorInterface $paginator
    ): response {
        $data = $produitsRepository->findAll();
        $produits = $paginator->paginate(
            $data,
            $request->query->getInt('page', 1),
            15
        );
        $detailsCategory = $categoryRepository->findProduitByCetagoryId($id);

        $productForm = new Produits;
        $filter = $request->query->all();
        $form = $this->createForm(FiterType::class, $productForm);
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
            return $this->render('product/listProduits.html.twig', [
                'product' => $produits,
                'form' => $form->createView()
            ]);
        }
        return $this->render('categorie/index.html.twig', [

            'listProdByCategoId' => $detailsCategory,
            'form' => $form->createView()

        ]);
    }
}
