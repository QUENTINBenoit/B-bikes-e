<?php

namespace App\Security\Voter;

use Symfony\Component\Security\Core\Authentication\Token\TokenInterface;
use Symfony\Component\Security\Core\Authorization\Voter\Voter;
use Symfony\Component\Security\Core\User\UserInterface;
use Symfony\Bundle\SecurityBundle\Security;

class UserVoter extends Voter
{
    public const EDIT = 'USER_EDIT';
    public const VIEW = 'USER_VIEW';


    public function __construct(private Security $security)
    {
    }

    protected function supports(string $attribute, mixed $subject): bool
    {

        // \dd($attribute, $subject);

        // replace with your own logic
        // https://symfony.com/doc/current/security/voters.html
        return in_array($attribute, [self::EDIT, self::VIEW])
            && $subject instanceof \App\Entity\User;
    }

    protected function voteOnAttribute(string $attribute, mixed $subject, TokenInterface $token): bool
    {

        // \dump('On est bien dans la methode voteOnAttribute');

        // utilisateur actuellement connecté
        $user = $token->getUser();
        // \dd($user);

        // if the user is anonymous, do not grant access
        if (!$user instanceof UserInterface) {
            return false;
        }

        $userRoles = $user->getRoles();
        //  \dump($userRoles);
        // ... (check conditions and return true to grant permission) ...
        switch ($attribute) {
            case self::EDIT:
                // Je verifie si l'utilisateur connecté est bien l'utilisateur qu'il veut modifier 
                // ou si l'utilisateur connecté est un super admin
                if ($user === $subject || $this->security->isGranted('ROLE_SUPER_ADMIN',)) {
                    return true;
                }
                // Si l'utilisateur connecté  est admin peut modifier un autre utilisateur
                if (count($userRoles) === 1 && ($userRoles[0] == 'ROLE_ADMIN' || $userRoles[0] == 'ROLE_TESTEUR')) {
                    return true;
                }
                break;
            case self::VIEW:

                // logic to determine if the user can VIEW
                // return true or false
                break;
        }

        return false;
    }
}
