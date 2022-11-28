<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20221127193622 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE equipements ADD derailleur_av VARCHAR(255) DEFAULT NULL, ADD pedalier VARCHAR(255) DEFAULT NULL, ADD boitier_de_pedalier VARCHAR(255) DEFAULT NULL, ADD gui_de_chaine VARCHAR(255) DEFAULT NULL, DROP dérailleur_av, DROP pédalier, DROP boitier_de_pédalier, DROP guide_chaîne');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE equipements ADD dérailleur_av VARCHAR(255) DEFAULT NULL, ADD pédalier VARCHAR(255) DEFAULT NULL, ADD boitier_de_pédalier VARCHAR(255) DEFAULT NULL, ADD guide_chaîne VARCHAR(255) DEFAULT NULL, DROP derailleur_av, DROP pedalier, DROP boitier_de_pedalier, DROP gui_de_chaine');
    }
}
