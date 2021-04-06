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
            
           /*  {
                id       : 'utilisateur',
                title    : 'Gestion des clients',
                type     : 'item',
                icon     : 'people',
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
                id       : 'principale',
                title    : 'Principale',
                type     : 'item',
                icon     : 'account_circle',
                url      : '/accueil',
            }, */
        ]
    },
    {
        id      : 'miseProduit',
        title   : 'Produits mis en avant',
        type    : 'collapsable',
        icon: 'view_carousel',
        translate: 'NAV.APPLICATIONS',
        // icon    : 'import_contacts',
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
    /* {
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
            }
        ]
    }, 
    {
        id       : 'applications',
        title    : 'Utility',
        translate: 'NAV.APPLICATIONS',
        type     : 'group',
        children : [
           /*  {
                id       : 'message',
                title    : 'Message',                
                type     : 'item',                
                url      : '/message',               
            }
        ]
    },
   /*  {
        id       : 'parametrages',
        title    : 'Parametrage',
        translate: 'NAV.APPLICATIONS',
        type     : 'group',
        children : [
            {
                id       : 'banniere',
                title    : 'banniere',                
                type     : 'item',                
                url      : '/banniere',               
            }
        ]
    }, */
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
                title    : 'Evenement',                
                type     : 'item',        
                icon     : 'event',          
                url      : '/event',               
            },         
            {
                id       : 'chat',
                title    : 'Push Notification',                
                type     : 'item',   
                icon     : 'notifications',               
                url      : '/notification',            
            }, 
            /*{
                id       : 'gpAccueil',
                title    : 'Accueil',                
                type     : 'item',                
                url      : '/gp-accueil',               
            },{
                id       : 'carteCadeau',
                title    : 'Carte cadeau',                
                type     : 'item',                
                url      : '/carte-cadeau',               
            },{
                id       : 'event',
                title    : 'Evenement',                
                type     : 'item',                
                url      : '/event',               
            }, {
                id       : 'magasin',
                title    : 'Magasins',                
                type     : 'item',                
                url      : '/magasin',               
            },{
                id       : 'offres',
                title    : 'Offres',                
                type     : 'item',                
                url      : '/offres',               
            }*/
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
        ]
    },
    /*{
        id       : 'Parametrage',
        title    : 'Parametrage',
        translate: 'NAV.APPLICATIONS',
        type     : 'group',
        children : [
            {
                id       : 'parampage',
                title    : 'Page APK Client',                
                type     : 'item',                
                url      : '/parampage',               
            },{
                id       : 'Type Utilisateur',
                title    : 'Type Utilisateur',                
                type     : 'item',                
                url      : '/message',               
            }
        ]
    },*/
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
