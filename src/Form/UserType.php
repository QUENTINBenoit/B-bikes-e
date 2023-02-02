<?php

namespace App\Form;

use App\Entity\User;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\ChoiceType;
use Symfony\Component\Form\Extension\Core\Type\PasswordType;
use Symfony\Component\Form\Extension\Core\Type\RepeatedType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\Form\FormEvent;
use Symfony\Component\Form\FormEvents;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Symfony\Component\Security\Core\User\UserInterface;
use Symfony\Bundle\SecurityBundle\Security;

class UserType extends AbstractType
{

    public function __construct(private Security $security)
    {
    }
    public function buildForm(FormBuilderInterface $builder, array $options,): void
    {
        $builder
            ->add('email')
            ->add('password', RepeatedType::class, [
                'type' => PasswordType::class,
                'first_options' => [
                    'label' => 'Mode de passe',
                ],
                'second_options' => [
                    'label' => 'Cofirmation du mot de passe'
                ],
                'invalid_message' => 'les mots de passe ne correspondent pas.'
            ])
            ->add('firstname')
            ->add('avatar')
            ->add('lastname')
            ->addEventListener(
                FormEvents::PRE_SET_DATA,
                function (FormEvent $event,) {
                    \dump($event);
                    dump('benoit',);
                    $userRoles = $event->getData()->getRoles();
                    \dump($userRoles);
                    dump($this->security);
                    if ($this->security->isGranted('ROLE_SUPER_ADMIN')) {

                        $event->getForm()->add('roles', ChoiceType::class, [
                            'choices' => [
                                'Super Administrateur' => 'ROLES_SUPER_ADMIN',
                                'Administrateur' => 'ROLE_ADMIN',
                                'Testeur' => 'ROLE_TESTEUR',
                            ],

                            'multiple' => true,
                            'expanded' => true,
                        ]);
                    } elseif ($this->security->isGranted('ROLE_ADMIN')) {
                        $event->getForm()->add('roles', ChoiceType::class, [
                            'choices' => [
                                'Administrateur' => 'ROLE_ADMIN',
                                'Testeur' => 'ROLE_TESTEUR',
                            ],
                            'multiple' => true,
                            'expanded' => true,
                        ]);
                    } elseif ($this->security->isGranted('ROLE_TESTEUR')) {
                        $event->getForm()->add('roles', ChoiceType::class, [
                            'choices' => [
                                'Testeur' => 'ROLE_TESTEUR',
                            ],
                            'multiple' => true,
                            'expanded' => true,
                        ]);
                    }
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
