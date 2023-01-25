<?php


namespace App\service;

use Symfony\Component\DependencyInjection\ParameterBag\ParameterBagInterface;
use Symfony\Component\HttpFoundation\File\UploadedFile;

class PictureService
{

  private $params;

  public function __construct(ParameterBagInterface $params)
  {
    $this->params = $params;
  }

  /**
   * Méthode permettant l'upload d'une image
   *
   * @param UploadedFile $picture
   * @param string $folder
   * @param integer $width
   * @param integer $height
   * @return string
   */
  public function add(UploadedFile $picture, ?string $folder = " ", ?int $width = 250, ?int $height = 250)
  {
    // On donne un nouveau nom a l'image 
    $fichier = md5(uniqid(rand(), true)) . '.webp';
    // On récupère les infos de l'image 
    $pictureInfo = getimagesize($picture);
    if ($pictureInfo === false) {
      throw new \Exception('Le forma de l\'image n\'est pas valide');
    }
    // On vérifie le format de l'image
    switch ($pictureInfo['mime']) {
      case 'image/jpeg':
        $pictueSource = imagecreatefromjpeg($picture);
        break;
      case 'image/png':
        $pictueSource = imagecreatefrompng($picture);
        break;
      case 'image/webp':
        $pictueSource = imagecreatefromwebp($picture);
        break;
      default:
        throw new \Exception('Le forma de l\'image n\'est pas valide');
    }

    // On recadre l'image
    // On récupère les dimensions de l'image
    $imageWidth = $pictureInfo[0];
    $imageHeight = $pictureInfo[1];


    // On vérifie les dimensions de l'image

    switch ($imageWidth <=> $imageHeight) {
      case -1: // portrait
        $squarSize = $imageHeight;
        $src_X = 0;
        $src_Y = ($imageHeight - $imageWidth) / 2;
        break;
      case 0: // carré
        $squarSize = $imageHeight;
        $src_X = 0;
        $src_Y = 0;
        break;
      case 1: // paysage
        $squarSize = $imageWidth;
        $src_X = ($imageHeight - $imageWidth) / 2;
        $src_Y = 0;
        break;
    }
    // On crée une nouvelle image "vierge"
    $resizedPicture = imagecreatetruecolor($width, $height);
    \imagecopyresampled($resizedPicture, $pictueSource, 0, 0, $src_X, $src_Y, $width, $height, $squarSize, $squarSize);
    $path = $this->params->get('images_directory') . $folder;

    // On crée le dossier de destination s'il n'existe pas
    if (!file_exists($path . '/mini/')) {
      mkdir($path . '/mini/', 0755,  true);
    }
    // On stocke l'image recadrée
    \imagewebp($resizedPicture, $path . '/mini/' . $width . 'x' . $height . '-' . $fichier);
    $picture->move($path . '/', $fichier);
    return $fichier;
  }
  /**
   * Méthode permettant de supprimer une image
   *
   * @param string $fichier
   * @param string $folder
   * @param integer $width
   * @param integer $height
   * @return boolean
   */
  public function delete(string $fichier, ?string $folder = " ", ?int $width = 250, ?int $height = 250)
  {
    if ($fichier !== 'default.webp') {
      $seccess = false;
      $path = $this->params->get('images_directory') . $folder;
      $min = $path . '/mini/' . $width . 'x' . $height . '-' . $fichier;
      if (file_exists($min)) {
        unlink($min);
        $seccess = true;
      }

      $original = $path . '/' . $fichier;
      if (file_exists($original)) {
        unlink($original);
        $seccess = true;
      }
      return $seccess;
    }
    return false;
  }
}
