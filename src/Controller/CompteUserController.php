<?php

namespace App\Controller;

use App\Entity\User;
use App\Form\CompteUserType;
use App\service\PictureService;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\PasswordHasher\Hasher\UserPasswordHasherInterface;
use Symfony\Component\Routing\Annotation\Route;

#[Route('/compte/user', name: 'compte_user_')]
class CompteUserController extends AbstractController
{
    #[Route('/{id}', name: 'update', methods: ['GET', 'POST'])]
    public function updapteUserCompte(
        $id,
        User $user,
        UserPasswordHasherInterface $userPasswordHasherInterface,
        EntityManagerInterface $doctrine,
        Request $request,
        PictureService $pictureService
    ): Response {
        dump($user);
        // mise a jour du compte utilisateur
        $form = $this->createForm(CompteUserType::class, $user);

        $form->handleRequest($request);
        if ($form->isSubmitted() && $form->isValid()) {
            // appel au service pictureService pour modifier l'avatard de l'utilisateur
            $avatars = $form->get('avatar')->getData();

            foreach ($avatars as $avatar) {
                $folder = 'avatars';
                $fichier = $pictureService->add($avatar, $folder, 300, 300);
                $user->setAvatar($fichier);
            }
            $plainPassword = $form->get('password')->getData();
            if ($plainPassword) {
                $hashPassword = $userPasswordHasherInterface->hashPassword(
                    $user,
                    $plainPassword
                );

                $user->setPassword($hashPassword);
            }
            $doctrine->flush();
            $this->addFlash(
                'flash-success',
                'les mises à jour ont été effectuées avec succès'
            );
            return $this->redirectToRoute('compte_user_update', ['id' => $id]);
        }
        return $this->render('compteUser/compteUser.html.twig', [
            'userCompteForm' => $form->createView(),
            'user' => $user,
        ]);
    }
}
