<?php

namespace App\Entity;

use App\Repository\CommandeRepository;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: CommandeRepository::class)]
class Commande
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\Column]
    private ?int $numeroDeCommande = null;

    #[ORM\Column]
    private ?\DateTimeImmutable $createdAt = null;

    #[ORM\Column(nullable: true)]
    private ?\DateTimeImmutable $updatedAt = null;

    #[ORM\ManyToOne(inversedBy: 'commande')]
    private ?Status $statuss = null;

    #[ORM\ManyToOne(inversedBy: 'commande')]
    #[ORM\JoinColumn(nullable: false)]
    private ?Paiement $paiements = null;

    #[ORM\ManyToOne(inversedBy: 'commande')]
    private ?Transporteur $transporteurs = null;

    #[ORM\ManyToOne(inversedBy: 'commandes')]
    #[ORM\JoinColumn(nullable: false)]
    private ?User $user = null;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getNumeroDeCommande(): ?int
    {
        return $this->numeroDeCommande;
    }

    public function setNumeroDeCommande(int $numeroDeCommande): self
    {
        $this->numeroDeCommande = $numeroDeCommande;

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

    public function getStatuss(): ?Status
    {
        return $this->statuss;
    }

    public function setStatuss(?Status $statuss): self
    {
        $this->statuss = $statuss;

        return $this;
    }

    public function getPaiements(): ?Paiement
    {
        return $this->paiements;
    }

    public function setPaiements(?Paiement $paiements): self
    {
        $this->paiements = $paiements;

        return $this;
    }

    public function getTransporteurs(): ?Transporteur
    {
        return $this->transporteurs;
    }

    public function setTransporteurs(?Transporteur $transporteurs): self
    {
        $this->transporteurs = $transporteurs;

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
}
