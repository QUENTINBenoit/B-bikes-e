<?php

namespace App\Form;

use App\Entity\User;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\EmailType;
use Symfony\Component\Form\Extension\Core\Type\FileType;
use Symfony\Component\Form\Extension\Core\Type\PasswordType;
use Symfony\Component\Form\Extension\Core\Type\RepeatedType;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\Form\FormEvent;
use Symfony\Component\Form\FormEvents;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Symfony\UX\Dropzone\Form\DropzoneType;

class CompteUserType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        $builder
            ->add('firstname', TextType::class, [
                'label' => 'Prénom',
                'required' => true,
                'label_attr' => [
                    'class' => 'text-white',
                ],
            ])
            ->add('lastname', TextType::class, [
                'label' => 'Nom',
                'required' => true,
                'label_attr' => [
                    'class' => 'text-white',
                ],
            ])
            ->add('email', EmailType::class, [
                'label' => 'Email',
                'required' => true,
                'label_attr' => [
                    'class' => 'text-white',
                ],
            ])
            
            ->add('avatar', FileType::class, [
                'label' => 'Avatar',
                'label_attr' => [
                    'class' => 'text-white',
                ],
                'multiple' => true,
                'mapped' => false,
                'required' => false,
            ])

               /*
            ->add('avatar', DropzoneType::class, 
             [
                //'block_prefix' => 'dropzone',
              
                'label' => 'none',
                'label_attr' => [
                    'class' => 'flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600',
                ],
                 'mapped' => false,
                'required' => false,
                'attr' => [
                    'data-controller' => 'dropzone',
                    'class' => 'hidden',
                ],
               
             ]
            )
*/
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
                        'first_options' => [
                            'label' => 'Mot de passe',
                            'label_attr' => [
                                'class' => 'text-white',
                            ]
                        ],
                        'second_options' => [
                            'label' => 'Confirmez le mot de passe',
                            'label_attr' => [
                                'class' => 'text-white',
                            ]
                        ],
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
