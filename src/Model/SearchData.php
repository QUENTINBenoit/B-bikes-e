<?php

namespace App\Model;

class SearchData
{

  /**
   * Undocumented variable
   *
   * @var integer
   */
  public $page = 1;

  /**
   * Undocumented variable
   *
   * @var string
   */
  public string $q = '';
  public function __toString()
  {
    return $this->q;
  }
}
