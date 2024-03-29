<?php

namespace App\Entity;

use App\Repository\ImagesRepository;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: ImagesRepository::class)]
class Images
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\Column(length: 200, nullable: true)]
    private ?string $Name = null;

    #[ORM\ManyToOne(inversedBy: 'images')]
    private ?Produits $Products = null;

    public function getId(): ?int
    {
        return $this->id;
    }
    public function __toString()
    {
        return $this->Name;
    }

    public function getName(): ?string
    {
        return $this->Name;
    }

    public function setName(?string $Name): self
    {
        $this->Name = $Name;

        return $this;
    }

    public function getProducts(): ?Produits
    {
        return $this->Products;
    }

    public function setProducts(?Produits $Products): self
    {
        $this->Products = $Products;

        return $this;
    }
}
