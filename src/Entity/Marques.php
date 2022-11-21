<?php

namespace App\Entity;

use App\Repository\MarquesRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: MarquesRepository::class)]
class Marques
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\Column(length: 50)]
    private ?string $Name = null;

    #[ORM\Column(length: 200, nullable: true)]
    private ?string $Logo = null;

    #[ORM\OneToMany(mappedBy: 'marques', targetEntity: Produits::class)]
    private Collection $Products;

    public function __construct()
    {
        $this->Products = new ArrayCollection();
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getName(): ?string
    {
        return $this->Name;
    }

    public function setName(string $Name): self
    {
        $this->Name = $Name;

        return $this;
    }

    public function getLogo(): ?string
    {
        return $this->Logo;
    }

    public function setLogo(?string $Logo): self
    {
        $this->Logo = $Logo;

        return $this;
    }

    /**
     * @return Collection<int, Produits>
     */
    public function getProducts(): Collection
    {
        return $this->Products;
    }

    public function addProduct(Produits $product): self
    {
        if (!$this->Products->contains($product)) {
            $this->Products->add($product);
            $product->setMarques($this);
        }

        return $this;
    }

    public function removeProduct(Produits $product): self
    {
        if ($this->Products->removeElement($product)) {
            // set the owning side to null (unless already changed)
            if ($product->getMarques() === $this) {
                $product->setMarques(null);
            }
        }

        return $this;
    }
}
