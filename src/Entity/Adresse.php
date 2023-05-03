<?php

namespace App\Entity;

use App\Repository\AdresseRepository;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: AdresseRepository::class)]
class Adresse
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\Column(length: 255, nullable: true)]
    private ?string $nomAdresse = null;

    #[ORM\Column(length: 255, nullable: true)]
    private ?string $Rue = null;

    #[ORM\Column(nullable: true)]
    private ?int $numeroRue = null;

    #[ORM\Column(nullable: true)]
    private ?int $codePostal = null;

    #[ORM\Column(length: 255, nullable: true)]
    private ?string $ville = null;

    #[ORM\Column]
    private ?\DateTimeImmutable $createdAt = null;

    #[ORM\Column(nullable: true)]
    private ?\DateTimeImmutable $updatedAt = null;

    #[ORM\ManyToOne(inversedBy: 'adresses')]
    private ?User $user = null;

    #[ORM\Column]
    private ?bool $addresseFav = null;


    public function __construct()
    {
        $this->createdAt = new \DateTimeImmutable();
        $this->updatedAt = new \DateTimeImmutable();
    }
    // fonction toString
    public function __toString()
    {
        return $this->nomAdresse . '[-br]' .

            $this->numeroRue . ' '  .
            $this->Rue  . '[-br]' .
            $this->codePostal . '[-br] ' .
            $this->ville . '[-br]';
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getNomAdresse(): ?string
    {
        return $this->nomAdresse;
    }

    public function setNomAdresse(?string $nomAdresse): self
    {
        $this->nomAdresse  = $nomAdresse;

        return $this;
    }

    public function getRue(): ?string
    {
        return $this->Rue;
    }

    public function setRue(?string $Rue): self
    {
        $this->Rue = $Rue;

        return $this;
    }

    public function getNumeroRue(): ?int
    {
        return $this->numeroRue;
    }

    public function setNumeroRue(?int $numeroRue): self
    {
        $this->numeroRue = $numeroRue;

        return $this;
    }

    public function getCodePostal(): ?int
    {
        return $this->codePostal;
    }

    public function setCodePostal(?int $codePostal): self
    {
        $this->codePostal = $codePostal;

        return $this;
    }

    public function getVille(): ?string
    {
        return $this->ville;
    }

    public function setVille(?string $ville): self
    {
        $this->ville = $ville;

        return $this;
    }

    public function getCreatedAt(): ?\DateTimeImmutable
    {
        return $this->createdAt;
    }

    public function setCreatedAt(\DateTimeImmutable $createdAt): self
    {
        $this->createdAt = $createdAt;

        return $this;
    }

    public function getUpdatedAt(): ?\DateTimeImmutable
    {
        return $this->updatedAt;
    }

    public function setUpdatedAt(?\DateTimeImmutable $updatedAt): self
    {
        $this->updatedAt = $updatedAt;

        return $this;
    }

    public function getUser(): ?User
    {
        return $this->user;
    }

    public function setUser(?User $user): self
    {
        $this->user = $user;

        return $this;
    }

    public function isAddresseFav(): ?bool
    {
        return $this->addresseFav;
    }

    public function setAddresseFav(bool $addresseFav): self
    {
        $this->addresseFav = $addresseFav;

        return $this;
    }
}
