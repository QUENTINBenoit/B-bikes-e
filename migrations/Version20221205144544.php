<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20221205144544 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE genre ADD name VARCHAR(15) DEFAULT NULL, DROP homme, DROP femme, DROP enfant');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE genre ADD homme TINYINT(1) DEFAULT NULL, ADD femme TINYINT(1) DEFAULT NULL, ADD enfant TINYINT(1) DEFAULT NULL, DROP name');
    }
}
