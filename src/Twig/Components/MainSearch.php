<?php

namespace App\Twig\Components;

use App\DTO\SearchDto;
use App\Form\MainSearchType;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Form\FormInterface;
use Symfony\UX\LiveComponent\Attribute\AsLiveComponent;
use Symfony\UX\LiveComponent\Attribute\LiveAction;
use Symfony\UX\LiveComponent\Attribute\LiveProp;
use Symfony\UX\LiveComponent\ComponentWithFormTrait;
use Symfony\UX\LiveComponent\DefaultActionTrait;

#[AsLiveComponent()]
final class MainSearch extends AbstractController
{
    use DefaultActionTrait;
    use ComponentWithFormTrait;

    #[LiveProp()]
    public ?SearchDto  $searchDto = null;

    protected function instantiateForm(): FormInterface
    {
        return $this->createForm(MainSearchType::class, $this->searchDto);
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
