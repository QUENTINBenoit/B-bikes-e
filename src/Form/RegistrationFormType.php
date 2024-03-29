<?php

namespace App\Form;

use App\Entity\User;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\CheckboxType;
use Symfony\Component\Form\Extension\Core\Type\EmailType;
use Symfony\Component\Form\Extension\Core\Type\PasswordType;
use Symfony\Component\Form\Extension\Core\Type\RepeatedType;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Symfony\Component\Validator\Constraints\IsTrue;
use Symfony\Component\Validator\Constraints\Length;
use Symfony\Component\Validator\Constraints\NotBlank;

use function PHPSTORM_META\type;

class RegistrationFormType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        $builder
            ->add('firstname', TextType::class, [
                'label' => 'Prénom',
                'label_attr' => ['class' => 'text-white'],
                'constraints' => new NotBlank([
                    'message' => 'Veuillez entrer un prénom',

                ])
            ])
            ->add('lastname', TextType::class, [
                'label' => 'Nom',
                'label_attr' => ['class' => 'text-white'],
                'constraints' => new NotBlank([
                    'message' => 'Veuillez entrer un nom',
                ])
            ])
            ->add('email', EmailType::class, [
                'label' => 'E-mail',
                'label_attr' => ['class' => 'text-white'],

                'constraints' => new NotBlank([
                    'message' => 'Veuillez entrer un e-mail',
                ])
            ])
            ->add('agreeTerms', CheckboxType::class, [
                'label' => 'Accepter les CGU',
                'label_attr' => ['class' => 'text-white'],
                'mapped' => false,
                'constraints' => [
                    new IsTrue([
                        'message' => 'Vous devez accepter les conditions',
                    ]),
                ],
            ])
            ->add('password', RepeatedType::class, [
                
                'type' => PasswordType::class,
            
             
                'first_options'  => [
             
                  
                    'label' => 'Mot de passe',
                    'label_attr' => ['class' => 'text-white'],
                    //'help' => 'Votre mot de passe doit contenir au moins 6 caractères',

                    'mapped' => false,
                    'attr' => [
                        'autocomplete' => 'new-password',
                        'placeholder' => 'Votre mot de passe doit contenir au moins 6 caractères',
                    ],
                    'constraints' => [
                        new NotBlank([
                            'message' => 'Please enter a password',
                        ]),
                        new Length([
                            'min' => 6,
                            'minMessage' => 'Your password should be at least {{ limit }} characters',
                            // max length allowed by Symfony for security reasons
                            'max' => 4096,
                        ]),
                    ],
                    
                ],
                'second_options' => [
                    'label' => 'Confirmer le mot de passe',
                    'label_attr' => ['class' => 'text-white'],
                    'mapped' => false,
                 
                    'attr' => ['autocomplete' => 'new-password'],
                    'constraints' => [
                        new NotBlank([
                            'message' => 'Veuillez confirmer votre mot de passe',
                        ]),
                        new Length([
                            'min' => 6,
                            'minMessage' => 'Votre mot de passe doit contenir au moins {{ limit }} caractères',
                            // max length allowed by Symfony for security reasons
                            'max' => 4096,
                        ]),
                    ],
              
                ],
                'invalid_message' => 'les mots de passe ne correspondent pas.',




            ]);
    }

    public function configureOptions(OptionsResolver $resolver): void
    {
        $resolver->setDefaults([
            'data_class' => User::class,
        ]);
    }
}
