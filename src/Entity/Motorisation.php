<?php

namespace App\Entity;

use App\Repository\MotorisationRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\DBAL\Types\Types;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: MotorisationRepository::class)]
class Motorisation
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\Column(length: 100)]
    private ?string $Nom = null;

    #[ORM\Column(length: 60)]
    private ?string $MarqueMoteur = null;

    #[ORM\Column(type: Types::TEXT, nullable: true)]
    private ?string $Description_Moteur = null;

    #[ORM\Column(length: 60, nullable: true)]
    private ?string $Batterie = null;

    #[ORM\Column]
    private ?float $Puissance_Batterie = null;

    #[ORM\Column(length: 30)]
    private ?string $Console = null;

    #[ORM\Column]
    private ?\DateTimeImmutable $created_At = null;

    #[ORM\Column(nullable: true)]
    private ?\DateTimeImmutable $updated_At = null;

    #[ORM\OneToMany(mappedBy: 'motorisation', targetEntity: Produits::class)]
    private Collection $Products;

    public function __construct()
    {
        $this->updated_At = new \DateTimeImmutable(); 
        $this->created_At = new \DateTimeImmutable();
        $this->Products = new ArrayCollection();
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getNom(): ?string
    {
        return $this->Nom;
    }

    public function setNom(string $Nom): self
    {
        $this->Nom = $Nom;

        return $this;
    }

    public function getMarqueMoteur(): ?string
    {
        return $this->MarqueMoteur;
    }

    public function setMarqueMoteur(string $MarqueMoteur): self
    {
        $this->MarqueMoteur = $MarqueMoteur;

        return $this;
    }

    public function getDescriptionMoteur(): ?string
    {
        return $this->Description_Moteur;
    }

    public function setDescriptionMoteur(?string $Description_Moteur): self
    {
        $this->Description_Moteur = $Description_Moteur;

        return $this;
    }

    public function getBatterie(): ?string
    {
        return $this->Batterie;
    }

    public function setBatterie(?string $Batterie): self
    {
        $this->Batterie = $Batterie;

        return $this;
    }

    public function getPuissanceBatterie(): ?float
    {
        return $this->Puissance_Batterie;
    }

    public function setPuissanceBatterie(float $Puissance_Batterie): self
    {
        $this->Puissance_Batterie = $Puissance_Batterie;

        return $this;
    }

    public function getConsole(): ?string
    {
        return $this->Console;
    }

    public function setConsole(string $Console): self
    {
        $this->Console = $Console;

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
            $product->setMotorisation($this);
        }

        return $this;
    }

    public function removeProduct(Produits $product): self
    {
        if ($this->Products->removeElement($product)) {
            // set the owning side to null (unless already changed)
            if ($product->getMotorisation() === $this) {
                $product->setMotorisation(null);
            }
        }

        return $this;
    }
}
