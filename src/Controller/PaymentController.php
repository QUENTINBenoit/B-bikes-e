<?php

namespace  App\Controller;


use App\Entity\Order;
use App\Entity\Produits;
use App\service\cart\CartService;
use Doctrine\ORM\EntityManagerInterface;
use Stripe\Checkout\Session;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\RedirectResponse;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Stripe\Stripe;
use Symfony\Component\HttpFoundation\RequestStack;
use Symfony\Component\Routing\Generator\UrlGeneratorInterface;


class  PaymentController extends AbstractController
{

    private UrlGeneratorInterface $generator;
    private EntityManagerInterface $em;
    public function __construct(EntityManagerInterface $em,  UrlGeneratorInterface $generator)
    {
        $this->em = $em;
        $this->generator = $generator;
    }

    /**
     * @param $reference
     * @return RedirectResponse
     * @throws \Stripe\Exception\ApiErrorException
     */
    #[Route('/order/create-session-stripe/{reference}', name: 'payement_stripe')]
    public function stripeCheckout($reference): RedirectResponse
    {
        $productStripe = [];
        Stripe::setApiKey($this->getParameter('stripe_sk'));
        Stripe::setApiVersion('2022-11-15');
        // header('Content-Type: application/json');

        // $YOUR_DOMAIN = 'http://localhost:4242';


        $order =  $this->em->getRepository(Order::class)->findOneBy(['referenceOrder' => $reference]);

        if (!$order) {
            return $this->redirectToRoute('cart_home');
        }
        foreach ($order->getRecapDetails()->getValues() as $product) {

            $productData = $this->em->getRepository(Produits::class)->findOneBy(['Name' => $product->getProductOrder()]); // recuperation des datas de mon produits via le nom du produit
            $productStripe[] = [
                'price_data' => [
                    'currency' => 'eur',
                    'unit_amount' => round($product->getPrice() * 100),
                    'product_data' => [
                        'name' => $product->getProductOrder(),
                    ]
                ],
                'quantity' => $product->getQuantity(),
            ];
        }
        $productStripe[] = [
            'price_data' => [
                'currency' => 'eur',
                'unit_amount' => round($order->getTransporterPrice() * 100),
                'product_data' => [
                    'name' => $order->getTransporterName(),
                ]
            ],
            'quantity' => 1,
        ];

        $checkout_session = Session::create([
            'customer_email' => $this->getUser()->getEmail(), // recuperation de l'email de l'utilisateur pour stripe
            "payment_method_types" => [
                "card"
            ],
            'line_items' => [[
                $productStripe
                # Provide the exact Price ID (e.g. pr_1234) of the product you want to sell
                // 'price' => '{{PRICE_ID}}',
                // 'quantity' => 1,
            ]],
            'mode' => 'payment',
            'success_url' => $this->generator->generate(
                'payment_success',
                [
                    'reference' =>  $order->getReferenceOrder(),
                ],
                UrlGeneratorInterface::ABSOLUTE_URL
            ),
            'cancel_url' => $this->generator->generate(
                'payment_error',
                [
                    'reference' => $order->getReferenceOrder(),
                ],
                UrlGeneratorInterface::ABSOLUTE_URL
            ),
        ]);
        $order->setStripeSessionId($checkout_session->id);
        $this->em->flush();
        return  new  RedirectResponse($checkout_session->url);
    }


    /**
     * Methode  de retour en cas des success  en cas de payment
     * @param $reference
     * @param CartService $service
     * @return Response
     */
    #[Route('/order/success/{reference}', name: 'payment_success', requirements: ['id' => '\d+'])]
    public function StripeSuccess($reference, RequestStack $requestStack): Response
    {
        $orderRef =  $this->em->getRepository(Order::class)->findOneBy(['referenceOrder' => $reference]);
        if ($orderRef == $reference) {
            $requestStack->getSession()->remove('panier');
        }
        return $this->render('checkout/success.html.twig');
    }

    
    /**
     * Methode de retour en cas d'echec de payment
     * @param $reference
     * @param CartService $service
     * @return Response
     */
    #[Route('/order/error/{reference}', name: 'payment_error')]
    public function StripeError($reference, CartService $service): Response
    {
        return $this->render('checkout/error.html.twig');
    }
}
