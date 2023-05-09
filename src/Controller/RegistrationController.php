<?php

namespace App\Controller;

use App\Entity\User;
use App\Form\RegistrationFormType;
use App\Security\LoginFormAuthenticator;
use App\service\MailerService;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\PasswordHasher\Hasher\UserPasswordHasherInterface;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Security\Core\Exception\AccessDeniedException;
use Symfony\Component\Security\Csrf\TokenGenerator\TokenGeneratorInterface;



class RegistrationController extends AbstractController
{

    #[Route('/register', name: 'app_register')]

    public function register(
        Request $request,
        UserPasswordHasherInterface $userPasswordHasher,
        EntityManagerInterface $entityManager,
        MailerService $mailerService,
        TokenGeneratorInterface $tokenGenerator, // Permet de générer un token aléatoire pour la validation du compte utilisateur
    ): Response {
        $user = new User();
        $form = $this->createForm(RegistrationFormType::class, $user);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            // Token généré aléatoirement
            $tokenRegistration = $tokenGenerator->generateToken();


            // encode the plain password
            $user->setPassword(
                $userPasswordHasher->hashPassword(
                    $user,
                    $form->get('plainPassword')->getData()
                )
            );
            // USER TOKEN
            $user->setTokenRegistration($tokenRegistration);

            $entityManager->persist($user);
            $entityManager->flush();
            // do anything else you need here, like send an email

            // Envoi d'un email de confirmation d'inscription

            $mailerService->send(
                $user->getEmail(),
                'Confirmation de votre inscription sur bbikeses.fr',
                'registration_confirmation.html.twig',
                [
                    'user' => $user,
                    'token' => $tokenRegistration,
                    'lifeTimeToken' => $user->getTokenRegistrationLifeTime()->format('d-m-Y-H-i-s')
                ]
            );
            $this->addFlash(
                'flash-success',
                'votre compte a bien été créé, un email de confirmation vous a été envoyé, veuillez cliquer sur le lien pour activer votre compte'
            );
            return $this->redirectToRoute(
                'app_login'
            );
        }

        return $this->render('registration/register.html.twig', [
            'registrationForm' => $form->createView(),
        ]);
    }



    /**
     * Méthode permettant de valider le compte utilisateur
     *
     * @param string $token
     * @param User $user
     * @param EntityManagerInterface $em
     * @return Response
     */
    #[Route('/verify/{token}/{id}', name: 'account_verify', methods: ['GET'],  requirements: ['id' => '\d+'])]
    public function verify(string $token, User $user, EntityManagerInterface $em): Response
    {
        if ($user->getTokenRegistration() !== $token) {
            throw new AccessDeniedException();
        }
        if ($user->getTokenRegistration() === null) {
            throw new AccessDeniedException();
        }
        if ($user->getTokenRegistrationLifeTime() < new \DateTime('now')) {
            throw new AccessDeniedException();
        }

        $user->setIsVerified(true);
        $user->setTokenRegistration(null);
        $em->flush();
        $this->addFlash(
            'flash-success',
            'Votre compte a bien été activé, vous pouvez vous connecter'
        );
        return $this->redirectToRoute('app_login');
    }
}
