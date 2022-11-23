<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20221121121629 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('CREATE TABLE roues_produits (roues_id INT NOT NULL, produits_id INT NOT NULL, INDEX IDX_5C97D031C1E0297 (roues_id), INDEX IDX_5C97D03CD11A2CF (produits_id), PRIMARY KEY(roues_id, produits_id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('ALTER TABLE roues_produits ADD CONSTRAINT FK_5C97D031C1E0297 FOREIGN KEY (roues_id) REFERENCES roues (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE roues_produits ADD CONSTRAINT FK_5C97D03CD11A2CF FOREIGN KEY (produits_id) REFERENCES produits (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE equipements ADD products_id INT DEFAULT NULL');
        $this->addSql('ALTER TABLE equipements ADD CONSTRAINT FK_3F02D86B6C8A81A9 FOREIGN KEY (products_id) REFERENCES produits (id)');
        $this->addSql('CREATE UNIQUE INDEX UNIQ_3F02D86B6C8A81A9 ON equipements (products_id)');
        $this->addSql('ALTER TABLE images ADD products_id INT DEFAULT NULL');
        $this->addSql('ALTER TABLE images ADD CONSTRAINT FK_E01FBE6A6C8A81A9 FOREIGN KEY (products_id) REFERENCES produits (id)');
        $this->addSql('CREATE INDEX IDX_E01FBE6A6C8A81A9 ON images (products_id)');
        $this->addSql('ALTER TABLE produits ADD motorisation_id INT DEFAULT NULL, ADD marques_id INT DEFAULT NULL');
        $this->addSql('ALTER TABLE produits ADD CONSTRAINT FK_BE2DDF8CA3B5A725 FOREIGN KEY (motorisation_id) REFERENCES motorisation (id)');
        $this->addSql('ALTER TABLE produits ADD CONSTRAINT FK_BE2DDF8CC256483C FOREIGN KEY (marques_id) REFERENCES marques (id)');
        $this->addSql('CREATE INDEX IDX_BE2DDF8CA3B5A725 ON produits (motorisation_id)');
        $this->addSql('CREATE INDEX IDX_BE2DDF8CC256483C ON produits (marques_id)');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE roues_produits DROP FOREIGN KEY FK_5C97D031C1E0297');
        $this->addSql('ALTER TABLE roues_produits DROP FOREIGN KEY FK_5C97D03CD11A2CF');
        $this->addSql('DROP TABLE roues_produits');
        $this->addSql('ALTER TABLE equipements DROP FOREIGN KEY FK_3F02D86B6C8A81A9');
        $this->addSql('DROP INDEX UNIQ_3F02D86B6C8A81A9 ON equipements');
        $this->addSql('ALTER TABLE equipements DROP products_id');
        $this->addSql('ALTER TABLE images DROP FOREIGN KEY FK_E01FBE6A6C8A81A9');
        $this->addSql('DROP INDEX IDX_E01FBE6A6C8A81A9 ON images');
        $this->addSql('ALTER TABLE images DROP products_id');
        $this->addSql('ALTER TABLE produits DROP FOREIGN KEY FK_BE2DDF8CA3B5A725');
        $this->addSql('ALTER TABLE produits DROP FOREIGN KEY FK_BE2DDF8CC256483C');
        $this->addSql('DROP INDEX IDX_BE2DDF8CA3B5A725 ON produits');
        $this->addSql('DROP INDEX IDX_BE2DDF8CC256483C ON produits');
        $this->addSql('ALTER TABLE produits DROP motorisation_id, DROP marques_id');
    }
}
