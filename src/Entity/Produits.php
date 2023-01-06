<?php

namespace App\Entity;

use App\Repository\ProduitsRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\DBAL\Types\Types;
use Doctrine\ORM\Mapping as ORM;


#[ORM\Entity(repositoryClass: ProduitsRepository::class)]
class Produits
{

    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\Column(length: 60)]
    private ?string $Name = null;

    #[ORM\Column]
    private ?int $reference = null;

    #[ORM\Column(type: Types::TEXT, nullable: true)]
    private ?string $Description = null;

    #[ORM\Column]
    private ?bool $nouveaute = null;

    #[ORM\Column]
    private ?bool $Promotion = null;

    #[ORM\Column]
    private ?int $stock = null;

    #[ORM\Column]
    private ?float $prix = null;

    #[ORM\Column(nullable: true)]
    private ?int $PoucentagePromotion = null;

    #[ORM\Column(nullable: true)]
    private ?float $PrixPromotion = null;

    #[ORM\Column(nullable: true)]
    private ?float $Avis = null;

    #[ORM\Column]
    private ?\DateTimeImmutable $created_At = null;

    #[ORM\Column(nullable: true)]
    private ?\DateTimeImmutable $updated_At = null;

    #[ORM\ManyToOne(inversedBy: 'Products')]
    private ?Motorisation $motorisation = null;

    #[ORM\ManyToMany(targetEntity: Roues::class, mappedBy: 'Products')]
    private Collection $roues;

    #[ORM\OneToMany(mappedBy: 'Products', targetEntity: Images::class)]
    private Collection $images;


    #[ORM\OneToOne(mappedBy: 'Products', cascade: ['persist', 'remove'])]
    private ?Equipements $equipements = null;

    #[ORM\Column(length: 60, nullable: true)]
    private ?string $utilisation = null;

    #[ORM\ManyToMany(targetEntity: Category::class, mappedBy: 'products')]
    private Collection $categories;



    #[ORM\ManyToMany(targetEntity: Marque::class, mappedBy: 'products')]
    private Collection $marques;

    #[ORM\ManyToMany(targetEntity: Genre::class, mappedBy: 'products')]
    private Collection $genres;



    public function __construct()
    {
        $this->updated_At = new \DateTimeImmutable();
        $this->created_At = new \DateTimeImmutable();
        $this->roues = new ArrayCollection();
        $this->images = new ArrayCollection();
        $this->categories = new ArrayCollection();
        $this->marques = new ArrayCollection();
        $this->genres = new ArrayCollection();
    }
    public function __toString()
    {
        return $this->Name;
        return $this->genres;
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

    public function getReference(): ?int
    {
        return $this->reference;
    }

    public function setReference(int $reference): self
    {
        $this->reference = $reference;

        return $this;
    }

    public function getDescription(): ?string
    {
        return $this->Description;
    }

    public function setDescription(?string $Description): self
    {
        $this->Description = $Description;

        return $this;
    }

    public function isNouveaute(): ?bool
    {
        return $this->nouveaute;
    }

    public function setNouveaute(bool $nouveaute): self
    {
        $this->nouveaute = $nouveaute;

        return $this;
    }

    public function isPromotion(): ?bool
    {
        return $this->Promotion;
    }

    public function setPromotion(bool $Promotion): self
    {
        $this->Promotion = $Promotion;

        return $this;
    }

    public function getStock(): ?int
    {
        return $this->stock;
    }

    public function setStock(int $stock): self
    {
        $this->stock = $stock;

        return $this;
    }

    public function getPrix(): ?float
    {
        return $this->prix;
    }

    public function setPrix(float $prix): self
    {
        $this->prix = $prix;

        return $this;
    }

    public function getPoucentagePromotion(): ?int
    {
        return $this->PoucentagePromotion;
    }

    public function setPoucentagePromotion(?int $PoucentagePromotion): self
    {
        $this->PoucentagePromotion = $PoucentagePromotion;

        return $this;
    }

    public function getPrixPromotion(): ?float
    {
        return $this->PrixPromotion;
    }

    public function setPrixPromotion(?float $PrixPromotion): self
    {
        $this->PrixPromotion = $PrixPromotion;

        return $this;
    }

    public function getAvis(): ?float
    {
        return $this->Avis;
    }

    public function setAvis(?float $Avis): self
    {
        $this->Avis = $Avis;

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

    public function getMotorisation(): ?Motorisation
    {
        return $this->motorisation;
    }

    public function setMotorisation(?Motorisation $motorisation): self
    {
        $this->motorisation = $motorisation;

        return $this;
    }

    /**
     * @return Collection<int, Roues>
     */
    public function getRoues(): Collection
    {
        return $this->roues;
    }

    public function addRoue(Roues $roue): self
    {
        if (!$this->roues->contains($roue)) {
            $this->roues->add($roue);
            $roue->addProduct($this);
        }

        return $this;
    }

    public function removeRoue(Roues $roue): self
    {
        if ($this->roues->removeElement($roue)) {
            $roue->removeProduct($this);
        }

        return $this;
    }

    /**
     * @return Collection<int, Images>
     */
    public function getImages(): Collection
    {
        return $this->images;
    }

    public function addImage(Images $image): self
    {
        if (!$this->images->contains($image)) {
            $this->images->add($image);
            $image->setProducts($this);
        }

        return $this;
    }

    public function removeImage(Images $image): self
    {
        if ($this->images->removeElement($image)) {
            // set the owning side to null (unless already changed)
            if ($image->getProducts() === $this) {
                $image->setProducts(null);
            }
        }

        return $this;
    }

    public function getEquipements(): ?Equipements
    {
        return $this->equipements;
    }

    public function setEquipements(?Equipements $equipements): self
    {
        // unset the owning side of the relation if necessary
        if ($equipements === null && $this->equipements !== null) {
            $this->equipements->setProducts(null);
        }

        // set the owning side of the relation if necessary
        if ($equipements !== null && $equipements->getProducts() !== $this) {
            $equipements->setProducts($this);
        }

        $this->equipements = $equipements;

        return $this;
    }


    public function getUtilisation(): ?string
    {
        return $this->utilisation;
    }

    public function setUtilisation(?string $utilisation): self
    {
        $this->utilisation = $utilisation;

        return $this;
    }

    /**
     * @return Collection<int, Category>
     */
    public function getCategories(): Collection
    {
        return $this->categories;
    }

    public function addCategory(Category $category): self
    {
        if (!$this->categories->contains($category)) {
            $this->categories->add($category);
            $category->addProduct($this);
        }

        return $this;
    }

    public function removeCategory(Category $category): self
    {
        if ($this->categories->removeElement($category)) {
            $category->removeProduct($this);
        }

        return $this;
    }



    /**
     * @return Collection<int, Marque>
     */
    public function getMarques(): Collection
    {
        return $this->marques;
    }

    public function addMarque(Marque $marque): self
    {
        if (!$this->marques->contains($marque)) {
            $this->marques->add($marque);
            $marque->addProduct($this);
        }

        return $this;
    }

    public function removeMarque(Marque $marque): self
    {
        if ($this->marques->removeElement($marque)) {
            $marque->removeProduct($this);
        }

        return $this;
    }

    /**
     * @return Collection<int, Genre>
     */
    public function getGenres(): Collection
    {
        return $this->genres;
    }

    public function addGenre(Genre $genre): self
    {
        if (!$this->genres->contains($genre)) {
            $this->genres->add($genre);
            $genre->addProduct($this);
        }

        return $this;
    }

    public function removeGenre(Genre $genre): self
    {
        if ($this->genres->removeElement($genre)) {
            $genre->removeProduct($this);
        }

        return $this;
    }
}
