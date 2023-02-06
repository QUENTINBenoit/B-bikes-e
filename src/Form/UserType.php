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
use Symfony\Bundle\SecurityBundle\Security;
use Symfony\Component\Console\Helper\Dumper;
use Symfony\Component\DependencyInjection\Dumper\Dumper as DumperDumper;
use Symfony\Component\Form\Extension\Core\Type\FileType;
use Symfony\Component\Yaml\Dumper as YamlDumper;

class UserType extends AbstractType
{
    public function __construct(private Security $security)
    {
    }
    public function buildForm(FormBuilderInterface $builder, array $options,): void
    {
        $builder
            ->add('email')
            ->add('firstname')
            ->add('avatar')
            ->add('lastname')
            ->addEventListener(
                FormEvents::PRE_SET_DATA,
                function (FormEvent $event,) {
                    if ($this->security->isGranted('ROLE_SUPER_ADMIN')) {
                        $event->getForm()->add('roles', ChoiceType::class, [
                            'choices' => [
                                'Super Administrateur' => 'ROLE_SUPER_ADMIN',
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
            )
            ->add('avatar', FileType::class, [
                'label' => 'Avatar',
                'multiple' => true,
                'mapped' => false,
                'required' => false,
            ])
            // rendre le champ password obligatoire uniquement lors de la création d'un utilisateur
            ->addEventListener(
                FormEvents::PRE_SET_DATA,
                function (formEvent $event) {
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
                        'required' => $required,
                        'first_options' => [
                            'label' => 'Mot de passe',
                        ],
                        'second_options' => [
                            'label' => 'Confirmer le mot de passe',
                        ],
                        'invalid_message' => 'Les mots de passe ne correspondent pas',
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
