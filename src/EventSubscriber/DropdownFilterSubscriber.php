<?php

namespace App\EventSubscriber;

use App\Repository\CategoryRepository;
use App\Repository\MarqueRepository;
use App\Repository\MarquesRepository;
use Symfony\Component\EventDispatcher\EventSubscriberInterface;
use Symfony\Component\HttpKernel\Event\RequestEvent;
use Symfony\Component\HttpKernel\KernelEvents;
use Twig\Environment;

class DropdownFilterSubscriber implements EventSubscriberInterface
{
     const ROUTES = ['product_list']; 
     const MARQUES = ['product_list']; 


    public function __construct(
            private CategoryRepository $categoryRepository,
            private MarqueRepository $marqueRepository,
            private Environment $twig
    )
    {
        
    }

    public function onKernelRequest(RequestEvent $event): void
    {
        // ..
               $route = $event->getRequest()->get('_route'); 
               if (\in_array($route, DropdownFilterSubscriber::ROUTES)){
                 $categories =  $this->categoryRepository->findAll();
                 $this->twig->addGlobal('allCategories', $categories); 
               }        
               
               if (\in_array($route, DropdownFilterSubscriber::MARQUES)){
                 $allMarques =  $this->marqueRepository->findAll();
                 $this->twig->addGlobal('allMarques', $allMarques); 
               }       


    }

    public static function getSubscribedEvents(): array
    {
        return [
            KernelEvents::REQUEST => 'onKernelRequest',
        ];
    }
}
