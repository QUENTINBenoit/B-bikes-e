<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20221204144129 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE produits DROP FOREIGN KEY FK_BE2DDF8CC256483C');
        $this->addSql('DROP INDEX IDX_BE2DDF8CC256483C ON produits');
        $this->addSql('ALTER TABLE produits DROP marques_id');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE produits ADD marques_id INT DEFAULT NULL');
        $this->addSql('ALTER TABLE produits ADD CONSTRAINT FK_BE2DDF8CC256483C FOREIGN KEY (marques_id) REFERENCES marques (id)');
        $this->addSql('CREATE INDEX IDX_BE2DDF8CC256483C ON produits (marques_id)');
    }
}
