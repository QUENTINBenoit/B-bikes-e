<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20221204104052 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE genre_produits DROP FOREIGN KEY FK_D7020314296D31F');
        $this->addSql('ALTER TABLE genre_produits DROP FOREIGN KEY FK_D702031CD11A2CF');
        $this->addSql('DROP TABLE genre');
        $this->addSql('DROP TABLE genre_produits');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('CREATE TABLE genre (id INT AUTO_INCREMENT NOT NULL, homme TINYINT(1) NOT NULL, femme TINYINT(1) NOT NULL, enfant TINYINT(1) NOT NULL, PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB COMMENT = \'\' ');
        $this->addSql('CREATE TABLE genre_produits (genre_id INT NOT NULL, produits_id INT NOT NULL, INDEX IDX_D7020314296D31F (genre_id), INDEX IDX_D702031CD11A2CF (produits_id), PRIMARY KEY(genre_id, produits_id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB COMMENT = \'\' ');
        $this->addSql('ALTER TABLE genre_produits ADD CONSTRAINT FK_D7020314296D31F FOREIGN KEY (genre_id) REFERENCES genre (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE genre_produits ADD CONSTRAINT FK_D702031CD11A2CF FOREIGN KEY (produits_id) REFERENCES produits (id) ON DELETE CASCADE');
    }
}
