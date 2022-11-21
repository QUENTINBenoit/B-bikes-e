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
    private ?string $Cadre = null;

    #[ORM\Column(length: 255, nullable: true)]
    private ?string $Fourche = null;

    #[ORM\Column(length: 255, nullable: true)]
    private ?string $Jeu_de_direction = null;

    #[ORM\Column(length: 255, nullable: true)]
    private ?string $Dérailleur_AV = null;

    #[ORM\Column(length: 255, nullable: true)]
    private ?string $Dérailleur_AR = null;

    #[ORM\Column(length: 255, nullable: true)]
    private ?string $Commandes_de_vitesse = null;

    #[ORM\Column(length: 255, nullable: true)]
    private ?string $Pédalier = null;

    #[ORM\Column(length: 255, nullable: true)]
    private ?string $Boitier_de_Pédalier = null;

    #[ORM\Column(length: 255, nullable: true)]
    private ?string $Guide_chaîne = null;

    #[ORM\Column(length: 255, nullable: true)]
    private ?string $Cassette = null;

    #[ORM\Column(length: 255, nullable: true)]
    private ?string $Cintre = null;

    #[ORM\Column(length: 255, nullable: true)]
    private ?string $Poignées = null;

    #[ORM\Column(length: 255, nullable: true)]
    private ?string $Potence = null;

    #[ORM\Column(length: 255, nullable: true)]
    private ?string $Tige_de_selle = null;

    #[ORM\Column(length: 255, nullable: true)]
    private ?string $Selle = null;

    #[ORM\Column(length: 255, nullable: true)]
    private ?string $Pneu_AV = null;

    #[ORM\Column(length: 255, nullable: true)]
    private ?string $Pneu_AR = null;

    #[ORM\Column(nullable: true)]
    private ?float $Poids = null;

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

    public function getCadre(): ?string
    {
        return $this->Cadre;
    }

    public function setCadre(?string $Cadre): self
    {
        $this->Cadre = $Cadre;

        return $this;
    }

    public function getFourche(): ?string
    {
        return $this->Fourche;
    }

    public function setFourche(?string $Fourche): self
    {
        $this->Fourche = $Fourche;

        return $this;
    }

    public function getJeuDeDirection(): ?string
    {
        return $this->Jeu_de_direction;
    }

    public function setJeuDeDirection(?string $Jeu_de_direction): self
    {
        $this->Jeu_de_direction = $Jeu_de_direction;

        return $this;
    }

    public function getDérailleurAV(): ?string
    {
        return $this->Dérailleur_AV;
    }

    public function setDérailleurAV(?string $Dérailleur_AV): self
    {
        $this->Dérailleur_AV = $Dérailleur_AV;

        return $this;
    }

    public function getDérailleurAR(): ?string
    {
        return $this->Dérailleur_AR;
    }

    public function setDérailleurAR(?string $Dérailleur_AR): self
    {
        $this->Dérailleur_AR = $Dérailleur_AR;

        return $this;
    }

    public function getCommandesDeVitesse(): ?string
    {
        return $this->Commandes_de_vitesse;
    }

    public function setCommandesDeVitesse(?string $Commandes_de_vitesse): self
    {
        $this->Commandes_de_vitesse = $Commandes_de_vitesse;

        return $this;
    }

    public function getPédalier(): ?string
    {
        return $this->Pédalier;
    }

    public function setPédalier(?string $Pédalier): self
    {
        $this->Pédalier = $Pédalier;

        return $this;
    }

    public function getBoitierDePédalier(): ?string
    {
        return $this->Boitier_de_Pédalier;
    }

    public function setBoitierDePédalier(?string $Boitier_de_Pédalier): self
    {
        $this->Boitier_de_Pédalier = $Boitier_de_Pédalier;

        return $this;
    }

    public function getGuideChaîne(): ?string
    {
        return $this->Guide_chaîne;
    }

    public function setGuideChaîne(?string $Guide_chaîne): self
    {
        $this->Guide_chaîne = $Guide_chaîne;

        return $this;
    }

    public function getCassette(): ?string
    {
        return $this->Cassette;
    }

    public function setCassette(?string $Cassette): self
    {
        $this->Cassette = $Cassette;

        return $this;
    }

    public function getCintre(): ?string
    {
        return $this->Cintre;
    }

    public function setCintre(?string $Cintre): self
    {
        $this->Cintre = $Cintre;

        return $this;
    }

    public function getPoignées(): ?string
    {
        return $this->Poignées;
    }

    public function setPoignées(?string $Poignées): self
    {
        $this->Poignées = $Poignées;

        return $this;
    }

    public function getPotence(): ?string
    {
        return $this->Potence;
    }

    public function setPotence(?string $Potence): self
    {
        $this->Potence = $Potence;

        return $this;
    }

    public function getTigeDeSelle(): ?string
    {
        return $this->Tige_de_selle;
    }

    public function setTigeDeSelle(?string $Tige_de_selle): self
    {
        $this->Tige_de_selle = $Tige_de_selle;

        return $this;
    }

    public function getSelle(): ?string
    {
        return $this->Selle;
    }

    public function setSelle(?string $Selle): self
    {
        $this->Selle = $Selle;

        return $this;
    }

    public function getPneuAV(): ?string
    {
        return $this->Pneu_AV;
    }

    public function setPneuAV(?string $Pneu_AV): self
    {
        $this->Pneu_AV = $Pneu_AV;

        return $this;
    }

    public function getPneuAR(): ?string
    {
        return $this->Pneu_AR;
    }

    public function setPneuAR(?string $Pneu_AR): self
    {
        $this->Pneu_AR = $Pneu_AR;

        return $this;
    }

    public function getPoids(): ?float
    {
        return $this->Poids;
    }

    public function setPoids(?float $Poids): self
    {
        $this->Poids = $Poids;

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
