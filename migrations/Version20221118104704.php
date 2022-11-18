<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20221118104704 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('CREATE TABLE catégories (id INT AUTO_INCREMENT NOT NULL, name VARCHAR(30) NOT NULL, created_at DATETIME NOT NULL COMMENT \'(DC2Type:datetime_immutable)\', udapted_at DATETIME DEFAULT NULL COMMENT \'(DC2Type:datetime_immutable)\', PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE equipements (id INT AUTO_INCREMENT NOT NULL, cadre VARCHAR(255) DEFAULT NULL, fourche VARCHAR(255) DEFAULT NULL, jeu_de_direction VARCHAR(255) DEFAULT NULL, dérailleur_av VARCHAR(255) DEFAULT NULL, dérailleur_ar VARCHAR(255) DEFAULT NULL, commandes_de_vitesse VARCHAR(255) DEFAULT NULL, pédalier VARCHAR(255) DEFAULT NULL, boitier_de_pédalier VARCHAR(255) DEFAULT NULL, guide_chaîne VARCHAR(255) DEFAULT NULL, cassette VARCHAR(255) DEFAULT NULL, cintre VARCHAR(255) DEFAULT NULL, poignées VARCHAR(255) DEFAULT NULL, potence VARCHAR(255) DEFAULT NULL, tige_de_selle VARCHAR(255) DEFAULT NULL, selle VARCHAR(255) DEFAULT NULL, pneu_av VARCHAR(255) DEFAULT NULL, pneu_ar VARCHAR(255) DEFAULT NULL, poids DOUBLE PRECISION DEFAULT NULL, created_at DATETIME NOT NULL COMMENT \'(DC2Type:datetime_immutable)\', updated_at DATETIME DEFAULT NULL COMMENT \'(DC2Type:datetime_immutable)\', PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE images (id INT AUTO_INCREMENT NOT NULL, name VARCHAR(200) DEFAULT NULL, PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE marques (id INT AUTO_INCREMENT NOT NULL, name VARCHAR(50) NOT NULL, logo VARCHAR(200) DEFAULT NULL, PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE motorisation (id INT AUTO_INCREMENT NOT NULL, nom VARCHAR(100) NOT NULL, marque_moteur VARCHAR(60) NOT NULL, description_moteur LONGTEXT DEFAULT NULL, batterie VARCHAR(60) DEFAULT NULL, puissance_batterie DOUBLE PRECISION NOT NULL, console VARCHAR(30) NOT NULL, created_at DATETIME NOT NULL COMMENT \'(DC2Type:datetime_immutable)\', updated_at DATETIME DEFAULT NULL COMMENT \'(DC2Type:datetime_immutable)\', PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE roues (id INT AUTO_INCREMENT NOT NULL, jantes VARCHAR(60) NOT NULL, moyeux VARCHAR(255) DEFAULT NULL, rayon VARCHAR(255) DEFAULT NULL, created_at DATETIME NOT NULL COMMENT \'(DC2Type:datetime_immutable)\', updated_at DATETIME DEFAULT NULL COMMENT \'(DC2Type:datetime_immutable)\', PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('DROP TABLE catégories');
        $this->addSql('DROP TABLE equipements');
        $this->addSql('DROP TABLE images');
        $this->addSql('DROP TABLE marques');
        $this->addSql('DROP TABLE motorisation');
        $this->addSql('DROP TABLE roues');
    }
}
