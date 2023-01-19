<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20230117181921 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('CREATE TABLE category (id INT AUTO_INCREMENT NOT NULL, parent_id INT DEFAULT NULL, name VARCHAR(30) NOT NULL, category_order INT NOT NULL, created_at DATETIME DEFAULT NULL COMMENT \'(DC2Type:datetime_immutable)\', updated_at DATETIME DEFAULT NULL COMMENT \'(DC2Type:datetime_immutable)\', INDEX IDX_64C19C1727ACA70 (parent_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE equipements (id INT AUTO_INCREMENT NOT NULL, products_id INT DEFAULT NULL, cadre VARCHAR(255) DEFAULT NULL, fourche VARCHAR(255) DEFAULT NULL, jeu_de_direction VARCHAR(255) DEFAULT NULL, derailleur_av VARCHAR(255) DEFAULT NULL, derailleur_ar VARCHAR(255) DEFAULT NULL, commandes_de_vitesse VARCHAR(255) DEFAULT NULL, pedalier VARCHAR(255) DEFAULT NULL, boitier_de_pedalier VARCHAR(255) DEFAULT NULL, guide_chaine VARCHAR(255) DEFAULT NULL, cassette VARCHAR(255) DEFAULT NULL, cintre VARCHAR(255) DEFAULT NULL, poignees VARCHAR(255) DEFAULT NULL, potence VARCHAR(255) DEFAULT NULL, tige_de_selle VARCHAR(255) DEFAULT NULL, selle VARCHAR(255) DEFAULT NULL, pneu_av VARCHAR(255) DEFAULT NULL, pneu_ar VARCHAR(255) DEFAULT NULL, poids DOUBLE PRECISION DEFAULT NULL, created_at DATETIME NOT NULL COMMENT \'(DC2Type:datetime_immutable)\', updated_at DATETIME DEFAULT NULL COMMENT \'(DC2Type:datetime_immutable)\', UNIQUE INDEX UNIQ_3F02D86B6C8A81A9 (products_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE genre (id INT AUTO_INCREMENT NOT NULL, name VARCHAR(15) DEFAULT NULL, PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE genre_produits (genre_id INT NOT NULL, produits_id INT NOT NULL, INDEX IDX_D7020314296D31F (genre_id), INDEX IDX_D702031CD11A2CF (produits_id), PRIMARY KEY(genre_id, produits_id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE images (id INT AUTO_INCREMENT NOT NULL, products_id INT DEFAULT NULL, name VARCHAR(200) DEFAULT NULL, INDEX IDX_E01FBE6A6C8A81A9 (products_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE marque (id INT AUTO_INCREMENT NOT NULL, name VARCHAR(50) NOT NULL, logo VARCHAR(200) DEFAULT NULL, PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE marque_produits (marque_id INT NOT NULL, produits_id INT NOT NULL, INDEX IDX_D329E1C44827B9B2 (marque_id), INDEX IDX_D329E1C4CD11A2CF (produits_id), PRIMARY KEY(marque_id, produits_id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE motorisation (id INT AUTO_INCREMENT NOT NULL, name VARCHAR(100) NOT NULL, marque_moteur VARCHAR(60) NOT NULL, description_moteur LONGTEXT DEFAULT NULL, batterie VARCHAR(60) DEFAULT NULL, puissance_batterie DOUBLE PRECISION NOT NULL, console VARCHAR(30) NOT NULL, created_at DATETIME NOT NULL COMMENT \'(DC2Type:datetime_immutable)\', updated_at DATETIME DEFAULT NULL COMMENT \'(DC2Type:datetime_immutable)\', performance INT DEFAULT NULL, PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE produits (id INT AUTO_INCREMENT NOT NULL, motorisation_id INT DEFAULT NULL, categories_id INT NOT NULL, name VARCHAR(60) NOT NULL, reference INT NOT NULL, description LONGTEXT DEFAULT NULL, nouveaute TINYINT(1) NOT NULL, promotion TINYINT(1) NOT NULL, stock INT NOT NULL, prix DOUBLE PRECISION NOT NULL, poucentage_promotion INT DEFAULT NULL, prix_promotion DOUBLE PRECISION DEFAULT NULL, avis DOUBLE PRECISION DEFAULT NULL, created_at DATETIME NOT NULL COMMENT \'(DC2Type:datetime_immutable)\', updated_at DATETIME DEFAULT NULL COMMENT \'(DC2Type:datetime_immutable)\', utilisation VARCHAR(60) DEFAULT NULL, INDEX IDX_BE2DDF8CA3B5A725 (motorisation_id), INDEX IDX_BE2DDF8CA21214B7 (categories_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE roues (id INT AUTO_INCREMENT NOT NULL, jantes VARCHAR(60) NOT NULL, moyeux VARCHAR(255) DEFAULT NULL, rayon VARCHAR(255) DEFAULT NULL, created_at DATETIME NOT NULL COMMENT \'(DC2Type:datetime_immutable)\', updated_at DATETIME DEFAULT NULL COMMENT \'(DC2Type:datetime_immutable)\', PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE roues_produits (roues_id INT NOT NULL, produits_id INT NOT NULL, INDEX IDX_5C97D031C1E0297 (roues_id), INDEX IDX_5C97D03CD11A2CF (produits_id), PRIMARY KEY(roues_id, produits_id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE user (id INT AUTO_INCREMENT NOT NULL, email VARCHAR(180) NOT NULL, roles LONGTEXT NOT NULL COMMENT \'(DC2Type:json)\', password VARCHAR(255) NOT NULL, firstname VARCHAR(255) NOT NULL, avatar VARCHAR(255) DEFAULT NULL, UNIQUE INDEX UNIQ_8D93D649E7927C74 (email), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE messenger_messages (id BIGINT AUTO_INCREMENT NOT NULL, body LONGTEXT NOT NULL, headers LONGTEXT NOT NULL, queue_name VARCHAR(190) NOT NULL, created_at DATETIME NOT NULL, available_at DATETIME NOT NULL, delivered_at DATETIME DEFAULT NULL, INDEX IDX_75EA56E0FB7336F0 (queue_name), INDEX IDX_75EA56E0E3BD61CE (available_at), INDEX IDX_75EA56E016BA31DB (delivered_at), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('ALTER TABLE category ADD CONSTRAINT FK_64C19C1727ACA70 FOREIGN KEY (parent_id) REFERENCES category (id)');
        $this->addSql('ALTER TABLE equipements ADD CONSTRAINT FK_3F02D86B6C8A81A9 FOREIGN KEY (products_id) REFERENCES produits (id)');
        $this->addSql('ALTER TABLE genre_produits ADD CONSTRAINT FK_D7020314296D31F FOREIGN KEY (genre_id) REFERENCES genre (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE genre_produits ADD CONSTRAINT FK_D702031CD11A2CF FOREIGN KEY (produits_id) REFERENCES produits (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE images ADD CONSTRAINT FK_E01FBE6A6C8A81A9 FOREIGN KEY (products_id) REFERENCES produits (id)');
        $this->addSql('ALTER TABLE marque_produits ADD CONSTRAINT FK_D329E1C44827B9B2 FOREIGN KEY (marque_id) REFERENCES marque (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE marque_produits ADD CONSTRAINT FK_D329E1C4CD11A2CF FOREIGN KEY (produits_id) REFERENCES produits (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE produits ADD CONSTRAINT FK_BE2DDF8CA3B5A725 FOREIGN KEY (motorisation_id) REFERENCES motorisation (id)');
        $this->addSql('ALTER TABLE produits ADD CONSTRAINT FK_BE2DDF8CA21214B7 FOREIGN KEY (categories_id) REFERENCES category (id)');
        $this->addSql('ALTER TABLE roues_produits ADD CONSTRAINT FK_5C97D031C1E0297 FOREIGN KEY (roues_id) REFERENCES roues (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE roues_produits ADD CONSTRAINT FK_5C97D03CD11A2CF FOREIGN KEY (produits_id) REFERENCES produits (id) ON DELETE CASCADE');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE category DROP FOREIGN KEY FK_64C19C1727ACA70');
        $this->addSql('ALTER TABLE equipements DROP FOREIGN KEY FK_3F02D86B6C8A81A9');
        $this->addSql('ALTER TABLE genre_produits DROP FOREIGN KEY FK_D7020314296D31F');
        $this->addSql('ALTER TABLE genre_produits DROP FOREIGN KEY FK_D702031CD11A2CF');
        $this->addSql('ALTER TABLE images DROP FOREIGN KEY FK_E01FBE6A6C8A81A9');
        $this->addSql('ALTER TABLE marque_produits DROP FOREIGN KEY FK_D329E1C44827B9B2');
        $this->addSql('ALTER TABLE marque_produits DROP FOREIGN KEY FK_D329E1C4CD11A2CF');
        $this->addSql('ALTER TABLE produits DROP FOREIGN KEY FK_BE2DDF8CA3B5A725');
        $this->addSql('ALTER TABLE produits DROP FOREIGN KEY FK_BE2DDF8CA21214B7');
        $this->addSql('ALTER TABLE roues_produits DROP FOREIGN KEY FK_5C97D031C1E0297');
        $this->addSql('ALTER TABLE roues_produits DROP FOREIGN KEY FK_5C97D03CD11A2CF');
        $this->addSql('DROP TABLE category');
        $this->addSql('DROP TABLE equipements');
        $this->addSql('DROP TABLE genre');
        $this->addSql('DROP TABLE genre_produits');
        $this->addSql('DROP TABLE images');
        $this->addSql('DROP TABLE marque');
        $this->addSql('DROP TABLE marque_produits');
        $this->addSql('DROP TABLE motorisation');
        $this->addSql('DROP TABLE produits');
        $this->addSql('DROP TABLE roues');
        $this->addSql('DROP TABLE roues_produits');
        $this->addSql('DROP TABLE user');
        $this->addSql('DROP TABLE messenger_messages');
    }
}
