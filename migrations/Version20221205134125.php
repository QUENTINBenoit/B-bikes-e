<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20221205134125 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE genre CHANGE homme homme TINYINT(1) NOT NULL, CHANGE femme femme TINYINT(1) NOT NULL, CHANGE enfant enfant TINYINT(1) NOT NULL');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE genre CHANGE homme homme TINYINT(1) DEFAULT NULL, CHANGE femme femme TINYINT(1) DEFAULT NULL, CHANGE enfant enfant TINYINT(1) DEFAULT NULL');
    }
}
