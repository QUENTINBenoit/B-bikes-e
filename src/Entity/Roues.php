<?php

namespace App\Entity;

use App\Repository\RouesRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: RouesRepository::class)]
class Roues
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\Column(length: 60)]
    private ?string $Jantes = null;

    #[ORM\Column(length: 255, nullable: true)]
    private ?string $Moyeux = null;

    #[ORM\Column(length: 255, nullable: true)]
    private ?string $Rayon = null;

    #[ORM\Column]
    private ?\DateTimeImmutable $created_At = null;

    #[ORM\Column(nullable: true)]
    private ?\DateTimeImmutable $updated_At = null;

    #[ORM\ManyToMany(targetEntity: Produits::class, inversedBy: 'roues')]
    private Collection $Products;

    public function __construct()
    {
        $this->Products = new ArrayCollection();
    }


     public function __toString()
     {
        return $this->Jantes;  
     }
 
    public function getId(): ?int
    {
        return $this->id;
    }

    public function getJantes(): ?string
    {
        return $this->Jantes;
    }

    public function setJantes(string $Jantes): self
    {
        $this->Jantes = $Jantes;

        return $this;
    }

    public function getMoyeux(): ?string
    {
        return $this->Moyeux;
    }

    public function setMoyeux(?string $Moyeux): self
    {
        $this->Moyeux = $Moyeux;

        return $this;
    }

    public function getRayon(): ?string
    {
        return $this->Rayon;
    }

    public function setRayon(?string $Rayon): self
    {
        $this->Rayon = $Rayon;

        return $this;
    }

    public function getCreatedAt(): ?\DateTimeImmutable
    {
        return $this->created_At;
    }

    public function setCreatedAt(\DateTimeImmutable $created_At): self
    {
        $this->created_At = $created_At;

        return $this;
    }

    public function getUpdatedAt(): ?\DateTimeImmutable
    {
        return $this->updated_At;
    }

    public function setUpdatedAt(?\DateTimeImmutable $updated_At): self
    {
        $this->updated_At = $updated_At;

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
        }

        return $this;
    }

    public function removeProduct(Produits $product): self
    {
        $this->Products->removeElement($product);

        return $this;
    }
}
