<?php

namespace App\Twig\Components;

use App\DTO\SearchDto;
use App\Repository\ProduitsRepository;
use Stripe\Product;
use Symfony\UX\LiveComponent\Attribute\AsLiveComponent;
use Symfony\UX\LiveComponent\DefaultActionTrait;

#[AsLiveComponent]
final class ProductCards
{
    use DefaultActionTrait;

    public ?SearchDto $searchDto = null;

    public function __construct(private ProduitsRepository $produitsRepository)
    {
    }

    public function getProducts()

    {
        return $this->produitsRepository->searchDto($this->searchDto);
    }

    public function getProductsVae()
    {
        return $this->produitsRepository->searchDtoVae($this->searchDto);
    }
}
