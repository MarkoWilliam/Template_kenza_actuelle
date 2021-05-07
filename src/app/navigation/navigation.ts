import { FuseNavigation } from '@fuse/types'; 
import { AuthGuard } from 'app/main/service/auth/auth.guard';
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
                title    : 'Gestion Utilisateurs',
                type     : 'item',
                icon     : 'account_circle', 
                url      : '/admin',
            },
        ]
    },
    {
        id      : 'miseProduit',
        title   : 'Produits mis en avant',
        type    : 'collapsable',
        icon: 'view_carousel',
        translate: 'NAV.APPLICATIONS',
        children: [
            {
                id   : 'produitAll',
                title: 'Produits nouveautés',
                type : 'item',
                icon : 'playlist_add_check',
                url  : '/produitAll'
            },
            {
                id   : 'produitCurvy',
                title: 'Produits grande Taille',
                type : 'item',
                icon : 'playlist_add_check',
                url  : '/produitCurvy'
            },
            {
                id   : 'produitMf',
                title: 'Produit mere et fille',
                type : 'item',
                icon : 'playlist_add_check',
                url  : '/produitMf'
            },
            {
                id   : 'produitPromo',
                title: 'Produit promotion',
                type : 'item',
                icon : 'playlist_add_check',
                url  : '/produitPromos'
            },
            {
                id   : 'produitFillette',
                title: 'Produit fillette',
                type : 'item',
                icon : 'playlist_add_check',
                url  : '/produitFillette'
            },
            {
                id   : 'produitBb',
                title: 'Produit bebe',
                type : 'item',
                icon : 'playlist_add_check',
                url  : '/produitBb'
            }
        ]
    },
    {
        id       : 'page',
        title    : 'Gestion Contenu Page',
        translate: 'NAV.APPLICATIONS',
        type     : 'group',
        children : [
            {
                id       : 'banniere',
                title    : 'Banniere ou Image',                
                type     : 'item',    
                icon     : 'image',            
                url      : '/banniere',               
            },
            {
                id       : 'event',
                title    : 'Évènement',                
                type     : 'item',        
                icon     : 'event',          
                url      : '/event',               
            },           
        ]
    },
    {
        id      : 'miseProduit',
        title   : 'Offres',
        type    : 'collapsable',
        translate: 'NAV.APPLICATIONS',
        icon    : 'local_offer',
        children: [
            {
                id   : 'offres',
                title: 'Nos offres',
                type : 'item',
                icon: 'card_giftcard',
                url  : '/offres'
            },
            {
                id   : 'nosService',
                title: 'Nos service',
                type : 'item',
                icon : 'build',
                url  : '/nosService'
            },
            {
                id   : 'carte_metisse',
                title: 'Carte Métisse',
                type : 'item',
                icon : 'card_membership',
                url  : '/carte_metisse'
            },
        ]
    }, 
    {
        id       : 'chat',
        title    : 'Push Notification',                
        type     : 'item',   
        icon     : 'notifications',               
        url      : '/notification',            
    },
    {
        id       : 'page',
        title    : 'Gestion de texte',
        translate: 'NAV.APPLICATIONS',
        type     : 'group',
        children : [     
            // {
                
                
            //     id      : 'event',
            //     title   : 'Menu Évènement',
            //     type    : 'collapsable',
            //     translate: 'NAV.APPLICATIONS',
            //     icon    : 'text_fields',
            //     children: [
            //         {
            //             id   : 'button_text',
            //             title: 'Button',
            //             type : 'item',
            //             icon: 'radio_button_checked',
            //             url  : '/textButton'
            //         },
            //         {
            //             id   : 'text_button',
            //             title: 'Texte button ',
            //             type : 'item',
            //             icon : 'text_format',
            //             url  : '/textButton'
            //         },
            //     ],
                
            // },  
            {
                id      : 'event',
                title   : 'Menu Évènement',
                type    : 'collapsable',
                translate: 'NAV.APPLICATIONS',
                icon    : 'text_fields',
                children: [
                    {
                        id   : 'bouton',
                        title: 'Bouton',
                        type : 'item',
                        icon: 'radio_button_checked',
                        url  : '/text'
                    },
                    {
                        id   : 'texte',
                        title: 'Texte',
                        type : 'item',
                        icon : 'short_text',
                        url  : '/titre'
                    },
                ]
            }, 
            {
                id       : 'chat',
                title    : 'Titre & Label',                
                type     : 'item',   
                icon     : 'translate',               
                url      : '/text_apk',            
            },
        ]
    },
    
    {
        id       : 'deconnecter',
        title    : '',
        translate: 'NAV.APPLICATIONS',
        type     : 'group',
        children : [
            {
                id       : 'deconnecter',
                title    : 'Déconnecter',                
                type     : 'item',  
                icon     : 'power_settings_new',              
                url      : '/login',               
            },
        ]
    },
    
];
