<?php

namespace App\Controller;

use App\Entity\Adresse;
use App\Entity\User;
use App\Form\AdresseType;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

#[Route('/adresse', name: 'adresse_')]
class AdresseController extends AbstractController
{

    /**
     * Méthode d'ajout d'une adresse pour un compte user
     *
     * @param Request $request
     * @param EntityManagerInterface $doctrine
     * @return void
     */
    #[Route('/add/{id}', name: 'add', methods: ['GET', 'POST'], requirements: ['id' => '\d+'])]
    public function addAdresse(
        Request $request,
        User $user,
        EntityManagerInterface $doctrine,
    ): Response {
        $adresseAdd = new Adresse();
        $form = $this->createForm(AdresseType::class, $adresseAdd);
        $form->handleRequest($request);
        if ($form->isSubmitted() && $form->isValid()) {
            $adresseAdd->setUser($user);
            $doctrine->persist($adresseAdd);
            $doctrine->flush();

            $this->addFlash(
                'flash-success',
                'L\'adresse de ' . $adresseAdd->getTypeAdresse() . ' a bien été enregistrée pour le compte !'
            );
            return $this->redirectToRoute('compte_user_update', ['id' => $user->getId()]);
        }
        return $this->render('adresse/index.html.twig', [
            'adresseForm' => $form->createView(),
        ]);
    }





    /**
     * Méthode de mettre à jour une adresse d'un compte user
     *
     * @param Request $request
     * @param EntityManagerInterface $doctrine
     * @return void
     */
    #[Route('/edit/{id}', name: 'edit')]
    public function edit(
        Adresse $adresse,
        Request $request,

        EntityManagerInterface $doctrine,

    ): Response {
        $form = $this->createForm(AdresseType::class,  $adresse);
        $form->handleRequest($request);
        if ($form->isSubmitted() && $form->isValid()) {

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
