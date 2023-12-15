<?php

namespace App\Twig\Components;

use App\DTO\SearchDto;
use App\Form\FilterType;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Form\FormInterface;
use Symfony\UX\LiveComponent\Attribute\AsLiveComponent;
use Symfony\UX\LiveComponent\Attribute\LiveAction;
use Symfony\UX\LiveComponent\Attribute\LiveListener;
use Symfony\UX\LiveComponent\Attribute\LiveProp;
use Symfony\UX\LiveComponent\ComponentWithFormTrait;
use Symfony\UX\LiveComponent\DefaultActionTrait;

#[AsLiveComponent]
final class FilterForm extends AbstractController
{
    use DefaultActionTrait;
    use ComponentWithFormTrait;

    #[LiveProp()]
    public ?SearchDto  $searchDto = null;
    #[LiveProp]
    public bool $visible = false;



    protected function instantiateForm(): FormInterface
    {
        return $this->createForm(FilterType::class, $this->searchDto);
    }

    /**
     * @LiveListener("showFilter")
     * Method d'ecoute de l'evenement showFilter
     */
    #[LiveListener('showFilter')]
    public function toggleVisible(): void
    {
        $this->visible = !$this->visible;
    }


    #[LiveAction]
    public function save()
    {

        $this->submitForm();
        /** @var SearchDto $searchDto */
        $this->searchDto = $this->getForm()->getData();

        return $this->redirectToRoute(
            'search',
            $this->searchDto->generateQParameters()
        );
    }
}
