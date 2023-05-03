<?php

namespace App\Form;

use App\Entity\Adresse;
use App\Entity\Transporteur;
use PhpParser\Node\Expr\AssignOp\Mul;
use Symfony\Bridge\Doctrine\Form\Type\EntityType;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Symfony\Component\Form\Extension\Core\Type\ChoiceType;
use Symfony\Component\Validator\Constraints\Choice;

class CheckoutType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options): void
    {

        //  \dd($options['user']);
        $user = $options['user'];

        $builder
            ->add('addreses', EntityType::class, [
                'class' => Adresse::class,
                'label' => false,
                'choice_label' => function (Adresse $adresse) {
                    return
                        $adresse->getNomAdresse() . '[-br]' .
                        $adresse->getNumeroRue() . ' ' .
                        $adresse->getRue() . '[-br]' .
                        $adresse->getVille() . '[-br] ' .
                        $adresse->getCodePostal();
                },
                'required' => true,
                'multiple' => false,
                'expanded' => true,
                'choices' => $user->getAdresses(),
            ])

            ->add('transporteur', EntityType::class, [
                'class' => Transporteur::class,
                'label' => \false,
                'multiple' => false,
                'expanded' => true,
                'required' => true,

                'choice_label' => function (Transporteur $transporteur) {
                    return
                        $transporteur->getType() . ' [-br] ' .
                        $transporteur->getContent() . ' [-br] ' .
                        $transporteur->getPrice() . ' '  . '€';
                },


            ]);
    }

    public function configureOptions(OptionsResolver $resolver): void
    {
        $resolver->setDefaults([
            'user' => [],
        ]);
    }
}
