<?php

namespace App\Controller;


use App\Entity\Order;
use App\Form\CheckoutType;
use App\Repository\ProduitsRepository;
use App\service\cart\CartService;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;


#[Route('/checkout', name: 'checkout_', methods: ['GET', 'POST'])]
class CheckoutController extends AbstractController
{
    /**
     * Afficher le panier
     *
     * @param CartService $cartService
     * @param ProduitsRepository $produitsRepository
     * @param Request $request
     * @return Response
     */
    #[Route('/', name: 'create', methods: ['GET', 'POST'])]

    public function index(CartService $cartService, ProduitsRepository $produitsRepository, Request $request): Response
    {

        if (!$this->getUser()) {
            return $this->redirectToRoute('app_login');
        };

        $session = $cartService->getfullCart($produitsRepository);

        $form = $this->createForm(CheckoutType::class, null, [
            'user' => $this->getUser(),

        ]);
        $form->handleRequest($request);

        return $this->render('checkout/checkout.html.twig', [

            'user' => $this->getUser(),
            'infosSession' => $session['dataPanier'],
            'totalSession' => $session['total'],
            'formCheckout' => $form->createView()

        ]);
    }


    #[Route('/verify', name: 'prepare', methods: ['POST'])]

    public function prepareOrder(Request $request): Response
    {
        $form = $this->createForm(CheckoutType::class, null, [
            'user' => $this->getUser()
        ]);
        $form->handleRequest($request);
        if ($form->isSubmitted() & $form->isValid()) {
            $datetime = new \DateTimeImmutable('now');
            $transporter = $form->get('transporter')->getData();
            $delivery = $form->get('adreses')->getData();

            $order = new Order();
            $reference = $datetime->format('dmy') . '-' . \uniqid();
            $order->setReference($reference);
            $order->setUser($this->getUser());
            $order->setCreatedAt($datetime);
            $order->setTransporterName($transporter->getType());
            $order->setTransporterPrice($transporter->getPrice());
            $order->setIsPaid(0);
        }


        dd($form->getData());
        return $this->render('checkout/recap.html.twig', []);
    }
}
