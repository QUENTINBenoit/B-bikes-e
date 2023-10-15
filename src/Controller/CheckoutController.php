<?php

namespace App\Controller;


use App\Entity\Order;
use App\Entity\RecapDetails;
use App\Form\CheckoutType;
use App\Repository\ProduitsRepository;
use App\service\cart\CartService;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

#[Route('/checkout', name: 'checkout_', methods: ['GET', 'POST'])]
class CheckoutController extends AbstractController
{
    private EntityManagerInterface $em;

    public function __construct(EntityManagerInterface $em)
    {
        $this->em = $em;
    }

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


    /**
     * Méthode de validation de la commande
     *
     * @param CartService $cartService
     * @param Request $request
     * @param ProduitsRepository $produitsRepository
     * @return Response
     */
    #[Route('/verify', name: 'prepare', methods: ['POST'])]
    public function prepareOrder(CartService $cartService, Request $request, ProduitsRepository $produitsRepository): Response
    {
        $form = $this->createForm(CheckoutType::class, null, [
            'user' => $this->getUser()
        ]);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
          
            $datetime = new \DateTimeImmutable('now');            // recupere la date et l'heure
            $transporter = $form->get('transporteur')->getData(); // recupere le transporteur
            $deliveryForOrder = $form->get('addreses')->getData();        // recupere l'adresse de livraison
            $order = new Order();                                 // instancie une nouvelle commande
            $reference = $datetime->format('dmy') . '-' . \uniqid(); // genere une reference unique
            $order->setReferenceOrder($reference);
            $order->setUser($this->getUser());
            $order->setCreatedAt($datetime);
            $order->setDelivery($deliveryForOrder);
            $order->setTransporterName($transporter->getType());
            $order->setTransporterPrice($transporter->getPrice());
            $order->setIsPaid(0);
            $order->setMethodPay('stripe');
            $this->em->persist($order);


            $recupCart = $cartService->getfullCart($produitsRepository);
            
            $recapOrder = new RecapDetails();
            foreach ($recupCart['dataPanier'] as $productCart) {

                $recapOrder->setOrderRecap($order);

                $recapOrder->setProductOrder($productCart['produit']->getName());
                $recapOrder->setPrice($productCart['produit']->getPrix());
                $recapOrder->setQuantity($productCart['quantite']);
            }
            $recapOrder->setTotalRecap($recupCart['total']);
            $this->em->persist($recapOrder);

            $this->em->flush();
          
            return $this->render('checkout/recapOrder.html.twig',
            [
                'methodPay' => $order->getMethodPay(),
                'recapOrder' => $recapOrder,
                'transporter' => $transporter,
                'delivery' => $deliveryForOrder,
                'reference' => $reference,

            ]);
        }
        return $this->redirectToRoute('checkout_create');
    }
}
