<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20250313123321 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('CREATE TABLE adresse (id INT AUTO_INCREMENT NOT NULL, user_id INT DEFAULT NULL, nom_adresse VARCHAR(255) DEFAULT NULL, rue VARCHAR(255) DEFAULT NULL, numero_rue INT DEFAULT NULL, code_postal INT DEFAULT NULL, ville VARCHAR(255) DEFAULT NULL, created_at DATETIME NOT NULL COMMENT \'(DC2Type:datetime_immutable)\', updated_at DATETIME DEFAULT NULL COMMENT \'(DC2Type:datetime_immutable)\', addresse_fav TINYINT(1) NOT NULL, INDEX IDX_C35F0816A76ED395 (user_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE category (id INT AUTO_INCREMENT NOT NULL, parent_id INT DEFAULT NULL, name VARCHAR(30) NOT NULL, category_order INT NOT NULL, created_at DATETIME DEFAULT NULL COMMENT \'(DC2Type:datetime_immutable)\', updated_at DATETIME DEFAULT NULL COMMENT \'(DC2Type:datetime_immutable)\', image_catego VARCHAR(255) DEFAULT NULL, INDEX IDX_64C19C1727ACA70 (parent_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE category_produits (category_id INT NOT NULL, produits_id INT NOT NULL, INDEX IDX_9575BF712469DE2 (category_id), INDEX IDX_9575BF7CD11A2CF (produits_id), PRIMARY KEY(category_id, produits_id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE commande (id INT AUTO_INCREMENT NOT NULL, statuss_id INT DEFAULT NULL, paiements_id INT NOT NULL, transporteurs_id INT DEFAULT NULL, user_id INT NOT NULL, numero_de_commande INT NOT NULL, created_at DATETIME NOT NULL COMMENT \'(DC2Type:datetime_immutable)\', updated_at DATETIME DEFAULT NULL COMMENT \'(DC2Type:datetime_immutable)\', INDEX IDX_6EEAA67D52CA8514 (statuss_id), INDEX IDX_6EEAA67DB985086F (paiements_id), INDEX IDX_6EEAA67D365D12BB (transporteurs_id), INDEX IDX_6EEAA67DA76ED395 (user_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE genre (id INT AUTO_INCREMENT NOT NULL, name VARCHAR(15) DEFAULT NULL, PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE genre_produits (genre_id INT NOT NULL, produits_id INT NOT NULL, INDEX IDX_D7020314296D31F (genre_id), INDEX IDX_D702031CD11A2CF (produits_id), PRIMARY KEY(genre_id, produits_id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE images (id INT AUTO_INCREMENT NOT NULL, products_id INT DEFAULT NULL, name VARCHAR(200) DEFAULT NULL, INDEX IDX_E01FBE6A6C8A81A9 (products_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE ligne_commande (id INT AUTO_INCREMENT NOT NULL, nom_produit VARCHAR(255) NOT NULL, quantite INT NOT NULL, montant_ht DOUBLE PRECISION NOT NULL, montant_ttc INT NOT NULL, taux_tva DOUBLE PRECISION NOT NULL, created_at DATETIME NOT NULL COMMENT \'(DC2Type:datetime_immutable)\', updated_at DATETIME DEFAULT NULL COMMENT \'(DC2Type:datetime_immutable)\', PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE marque (id INT AUTO_INCREMENT NOT NULL, name VARCHAR(50) NOT NULL, logo VARCHAR(200) DEFAULT NULL, PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE marque_produits (marque_id INT NOT NULL, produits_id INT NOT NULL, INDEX IDX_D329E1C44827B9B2 (marque_id), INDEX IDX_D329E1C4CD11A2CF (produits_id), PRIMARY KEY(marque_id, produits_id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE motorisation (id INT AUTO_INCREMENT NOT NULL, name VARCHAR(100) NOT NULL, marque_moteur VARCHAR(60) NOT NULL, description_moteur LONGTEXT DEFAULT NULL, batterie VARCHAR(60) DEFAULT NULL, puissance_batterie DOUBLE PRECISION NOT NULL, console VARCHAR(30) NOT NULL, created_at DATETIME NOT NULL COMMENT \'(DC2Type:datetime_immutable)\', updated_at DATETIME DEFAULT NULL COMMENT \'(DC2Type:datetime_immutable)\', performance INT DEFAULT NULL, PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE `order` (id INT AUTO_INCREMENT NOT NULL, user_id INT NOT NULL, created_at DATETIME NOT NULL COMMENT \'(DC2Type:datetime_immutable)\', transporter_name VARCHAR(255) NOT NULL, transporter_price DOUBLE PRECISION NOT NULL, delivery LONGTEXT DEFAULT NULL, is_paid TINYINT(1) NOT NULL, method_pay VARCHAR(255) NOT NULL, reference_order VARCHAR(255) NOT NULL, stripe_session_id VARCHAR(255) DEFAULT NULL, paypal_order_id VARCHAR(255) DEFAULT NULL, INDEX IDX_F5299398A76ED395 (user_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE paiement (id INT AUTO_INCREMENT NOT NULL, mode_de_paiement VARCHAR(255) NOT NULL, created_at DATETIME NOT NULL COMMENT \'(DC2Type:datetime_immutable)\', updapted_at DATETIME DEFAULT NULL COMMENT \'(DC2Type:datetime_immutable)\', PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE produits (id INT AUTO_INCREMENT NOT NULL, motorisation_id INT DEFAULT NULL, name VARCHAR(60) NOT NULL, reference INT NOT NULL, description LONGTEXT DEFAULT NULL, nouveaute TINYINT(1) NOT NULL, promotion TINYINT(1) NOT NULL, stock INT NOT NULL, prix DOUBLE PRECISION NOT NULL, poucentage_promotion INT DEFAULT NULL, prix_promotion DOUBLE PRECISION DEFAULT NULL, avis DOUBLE PRECISION DEFAULT NULL, taille_roue_vtt VARCHAR(25) DEFAULT NULL, frein VARCHAR(50) DEFAULT NULL, pratiques VARCHAR(30) DEFAULT NULL, diametre_de_roue VARCHAR(30) DEFAULT NULL, cadre VARCHAR(255) DEFAULT NULL, amortisseur LONGTEXT DEFAULT NULL, fourche VARCHAR(255) DEFAULT NULL, derailleur_ar VARCHAR(255) DEFAULT NULL, manettes VARCHAR(255) DEFAULT NULL, pneus VARCHAR(255) DEFAULT NULL, cassette VARCHAR(255) DEFAULT NULL, pedalier VARCHAR(255) DEFAULT NULL, potence VARCHAR(255) DEFAULT NULL, cintre VARCHAR(255) DEFAULT NULL, tige_de_selle VARCHAR(255) DEFAULT NULL, selle VARCHAR(255) DEFAULT NULL, poids DOUBLE PRECISION DEFAULT NULL, created_at DATETIME NOT NULL COMMENT \'(DC2Type:datetime_immutable)\', updated_at DATETIME DEFAULT NULL COMMENT \'(DC2Type:datetime_immutable)\', utilisation VARCHAR(60) DEFAULT NULL, engine VARCHAR(255) DEFAULT NULL, battery VARCHAR(255) DEFAULT NULL, is_vae TINYINT(1) NOT NULL, INDEX IDX_BE2DDF8CA3B5A725 (motorisation_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE recap_details (id INT AUTO_INCREMENT NOT NULL, order_recap_id INT NOT NULL, quantity INT NOT NULL, price DOUBLE PRECISION NOT NULL, total_recap DOUBLE PRECISION NOT NULL, product_order VARCHAR(255) DEFAULT NULL, INDEX IDX_1D1FD696B2C57C0 (order_recap_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE status (id INT AUTO_INCREMENT NOT NULL, status_commande VARCHAR(255) NOT NULL, created_at DATETIME NOT NULL COMMENT \'(DC2Type:datetime_immutable)\', updated_at DATETIME DEFAULT NULL COMMENT \'(DC2Type:datetime_immutable)\', PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE transporteur (id INT AUTO_INCREMENT NOT NULL, type VARCHAR(255) NOT NULL, price DOUBLE PRECISION DEFAULT NULL, content LONGTEXT DEFAULT NULL, PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE user (id INT AUTO_INCREMENT NOT NULL, email VARCHAR(180) NOT NULL, roles JSON NOT NULL COMMENT \'(DC2Type:json)\', password VARCHAR(255) NOT NULL, firstname VARCHAR(255) NOT NULL, avatar VARCHAR(255) DEFAULT NULL, lastname VARCHAR(25) DEFAULT NULL, created_at DATETIME DEFAULT NULL COMMENT \'(DC2Type:datetime_immutable)\', token_registration VARCHAR(255) DEFAULT NULL, token_registration_life_time DATETIME NOT NULL, is_verified TINYINT(1) NOT NULL, UNIQUE INDEX UNIQ_8D93D649E7927C74 (email), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE messenger_messages (id BIGINT AUTO_INCREMENT NOT NULL, body LONGTEXT NOT NULL, headers LONGTEXT NOT NULL, queue_name VARCHAR(190) NOT NULL, created_at DATETIME NOT NULL COMMENT \'(DC2Type:datetime_immutable)\', available_at DATETIME NOT NULL COMMENT \'(DC2Type:datetime_immutable)\', delivered_at DATETIME DEFAULT NULL COMMENT \'(DC2Type:datetime_immutable)\', INDEX IDX_75EA56E0FB7336F0 (queue_name), INDEX IDX_75EA56E0E3BD61CE (available_at), INDEX IDX_75EA56E016BA31DB (delivered_at), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('ALTER TABLE adresse ADD CONSTRAINT FK_C35F0816A76ED395 FOREIGN KEY (user_id) REFERENCES user (id)');
        $this->addSql('ALTER TABLE category ADD CONSTRAINT FK_64C19C1727ACA70 FOREIGN KEY (parent_id) REFERENCES category (id)');
        $this->addSql('ALTER TABLE category_produits ADD CONSTRAINT FK_9575BF712469DE2 FOREIGN KEY (category_id) REFERENCES category (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE category_produits ADD CONSTRAINT FK_9575BF7CD11A2CF FOREIGN KEY (produits_id) REFERENCES produits (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE commande ADD CONSTRAINT FK_6EEAA67D52CA8514 FOREIGN KEY (statuss_id) REFERENCES status (id)');
        $this->addSql('ALTER TABLE commande ADD CONSTRAINT FK_6EEAA67DB985086F FOREIGN KEY (paiements_id) REFERENCES paiement (id)');
        $this->addSql('ALTER TABLE commande ADD CONSTRAINT FK_6EEAA67D365D12BB FOREIGN KEY (transporteurs_id) REFERENCES transporteur (id)');
        $this->addSql('ALTER TABLE commande ADD CONSTRAINT FK_6EEAA67DA76ED395 FOREIGN KEY (user_id) REFERENCES user (id)');
        $this->addSql('ALTER TABLE genre_produits ADD CONSTRAINT FK_D7020314296D31F FOREIGN KEY (genre_id) REFERENCES genre (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE genre_produits ADD CONSTRAINT FK_D702031CD11A2CF FOREIGN KEY (produits_id) REFERENCES produits (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE images ADD CONSTRAINT FK_E01FBE6A6C8A81A9 FOREIGN KEY (products_id) REFERENCES produits (id)');
        $this->addSql('ALTER TABLE marque_produits ADD CONSTRAINT FK_D329E1C44827B9B2 FOREIGN KEY (marque_id) REFERENCES marque (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE marque_produits ADD CONSTRAINT FK_D329E1C4CD11A2CF FOREIGN KEY (produits_id) REFERENCES produits (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE `order` ADD CONSTRAINT FK_F5299398A76ED395 FOREIGN KEY (user_id) REFERENCES user (id)');
        $this->addSql('ALTER TABLE produits ADD CONSTRAINT FK_BE2DDF8CA3B5A725 FOREIGN KEY (motorisation_id) REFERENCES motorisation (id)');
        $this->addSql('ALTER TABLE recap_details ADD CONSTRAINT FK_1D1FD696B2C57C0 FOREIGN KEY (order_recap_id) REFERENCES `order` (id)');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE adresse DROP FOREIGN KEY FK_C35F0816A76ED395');
        $this->addSql('ALTER TABLE category DROP FOREIGN KEY FK_64C19C1727ACA70');
        $this->addSql('ALTER TABLE category_produits DROP FOREIGN KEY FK_9575BF712469DE2');
        $this->addSql('ALTER TABLE category_produits DROP FOREIGN KEY FK_9575BF7CD11A2CF');
        $this->addSql('ALTER TABLE commande DROP FOREIGN KEY FK_6EEAA67D52CA8514');
        $this->addSql('ALTER TABLE commande DROP FOREIGN KEY FK_6EEAA67DB985086F');
        $this->addSql('ALTER TABLE commande DROP FOREIGN KEY FK_6EEAA67D365D12BB');
        $this->addSql('ALTER TABLE commande DROP FOREIGN KEY FK_6EEAA67DA76ED395');
        $this->addSql('ALTER TABLE genre_produits DROP FOREIGN KEY FK_D7020314296D31F');
        $this->addSql('ALTER TABLE genre_produits DROP FOREIGN KEY FK_D702031CD11A2CF');
        $this->addSql('ALTER TABLE images DROP FOREIGN KEY FK_E01FBE6A6C8A81A9');
        $this->addSql('ALTER TABLE marque_produits DROP FOREIGN KEY FK_D329E1C44827B9B2');
        $this->addSql('ALTER TABLE marque_produits DROP FOREIGN KEY FK_D329E1C4CD11A2CF');
        $this->addSql('ALTER TABLE `order` DROP FOREIGN KEY FK_F5299398A76ED395');
        $this->addSql('ALTER TABLE produits DROP FOREIGN KEY FK_BE2DDF8CA3B5A725');
        $this->addSql('ALTER TABLE recap_details DROP FOREIGN KEY FK_1D1FD696B2C57C0');
        $this->addSql('DROP TABLE adresse');
        $this->addSql('DROP TABLE category');
        $this->addSql('DROP TABLE category_produits');
        $this->addSql('DROP TABLE commande');
        $this->addSql('DROP TABLE genre');
        $this->addSql('DROP TABLE genre_produits');
        $this->addSql('DROP TABLE images');
        $this->addSql('DROP TABLE ligne_commande');
        $this->addSql('DROP TABLE marque');
        $this->addSql('DROP TABLE marque_produits');
        $this->addSql('DROP TABLE motorisation');
        $this->addSql('DROP TABLE `order`');
        $this->addSql('DROP TABLE paiement');
        $this->addSql('DROP TABLE produits');
        $this->addSql('DROP TABLE recap_details');
        $this->addSql('DROP TABLE status');
        $this->addSql('DROP TABLE transporteur');
        $this->addSql('DROP TABLE user');
        $this->addSql('DROP TABLE messenger_messages');
    }
}
