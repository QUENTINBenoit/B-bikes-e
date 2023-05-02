<?php

namespace App\Controller;

use App\Entity\User;
use App\Form\CheckoutType;
use App\Repository\ProduitsRepository;
use App\service\cart\CartService;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class CheckoutController extends AbstractController
{
    #[Route('/checkout', name: 'app_checkout', methods: ['GET', 'POST'])]
    public function index(CartService $cartService,   ProduitsRepository $produitsRepository, Request $request): Response
    {
        // $user = $this->getUser();
        if (!$this->getUser()) {
            return $this->redirectToRoute('app_login');
        };



        $session = $cartService->getfullCart($produitsRepository);
        \dump($session);

        $form = $this->createForm(CheckoutType::class, null, [
            'user' => $this->getUser(),

        ]);
        $form->handleRequest($request);

        return $this->render('checkout/checkout.html.twig', [

            // 'user' => $user,
            'infosSession' => $session,
            'formCheckout' => $form->createView()

        ]);
    }
}
