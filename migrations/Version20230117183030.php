<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20230117183030 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE produits ADD brands_id INT DEFAULT NULL');
        $this->addSql('ALTER TABLE produits ADD CONSTRAINT FK_BE2DDF8CE9EEC0C7 FOREIGN KEY (brands_id) REFERENCES marque (id)');
        $this->addSql('CREATE INDEX IDX_BE2DDF8CE9EEC0C7 ON produits (brands_id)');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE produits DROP FOREIGN KEY FK_BE2DDF8CE9EEC0C7');
        $this->addSql('DROP INDEX IDX_BE2DDF8CE9EEC0C7 ON produits');
        $this->addSql('ALTER TABLE produits DROP brands_id');
    }
}
