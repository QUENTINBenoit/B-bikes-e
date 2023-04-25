<?php

namespace App\Controller;

use App\Entity\Adresse;
use App\Entity\User;
use App\Form\AdresseType;
use App\Repository\AdresseRepository;
use Doctrine\ORM\EntityManagerInterface;
use Proxies\__CG__\App\Entity\User as EntityUser;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Console\Helper\Dumper;
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
                'L\'adresse de ' . $adresseAdd->getNomAdresse() . ' a bien été enregistrée pour le compte !'
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
    #[Route('/edit/{id}', name: 'edit', methods: ['GET', 'POST'], requirements: ['id' => '\d+'])]
    public function edit(
        Adresse $adresse,
        Request $request,
        EntityManagerInterface $doctrine,
    ): Response {
        \dump($adresse);
        $form = $this->createForm(AdresseType::class,  $adresse);
        $form->handleRequest($request);
        if ($form->isSubmitted() && $form->isValid()) {

            $doctrine->flush();

            $this->addFlash(
                'flash-success',
                'Les modification de l\'adresse de ' . $adresse->getNomAdresse() . ' ont bien été enregistrées'
            );
            return $this->redirectToRoute('compte_user_update', ['id' => $adresse->getUser()->getId()], 301);
        }
        return $this->render('adresse/index.html.twig', [
            'adresseForm' => $form->createView(),
            'adresse' => $adresse,
        ]);
    }


    /**
     * Méthode de suppression d'une adresse d'un compte user
     *
     * @param Request $request
     * @param EntityManagerInterface $doctrine
     * @return void
     */
    #[Route('/delete/{id}', name: 'delete', methods: ['GET', 'POST'])]
    public function delete(
        Adresse $adresse,
        EntityManagerInterface $doctrine,
    ): Response {
        $doctrine->remove($adresse);
        $doctrine->flush();
        $this->addFlash(
            'flash-delete',
            'L\'adresse de ' . $adresse->getNomAdresse() . ' a bien été supprimée'
        );

        return $this->redirectToRoute('compte_user_update', ['id' => $adresse->getUser()->getId()], 301);
    }
}
