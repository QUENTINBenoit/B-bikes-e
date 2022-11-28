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
    private ?string $name = null;

    #[ORM\Column(length: 60)]
    private ?string $marqueMoteur = null;

    #[ORM\Column(type: Types::TEXT, nullable: true)]
    private ?string $descriptionMoteur = null;

    #[ORM\Column(length: 60, nullable: true)]
    private ?string $batterie = null;

    #[ORM\Column]
    private ?float $puissanceBatterie = null;

    #[ORM\Column(length: 30)]
    private ?string $console = null;

    #[ORM\Column]
    private ?\DateTimeImmutable $created_At = null;

    #[ORM\Column(nullable: true)]
    private ?\DateTimeImmutable $updated_At = null;

    #[ORM\OneToMany(mappedBy: 'motorisation', targetEntity: Produits::class)]
    private Collection $Products;

    #[ORM\Column(nullable: true)]
    private ?int $performance = null;

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

    public function getName(): ?string
    {
        return $this->name;
    }

    public function setName(string $name): self
    {
        $this->name = $name;

        return $this;
    }

    public function getMarqueMoteur(): ?string
    {
        return $this->marqueMoteur;
    }

    public function setMarqueMoteur(string $marqueMoteur): self
    {
        $this->marqueMoteur = $marqueMoteur;

        return $this;
    }

    public function getDescriptionMoteur(): ?string
    {
        return $this->descriptionMoteur;
    }

    public function setDescriptionMoteur(?string $descriptionMoteur): self
    {
        $this->descriptionMoteur = $descriptionMoteur;

        return $this;
    }

    public function getBatterie(): ?string
    {
        return $this->batterie;
    }

    public function setBatterie(?string $batterie): self
    {
        $this->batterie = $batterie;

        return $this;
    }

    public function getPuissanceBatterie(): ?float
    {
        return $this->puissanceBatterie;
    }

    public function setPuissanceBatterie(float $puissanceBatterie): self
    {
        $this->puissanceBatterie = $puissanceBatterie;

        return $this;
    }

    public function getConsole(): ?string
    {
        return $this->console;
    }

    public function setConsole(string $console): self
    {
        $this->console = $console;

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

    public function getPerformance(): ?int
    {
        return $this->performance;
    }

    public function setPerformance(?int $performance): self
    {
        $this->performance = $performance;

        return $this;
    }
}
