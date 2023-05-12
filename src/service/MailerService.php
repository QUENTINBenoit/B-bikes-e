<?php

namespace App\service;


use Symfony\Bridge\Twig\Mime\TemplatedEmail;
use Symfony\Component\Mailer\Exception\TransportExceptionInterface;
use Symfony\Component\Mailer\MailerInterface;
use Symfony\Component\Mime\Address;

/**
 * Serviece poue la gestion des mails 
 */

class MailerService
{
  public function __construct(private readonly MailerInterface $mailer)
  {
  }
  /**
   * Undocumented function
   *
   * @param string $to
   * @param string $subject
   * @param string $templateTwig
   * @param array $context
   * @return void
   */
  public function send(
    string $to,
    string $subject,
    string $templateTwig,
    array $context
  ): void {
    $email = (new TemplatedEmail())
      ->from(new Address('noreply@bbikeses.fr', 'Bbikeses'))
      ->to($to)
      ->subject($subject)
      ->htmlTemplate("mails/$templateTwig")
      ->context($context);
    try {
      $this->mailer->send($email);
    } catch (TransportExceptionInterface $transportExceptionInterface) {
      throw $transportExceptionInterface;
    }
  }
}
