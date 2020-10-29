import { FuseNavigation } from '@fuse/types';

export const navigation: FuseNavigation[] = [
    {
        id       : 'applications',
        title    : 'Applications',
        translate: 'NAV.APPLICATIONS',
        type     : 'group',
        children : [
            {
                id       : 'dashboard',
                title    : 'Dashboard',
                type     : 'item',
                icon     : 'dashboard',
                url      : '/analytique',
            },
            {
                id       : 'admin',
                title    : 'Gestion Administrateur',
                type     : 'item',
                icon     : 'account_circle',
                url      : '/admin',
            },
            
            {
                id       : 'utilisateur',
                title    : 'Gestion des clients',
                type     : 'item',
                icon     : 'account_circle',
                url      : '/utlisateur',
            },

            {
                id       : 'employer',
                title    : 'Gestion des employers',
                type     : 'item',
                icon     : 'account_circle',
                url      : '/employer',
            },
            {
                id       : 'login',
                title    : 'Login',
                type     : 'item',
                icon     : 'account_circle',
                url      : '/login',
            },
            {
                id       : 'principale',
                title    : 'Principale',
                type     : 'item',
                icon     : 'account_circle',
                url      : '/accueil',
            },
        ]
    },
    {
        id       : 'affichage',
        title    : 'Gestion Affichage',
        translate: 'NAV.APPLICATIONS',
        type     : 'group',
        children : [
            {
                id       : 'produits',
                title    : 'Produits mis en avant',                
                type     : 'item',                
                url      : '/produits',               
            },{
                id       : 'event',
                title    : 'Evenement',                
                type     : 'item',                
                url      : '/event',               
            }
        ]
    },
    {
        id       : 'applications',
        title    : 'Utility',
        translate: 'NAV.APPLICATIONS',
        type     : 'group',
        children : [
            {
                id       : 'message',
                title    : 'Message',                
                type     : 'item',                
                url      : '/message',               
            },{
                id       : 'chat',
                title    : 'Push Notification',                
                type     : 'item',                
                url      : '/notification',               
            }
        ]
    }
    

];
