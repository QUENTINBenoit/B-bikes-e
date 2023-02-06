<?php

namespace App\Controller\Admin;

use App\Entity\User;
use App\Form\UserType;
use App\Repository\UserRepository;
use App\service\PictureService;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\PasswordHasher\Hasher\UserPasswordHasherInterface;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Security\Http\Attribute\IsGranted;




#[Route('/admin/user', name: 'admin_user_', requirements: ['id' => '\d+'])]
class UserController extends AbstractController
{

    /**
     * Méthode affichant la liste de Utilisateurs 
     *
     * @param UserRepository $userRepository
     * @return Response
     */
    #[Route('/list', name: 'list')]
    public function userList(UserRepository $userRepository): Response
    {
        dump($userRepository->findAll());
        return $this->render('admin/user/list.html.twig', [
            'userList' => $userRepository->findAll(),
        ]);
    }


    /**
     * Methode d'ajout d'un nouvelle utilisateur 
     *
     * @param Request $request
     * @param EntityManagerInterface $doctrine
     * @param UserPasswordHasherInterface $userPasswordHasherInterface
     * @return void
     */
    #[Route('/new', name: 'new', methods: ['GET', 'POST'])]
    public function newUser(
        Request $request,
        EntityManagerInterface $doctrine,
        UserPasswordHasherInterface $userPasswordHasherInterface,
        PictureService $pictureService
    ) {
        $user = new User();

        $form = $this->createForm(UserType::class,  $user);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            // Service permettant l'upload d'un Avatar
            $avatars = $form->get('avatar')->getData();
            foreach ($avatars as $avatar) {
                // je défini le dossier de destination de l'image
                $folder = 'avatars';
                // j'appel le service d'ajout de l'image
                $fichier = $pictureService->add($avatar, $folder, 300, 300);
                $user->setAvatar($fichier);
            }
            // je récuper le mot de passe en clair 
            $password = $form->get('password')->getData();
            // je hash le mot de passe 
            $hashPassword = $userPasswordHasherInterface->hashPassword($user, $password);
            $user->setPassword($hashPassword);
            // je sauvegarde en BDD
            $doctrine->persist($user);
            $doctrine->flush();
            $this->addFlash(
                'flash-success',
                'l\'utilisateur  ' . $user->getFirstname() . ' ' . $user->getLastname() . ' a bien été ajouter a la BDD'
            );
            return $this->redirectToRoute('admin_user_list');
        }
        return $this->render('admin/user/news.html.twig', [
            "newsUserForm" => $form,
        ]);
    }


    /**
     * Méthode d'édition d'un utilisateur
     *
     * @param Request $request
     * @param User $user
     * @param EntityManagerInterface $doctrine
     * @param UserPasswordHasherInterface $userPasswordHasherInterface
     * @return Response
     */
    #[Route('/edit/{id}', name: 'edit')]
    // #[IsGranted('ROLE_SUPER_ADMIN')]
    public function editUser(
        Request $request,
        User $user,
        EntityManagerInterface $doctrine,
        UserPasswordHasherInterface $userPasswordHasherInterface,
        PictureService $pictureService
    ) {

        $this->denyAccessUnlessGranted('USER_EDIT', $user, 'Vous n\'avez pas les droits pour modifier ce compte');

        $form = $this->createForm(UserType::class, $user);
        $form->handleRequest($request);
        if ($form->isSubmitted() && $form->isValid()) {
            // Service permettant l'upload d'un Avatar
            $avatars = $form->get('avatar')->getData();
            foreach ($avatars as $avatar) {
                // je défini le dossier de destination de l'image
                $folder = 'avatars';
                // j'appel le service d'ajout de l'image
                $fichier = $pictureService->add($avatar, $folder, 300, 300);
                $user->setAvatar($fichier);
            }

            $plainPassword = $form->get('password')->getData();
            // je modifie le mot de passe que si il est renseigné dans le formulaire 
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
                'la mis a jour des informations concernant le compte utilisateur ' . $user->getFirstname() . ' ' . $user->getLastname() . ' a bien été effectué.'
            );
            return $this->redirectToRoute('admin_user_list');
        }
        return  $this->render('admin/user/edit.html.twig',  [
            'userEditForm' => $form->createView(),
        ]);
    }


    /**
     * Méthode de suppression d'un utilisateur
     *
     * @param Request $request
     * @param User $user
     * @param EntityManagerInterface $doctrine
     * @return Response
     */
    #[Route('/{id}/delete', name: 'delete', methods: ['POST'])]
    #[IsGranted('ROLE_SUPER_ADMIN')]
    public function deleteUser(Request $request,  User $user, EntityManagerInterface $doctrine)
    {

        if ($this->isCsrfTokenValid('delete' . $user->getId(), $request->request->get('_token'))) {

            $doctrine->remove($user);
            $doctrine->flush();
            $this->addFlash(
                'flash-success',
                'l\'utilisateur ' . $user->getFirstname() . ' ' . $user->getLastname() . ' a bien été supprimer de la BDD'
            );
        }
        return $this->redirectToRoute('admin_user_list', [], Response::HTTP_SEE_OTHER);
    }
}
