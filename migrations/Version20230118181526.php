<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20230118181526 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE produits DROP FOREIGN KEY FK_BE2DDF8CE9EEC0C7');
        $this->addSql('ALTER TABLE produits DROP FOREIGN KEY FK_BE2DDF8CA21214B7');
        $this->addSql('DROP INDEX IDX_BE2DDF8CE9EEC0C7 ON produits');
        $this->addSql('DROP INDEX IDX_BE2DDF8CA21214B7 ON produits');
        $this->addSql('ALTER TABLE produits DROP categories_id, CHANGE brands_id produits_id INT DEFAULT NULL');
        $this->addSql('ALTER TABLE produits ADD CONSTRAINT FK_BE2DDF8CCD11A2CF FOREIGN KEY (produits_id) REFERENCES category (id)');
        $this->addSql('CREATE INDEX IDX_BE2DDF8CCD11A2CF ON produits (produits_id)');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE produits DROP FOREIGN KEY FK_BE2DDF8CCD11A2CF');
        $this->addSql('DROP INDEX IDX_BE2DDF8CCD11A2CF ON produits');
        $this->addSql('ALTER TABLE produits ADD categories_id INT NOT NULL, CHANGE produits_id brands_id INT DEFAULT NULL');
        $this->addSql('ALTER TABLE produits ADD CONSTRAINT FK_BE2DDF8CE9EEC0C7 FOREIGN KEY (brands_id) REFERENCES marque (id)');
        $this->addSql('ALTER TABLE produits ADD CONSTRAINT FK_BE2DDF8CA21214B7 FOREIGN KEY (categories_id) REFERENCES category (id)');
        $this->addSql('CREATE INDEX IDX_BE2DDF8CE9EEC0C7 ON produits (brands_id)');
        $this->addSql('CREATE INDEX IDX_BE2DDF8CA21214B7 ON produits (categories_id)');
    }
}
