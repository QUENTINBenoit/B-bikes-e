<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20230123140408 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE equipements DROP FOREIGN KEY FK_3F02D86B6C8A81A9');
        $this->addSql('ALTER TABLE roues_produits DROP FOREIGN KEY FK_5C97D031C1E0297');
        $this->addSql('ALTER TABLE roues_produits DROP FOREIGN KEY FK_5C97D03CD11A2CF');
        $this->addSql('DROP TABLE roues');
        $this->addSql('DROP TABLE equipements');
        $this->addSql('DROP TABLE roues_produits');
        $this->addSql('ALTER TABLE produits ADD taille_roue_vtt VARCHAR(25) DEFAULT NULL, ADD freinds VARCHAR(50) DEFAULT NULL, ADD pratiques VARCHAR(30) DEFAULT NULL, ADD diamètre_de_roue VARCHAR(30) DEFAULT NULL, ADD cadre VARCHAR(255) DEFAULT NULL, ADD amortisseur LONGTEXT DEFAULT NULL, ADD fourche VARCHAR(255) DEFAULT NULL, ADD derailleur_ar VARCHAR(255) NOT NULL, ADD manettes VARCHAR(255) DEFAULT NULL, ADD pneus VARCHAR(255) DEFAULT NULL, ADD cassette VARCHAR(255) DEFAULT NULL, ADD pedalier VARCHAR(255) DEFAULT NULL, ADD potence VARCHAR(255) DEFAULT NULL, ADD cintre VARCHAR(255) DEFAULT NULL, ADD tige_de_selle VARCHAR(255) DEFAULT NULL, ADD selle VARCHAR(255) DEFAULT NULL, ADD poids DOUBLE PRECISION DEFAULT NULL');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('CREATE TABLE roues (id INT AUTO_INCREMENT NOT NULL, jantes VARCHAR(60) CHARACTER SET utf8mb4 NOT NULL COLLATE `utf8mb4_unicode_ci`, moyeux VARCHAR(255) CHARACTER SET utf8mb4 DEFAULT NULL COLLATE `utf8mb4_unicode_ci`, rayon VARCHAR(255) CHARACTER SET utf8mb4 DEFAULT NULL COLLATE `utf8mb4_unicode_ci`, created_at DATETIME NOT NULL COMMENT \'(DC2Type:datetime_immutable)\', updated_at DATETIME DEFAULT NULL COMMENT \'(DC2Type:datetime_immutable)\', PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB COMMENT = \'\' ');
        $this->addSql('CREATE TABLE equipements (id INT AUTO_INCREMENT NOT NULL, products_id INT DEFAULT NULL, cadre VARCHAR(255) CHARACTER SET utf8mb4 DEFAULT NULL COLLATE `utf8mb4_unicode_ci`, fourche VARCHAR(255) CHARACTER SET utf8mb4 DEFAULT NULL COLLATE `utf8mb4_unicode_ci`, jeu_de_direction VARCHAR(255) CHARACTER SET utf8mb4 DEFAULT NULL COLLATE `utf8mb4_unicode_ci`, derailleur_av VARCHAR(255) CHARACTER SET utf8mb4 DEFAULT NULL COLLATE `utf8mb4_unicode_ci`, derailleur_ar VARCHAR(255) CHARACTER SET utf8mb4 DEFAULT NULL COLLATE `utf8mb4_unicode_ci`, commandes_de_vitesse VARCHAR(255) CHARACTER SET utf8mb4 DEFAULT NULL COLLATE `utf8mb4_unicode_ci`, pedalier VARCHAR(255) CHARACTER SET utf8mb4 DEFAULT NULL COLLATE `utf8mb4_unicode_ci`, boitier_de_pedalier VARCHAR(255) CHARACTER SET utf8mb4 DEFAULT NULL COLLATE `utf8mb4_unicode_ci`, guide_chaine VARCHAR(255) CHARACTER SET utf8mb4 DEFAULT NULL COLLATE `utf8mb4_unicode_ci`, cassette VARCHAR(255) CHARACTER SET utf8mb4 DEFAULT NULL COLLATE `utf8mb4_unicode_ci`, cintre VARCHAR(255) CHARACTER SET utf8mb4 DEFAULT NULL COLLATE `utf8mb4_unicode_ci`, poignees VARCHAR(255) CHARACTER SET utf8mb4 DEFAULT NULL COLLATE `utf8mb4_unicode_ci`, potence VARCHAR(255) CHARACTER SET utf8mb4 DEFAULT NULL COLLATE `utf8mb4_unicode_ci`, tige_de_selle VARCHAR(255) CHARACTER SET utf8mb4 DEFAULT NULL COLLATE `utf8mb4_unicode_ci`, selle VARCHAR(255) CHARACTER SET utf8mb4 DEFAULT NULL COLLATE `utf8mb4_unicode_ci`, pneu_av VARCHAR(255) CHARACTER SET utf8mb4 DEFAULT NULL COLLATE `utf8mb4_unicode_ci`, pneu_ar VARCHAR(255) CHARACTER SET utf8mb4 DEFAULT NULL COLLATE `utf8mb4_unicode_ci`, poids DOUBLE PRECISION DEFAULT NULL, created_at DATETIME NOT NULL COMMENT \'(DC2Type:datetime_immutable)\', updated_at DATETIME DEFAULT NULL COMMENT \'(DC2Type:datetime_immutable)\', UNIQUE INDEX UNIQ_3F02D86B6C8A81A9 (products_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB COMMENT = \'\' ');
        $this->addSql('CREATE TABLE roues_produits (roues_id INT NOT NULL, produits_id INT NOT NULL, INDEX IDX_5C97D03CD11A2CF (produits_id), INDEX IDX_5C97D031C1E0297 (roues_id), PRIMARY KEY(roues_id, produits_id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB COMMENT = \'\' ');
        $this->addSql('ALTER TABLE equipements ADD CONSTRAINT FK_3F02D86B6C8A81A9 FOREIGN KEY (products_id) REFERENCES produits (id)');
        $this->addSql('ALTER TABLE roues_produits ADD CONSTRAINT FK_5C97D031C1E0297 FOREIGN KEY (roues_id) REFERENCES roues (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE roues_produits ADD CONSTRAINT FK_5C97D03CD11A2CF FOREIGN KEY (produits_id) REFERENCES produits (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE produits DROP taille_roue_vtt, DROP freinds, DROP pratiques, DROP diamètre_de_roue, DROP cadre, DROP amortisseur, DROP fourche, DROP derailleur_ar, DROP manettes, DROP pneus, DROP cassette, DROP pedalier, DROP potence, DROP cintre, DROP tige_de_selle, DROP selle, DROP poids');
    }
}
