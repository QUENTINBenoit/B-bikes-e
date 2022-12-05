<?php

namespace App\Entity;

use App\Repository\GenreRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: GenreRepository::class)]
class Genre
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\Column(length: 15, nullable: true)]
    private ?string $name = null;

    #[ORM\ManyToMany(targetEntity: Produits::class, inversedBy: 'genres')]
    private Collection $products;

    public function __construct()
    {
        $this->products = new ArrayCollection();
    }
    public function __toString()
    {
        return $this->name; 
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getName(): ?string
    {
        return $this->name;
    }

    public function setName(?string $name): self
    {
        $this->name = $name;

        return $this;
    }

    /**
     * @return Collection<int, Produits>
     */
    public function getProducts(): Collection
    {
        return $this->products;
    }

    public function addProduct(Produits $product): self
    {
        if (!$this->products->contains($product)) {
            $this->products->add($product);
        }

        return $this;
    }

    public function removeProduct(Produits $product): self
    {
        $this->products->removeElement($product);

        return $this;
    }
}
