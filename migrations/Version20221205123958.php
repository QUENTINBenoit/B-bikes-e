<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20221205123958 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE marque CHANGE brand name VARCHAR(50) NOT NULL');
        $this->addSql('ALTER TABLE produits DROP FOREIGN KEY FK_BE2DDF8C4827B9B2');
        $this->addSql('DROP INDEX IDX_BE2DDF8C4827B9B2 ON produits');
        $this->addSql('ALTER TABLE produits DROP marque_id');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE marque CHANGE name brand VARCHAR(50) NOT NULL');
        $this->addSql('ALTER TABLE produits ADD marque_id INT DEFAULT NULL');
        $this->addSql('ALTER TABLE produits ADD CONSTRAINT FK_BE2DDF8C4827B9B2 FOREIGN KEY (marque_id) REFERENCES marque (id)');
        $this->addSql('CREATE INDEX IDX_BE2DDF8C4827B9B2 ON produits (marque_id)');
    }
}
