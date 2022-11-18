<?php

namespace App\Entity;

use App\Repository\CatégoriesRepository;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: CatégoriesRepository::class)]
class Catégories
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\Column(length: 30)]
    private ?string $Name = null;

    #[ORM\Column]
    private ?\DateTimeImmutable $created_At = null;

    #[ORM\Column(nullable: true)]
    private ?\DateTimeImmutable $udapted_At = null;

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

    public function getCreatedAt(): ?\DateTimeImmutable
    {
        return $this->created_At;
    }

    public function setCreatedAt(\DateTimeImmutable $created_At): self
    {
        $this->created_At = $created_At;

        return $this;
    }

    public function getUdaptedAt(): ?\DateTimeImmutable
    {
        return $this->udapted_At;
    }

    public function setUdaptedAt(?\DateTimeImmutable $udapted_At): self
    {
        $this->udapted_At = $udapted_At;

        return $this;
    }
}
