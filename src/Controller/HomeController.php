<?php

namespace App\Controller;

use App\Entity\Produits;
use App\Form\FiterType;
use App\Repository\CategoryRepository;
use App\Repository\MarqueRepository;
use App\Repository\ProduitsRepository;
use Knp\Component\Pager\PaginatorInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;


class HomeController extends AbstractController
{
    /**
     *  Methode affichant la page home 
     *
     * @param CategoryRepository $categoryRepository
     * @param MarqueRepository $marqueRepository
     * @return Response
     */
    #[Route('/', name: 'home', methods: ['GET'])]
    public function home(
        ProduitsRepository $produitsRepository,
        CategoryRepository $categoryRepository,
        MarqueRepository $marqueRepository,
    ): Response {
        $prod = $produitsRepository->findAll();
        $cat = $categoryRepository->findBy([], ['categoryOrder' => 'asc']);
        $maq = $marqueRepository->findAll();
        return $this->render('home/home.html.twig', [
            'categories' => $cat,
            'product' => $prod,
            'marques' => $maq,
        ]);
    }


    #[Route('/search', name: 'search')]
    public function search(
        Request $request, 
        ProduitsRepository $produitsRepository, 
        PaginatorInterface $paginator)
    {
        // recuperation des information saisie dans le formulaire
        $searchVaule = $request->get('q');

        $data = $produitsRepository->findBySearchValue($searchVaule);
        $product = $paginator->paginate(
            $data,
            $request->query->getInt('page', 1),
            8
        ); 


        $productForm = new Produits();
        $filter = $request->query->all();
        $form = $this->createForm(FiterType::class, $productForm);
        $form->handleRequest($request);
        if ($form->isSubmitted() && $form->isValid()) {
            if (isset($filter['fiter'])) {
                $data = $produitsRepository->findByFilter($filter['fiter']);
                $product = $paginator->paginate(
                    $data,
                    $request->query->getInt('page', 1),
                    8
                );
            } else {
                $product;
            }
        }



        return $this->render('home/search.html.twig', [
            'product' => $product,
            'searchValue' => $searchVaule,
            'form' => $form->createView()   
        ]);
    }
}
