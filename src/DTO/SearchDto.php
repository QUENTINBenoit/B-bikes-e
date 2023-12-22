<?php

namespace App\DTO;


class SearchDto
{
    public ?string $search = null;

    public ?float $minPrice = null;
    public ?float $maxPrice = null;

    public ?string $marques = null;



    /**
     * @return array
     * Methode qui permet de generer les parametres de la requete filter et search
     */
    public function generateQParameters(): array
    {
        $params = [];
        if ($this->search) {
            $params['search'] = $this->search;
        }
        if ($this->minPrice) {
            $params['minPrice'] = $this->minPrice;
        }
        if ($this->maxPrice) {
            $params['maxPrice'] = $this->maxPrice;
        }
        if ($this->marques) {
            $params['marques'] = $this->marques;
        }
        return $params;
    }

}
