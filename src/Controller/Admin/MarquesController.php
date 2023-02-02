<?php

namespace App\Controller\Admin;

use App\Entity\Marque;
use App\Form\MarqueType;
use App\Repository\MarqueRepository;
use App\service\PictureService;
use Doctrine\Persistence\ManagerRegistry;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

#[Route('/admin', name: 'admin_marques_')]
class MarquesController extends AbstractController
{
    /**
     * Méthode affichant la liste des marques 
     *
     * @param MarqueRepository $marqueRepository
     * @return Response
     */
    #[Route('/marques', name: 'list')]
    public function listBrands(MarqueRepository $marqueRepository): Response
    {

        return $this->render('admin/marques/index.html.twig', [
            'listMarques' =>  $marqueRepository->findAll(),
        ]);
    }

    /**
     * Méthode permettant d'ajouter une Marque
     *
     * @param Request $request
     * @param MarqueRepository $marqueRepository
     * @param ManagerRegistry $doctrine
     * @return void
     */
    #[Route('/add', name: 'add')]
    public function addMarques(Request $request, MarqueRepository $marqueRepository, ManagerRegistry $doctrine, PictureService $pictureService)
    {

        $brands = new Marque;
        $form = $this->createForm(MarqueType::class,  $brands);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {

            $logo = $form->get('logo')->getData();
            $folder = 'logo';
            $fichier = $pictureService->add($logo, $folder, 300, 300);
            $brands->setlogo($fichier);

            $em = $doctrine->getManager();
            $em->persist($brands);
            $em->flush();
            $this->addFlash('flash-success', 'Le nom de la marque ' . $brands->getName() . ' a bien été ajouté');
            return $this->redirectToRoute('admin_marques_list');
        }


        return $this->render('admin/marques/add.html.twig', [
            'formMarques' => $form->createView(),
        ]);
    }

    /**
     * Méthode permettant de supprimer une marque 
     *
     * @param Marque $marque
     * @param ManagerRegistry $doctrine
     * @return void
     */
    #[Route('/delete/{id}', name: 'delete')]
    public function deleteMarques(Marque $marque, ManagerRegistry $doctrine)
    {
        $em = $doctrine->getManager();
        $em->remove($marque);
        $em->flush();
        $this->addFlash('flash-success', 'Le nom de marque ' . $marque->getName() . ' a bien été supprimé');
        return $this->redirectToRoute('admin_marques_list');
    }

    /**
     * Méthode permettant de mettre ajour une la nom d'une marque 
     *
     * @param Marque $marque
     * @param Request $request
     * @param ManagerRegistry $doctrine
     * @return void
     */
    #[Route('/edit:{id}', name: 'edit')]

    public function editMarques(Marque $marque, Request $request, ManagerRegistry $doctrine, PictureService $pictureService)
    {
        $form = $this->createForm(MarqueType::class, $marque);
        $form->handleRequest($request);
        if ($form->isSubmitted() && $form->isValid()) {
            $logo = $form->get('logo')->getData();
            $folder = 'logo';
            $fichier = $pictureService->add($logo, $folder, 300, 300);
            $marque->setlogo($fichier);
            $em = $doctrine->getManager();
            $em->flush();
            $this->addFlash('flash-success', 'le nom de marque ' . $marque->getName() . ' a bien été mise jour');
            return $this->redirectToRoute('admin_marques_list');
        }
        return $this->render('admin/marques/edit.html.twig', [
            'formEditMarques' => $form->createView(),
        ]);
    }
}
