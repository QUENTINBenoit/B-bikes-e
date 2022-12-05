<?php

namespace App\Entity;

use App\Repository\EquipementsRepository;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: EquipementsRepository::class)]
class Equipements
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\Column(length: 255, nullable: true)]
    private ?string $cadre = null;

    #[ORM\Column(length: 255, nullable: true)]
    private ?string $fourche = null;

    #[ORM\Column(length: 255, nullable: true)]
    private ?string $jeuDeDirection = null;

    #[ORM\Column(length: 255, nullable: true)]
    private ?string $derailleurAV = null;

    #[ORM\Column(length: 255, nullable: true)]
    private ?string $derailleurAR = null;

    #[ORM\Column(length: 255, nullable: true)]
    private ?string $commandesDeVitesse = null;

    #[ORM\Column(length: 255, nullable: true)]
    private ?string $pedalier = null;

    #[ORM\Column(length: 255, nullable: true)]
    private ?string $boitierDePedalier = null;

    #[ORM\Column(length: 255, nullable: true)]
    private ?string $guideChaine = null;

    #[ORM\Column(length: 255, nullable: true)]
    private ?string $cassette = null;

    #[ORM\Column(length: 255, nullable: true)]
    private ?string $cintre = null;

    #[ORM\Column(length: 255, nullable: true)]
    private ?string $poignees = null;

    #[ORM\Column(length: 255, nullable: true)]
    private ?string $potence = null;

    #[ORM\Column(length: 255, nullable: true)]
    private ?string $tigeDeSelle = null;

    #[ORM\Column(length: 255, nullable: true)]
    private ?string $selle = null;

    #[ORM\Column(length: 255, nullable: true)]
    private ?string $pneuAV = null;

    #[ORM\Column(length: 255, nullable: true)]
    private ?string $pneuAR = null;

    #[ORM\Column(nullable: true)]
    private ?float $poids = null;

    #[ORM\Column]
    private ?\DateTimeImmutable $created_At = null;

    #[ORM\Column(nullable: true)]
    private ?\DateTimeImmutable $updated_At = null;

    #[ORM\OneToOne(inversedBy: 'equipements', cascade: ['persist', 'remove'])]
    private ?Produits $Products = null;

    public function getId(): ?int
    {
        return $this->id;
    }
    public function __toString()
    {
       return $this->cadre;

    }

    public function getCadre(): ?string
    {
        return $this->cadre;
    }

    public function setCadre(?string $cadre): self
    {
        $this->cadre = $cadre;

        return $this;
    }

    public function getFourche(): ?string
    {
        return $this->fourche;
    }

    public function setFourche(?string $fourche): self
    {
        $this->fourche = $fourche;

        return $this;
    }

    public function getJeuDeDirection(): ?string
    {
        return $this->jeuDeDirection;
    }

    public function setJeuDeDirection(?string $jeuDeDirection): self
    {
        $this->jeuDeDirection = $jeuDeDirection;

        return $this;
    }

    public function getDerailleurAV(): ?string
    {
        return $this->derailleurAV;
    }

    public function setDerailleurAV(?string $derailleurAV): self
    {
        $this->derailleurAV= $derailleurAV;

        return $this;
    }

    public function getDerailleurAR(): ?string
    {
        return $this->derailleurAR;
    }

    public function setDerailleurAR(?string $derailleurAR): self
    {
        $this->derailleurAR = $derailleurAR;

        return $this;
    }

    public function getCommandesDeVitesse(): ?string
    {
        return $this->commandesDeVitesse ;
    }

    public function setCommandesDeVitesse(?string $commandesDeVitesse ): self
    {
        $this->commandesDeVitesse  = $commandesDeVitesse ;

        return $this;
    }

    public function getPedalier(): ?string
    {
        return $this->pedalier;
    }

    public function setPedalier(?string $pedalier): self
    {
        $this->pedalier = $pedalier;

        return $this;
    }

    public function getBoitierDePédalier(): ?string
    {
        return $this->boitierDePedalier;
    }

    public function setBoitierDePedalier(?string $boitierDePedalier): self
    {
        $this->boitierDePedalier = $boitierDePedalier;

        return $this;
    }

    public function getGuideChaine(): ?string
    {
        return $this->guideChaine;
    }

    public function setGuideChaine(?string $guideChaine): self
    {
        $this->guideChaine= $guideChaine;

        return $this;
    }

    public function getCassette(): ?string
    {
        return $this->cassette;
    }

    public function setCassette(?string $cassette): self
    {
        $this->cassette = $cassette;

        return $this;
    }

    public function getCintre(): ?string
    {
        return $this->cintre;
    }

    public function setCintre(?string $cintre): self
    {
        $this->cintre = $cintre;

        return $this;
    }

    public function getPoignées(): ?string
    {
        return $this->poignees;
    }

    public function setPoignees(?string $poignees): self
    {
        $this->poignees = $poignees;

        return $this;
    }

    public function getPotence(): ?string
    {
        return $this->potence;
    }

    public function setPotence(?string $potence): self
    {
        $this->potence = $potence;

        return $this;
    }

    public function getTigeDeSelle(): ?string
    {
        return $this->tigeDeSelle;
    }

    public function setTigeDeSelle(?string $tigeDeSelle): self
    {
        $this->tigeDeSelle = $tigeDeSelle;

        return $this;
    }

    public function getSelle(): ?string
    {
        return $this->selle;
    }

    public function setSelle(?string $selle): self
    {
        $this->selle = $selle;

        return $this;
    }

    public function getPneuAV(): ?string
    {
        return $this->pneuAV;
    }

    public function setPneuAV(?string $pneuAV): self
    {
        $this->pneuAV = $pneuAV;

        return $this;
    }

    public function getPneuAR(): ?string
    {
        return $this->pneuAR;
    }

    public function setPneuAR(?string $pneuAR): self
    {
        $this->pneuAR = $pneuAR;

        return $this;
    }

    public function getPoids(): ?float
    {
        return $this->poids;
    }

    public function setPoids(?float $poids): self
    {
        $this->poids = $poids;

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
