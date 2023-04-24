<?php

namespace App\Form;

use App\Entity\User;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\FileType;
use Symfony\Component\Form\Extension\Core\Type\PasswordType;
use Symfony\Component\Form\Extension\Core\Type\RepeatedType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\Form\FormEvent;
use Symfony\Component\Form\FormEvents;
use Symfony\Component\OptionsResolver\OptionsResolver;

class CompteUserType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        $builder

            ->add('firstname')
            ->add('lastname')
            ->add('email')
            ->add('avatar', FileType::class, [
                'label' => 'Avatar',
                'multiple' => true,
                'mapped' => false,
                'required' => false,
            ])
            // rendre le champ password optionnel
            ->addEventListener(
                FormEvents::PRE_SET_DATA,
                function (FormEvent $event) {
                    $form = $event->getForm();
                    $userData = $event->getData();
                    // $userData->getId() === \null ? $required = \true : $required = \false;
                    if ($userData->getId() === \null) {
                        $required = \true;
                    } else {
                        $required = \false;
                    }
                    $form->add('password', RepeatedType::class, [
                        'type' => PasswordType::class,
                        'mapped' => false,
                        'invalid_message' => 'les mots de passe doivent être identiques',
                        'required' => $required,
                        'first_options' => ['label' => 'Mot de passe'],
                        'second_options' => ['label' => 'Confirmez le mot de passe'],
                    ]);
                }
            );
    }

    public function configureOptions(OptionsResolver $resolver): void
    {
        $resolver->setDefaults([
            'data_class' => User::class,
        ]);
    }
}
