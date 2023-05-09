<?php

namespace App\Entity;

use App\Repository\RecapDetailsRepository;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: RecapDetailsRepository::class)]
class RecapDetails
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\ManyToOne(inversedBy: 'recapDetails')]
    #[ORM\JoinColumn(nullable: false)]
    private ?Order $orderRecap = null;

    #[ORM\Column]
    private ?int $quantity = null;

    #[ORM\Column(length: 255)]
    private ?string $productOrder = null;

    #[ORM\Column]
    private ?float $price = null;

    #[ORM\Column]
    private ?float $totalRecap = null;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getOrderRecap(): ?Order
    {
        return $this->orderRecap;
    }

    public function setOrderRecap(?Order $orderRecap): self
    {
        $this->orderRecap = $orderRecap;

        return $this;
    }

    public function getQuantity(): ?int
    {
        return $this->quantity;
    }

    public function setQuantity(int $quantity): self
    {
        $this->quantity = $quantity;

        return $this;
    }

    public function getProductOrder(): ?string
    {
        return $this->productOrder;
    }

    public function setProductOrder(string $productOrder): self
    {
        $this->productOrder = $productOrder;

        return $this;
    }

    public function getPrice(): ?float
    {
        return $this->price;
    }

    public function setPrice(float $price): self
    {
        $this->price = $price;

        return $this;
    }

    public function getTotalRecap(): ?float
    {
        return $this->totalRecap;
    }

    public function setTotalRecap(float $totalRecap): self
    {
        $this->totalRecap = $totalRecap;

        return $this;
    }
}
