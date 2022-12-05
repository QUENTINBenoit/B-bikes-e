<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20221205124614 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('CREATE TABLE marque_produits (marque_id INT NOT NULL, produits_id INT NOT NULL, INDEX IDX_D329E1C44827B9B2 (marque_id), INDEX IDX_D329E1C4CD11A2CF (produits_id), PRIMARY KEY(marque_id, produits_id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('ALTER TABLE marque_produits ADD CONSTRAINT FK_D329E1C44827B9B2 FOREIGN KEY (marque_id) REFERENCES marque (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE marque_produits ADD CONSTRAINT FK_D329E1C4CD11A2CF FOREIGN KEY (produits_id) REFERENCES produits (id) ON DELETE CASCADE');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE marque_produits DROP FOREIGN KEY FK_D329E1C44827B9B2');
        $this->addSql('ALTER TABLE marque_produits DROP FOREIGN KEY FK_D329E1C4CD11A2CF');
        $this->addSql('DROP TABLE marque_produits');
    }
}
