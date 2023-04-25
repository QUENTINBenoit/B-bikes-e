<?php

namespace App\Controller;

use App\Entity\Adresse;
use App\Entity\User;
use App\Form\AdresseType;
use Doctrine\ORM\EntityManagerInterface;
use phpDocumentor\Reflection\Types\This;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

#[Route('/adresse', name: 'adresse_')]
class AdresseController extends AbstractController
{
    #[Route('/add/{id}', name: 'add')]
    public function index(): Response
    {
        \dd("binevenue la methode index de AdresseController", $this->getUser());
        return $this->render('adresse/index.html.twig', [
            'controller_name' => 'AdresseController',
        ]);
    }

    #[Route('/edit/{id}', name: 'edit')]
    public function edit(
        Adresse $adresse,
        Request $request,

        EntityManagerInterface $doctrine,

    ): Response {
        \dump("binevenue la methode d'edition d'une Adresse", $adresse);
        $form = $this->createForm(AdresseType::class,  $adresse);
        $form->handleRequest($request);
        if ($form->isSubmitted() && $form->isValid()) {
            $doctrine->persist($adresse);
            $doctrine->flush();

            $this->addFlash(
                'flash-success',
                'Les modification de l\'adresse de ' . $adresse->getTypeAdresse() . ' ont bien été enregistrées'
            );
            return $this->redirectToRoute('compte_user_update', ['id' => $adresse->getUser()->getId()]);
        }



        return $this->render('adresse/index.html.twig', [
            'adresseForm' => $form->createView(),
        ]);
    }
}
