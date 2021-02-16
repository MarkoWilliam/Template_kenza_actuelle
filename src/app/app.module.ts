import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HttpParams } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';
import { MatMomentDateModule } from '@angular/material-moment-adapter';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { TranslateModule } from '@ngx-translate/core';
import 'hammerjs';

import { FuseModule } from '@fuse/fuse.module';
import { FuseSharedModule } from '@fuse/shared.module';
import { FuseProgressBarModule, FuseSidebarModule, FuseThemeOptionsModule } from '@fuse/components';

import { fuseConfig } from 'app/fuse-config';

import { AppComponent } from 'app/app.component';
import { LayoutModule } from 'app/layout/layout.module';
import { SampleModule } from 'app/main/sample/sample.module';
import { ProduitsModule } from 'app/main/produits/produits.module';
import { EventModule } from 'app/main/event/event.module';

import { MessageModule } from 'app/main/message/message.module';
import { NotificationModule } from 'app/main/notification/notification.module';
import { MatCardModule, MatDialogModule, MatGridListModule, MatTableModule } from '@angular/material'  
import { UtilisateurModule } from './main/utilisateur/utilisateur.module';
import { EmployerModule } from './main/employer/employer.module';
import { AnalyticsDashboardModule } from './main/dashboards/analytics/analytics.module';
import { AdminModule } from './main/admin/admin.module';
import { LoginModule } from './main/login/login.module';
import { AccueilModule } from './main/accueil/accueil.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { GlobaleService } from './main/service/globale.service';
import { InscriptionModule } from './main/inscription/inscription.module';
import { ToastrModule } from 'ngx-toastr'; 
import { AuthGuard } from './main/service/auth/auth.guard';
import { AnalyticsDashboardComponent } from './main/dashboards/analytics/analytics.component';
import { AdminComponent } from './main/admin/admin.component';
import { MatSortModule } from '@angular/material/sort';
import { DialogExampleComponent } from './main/dialog-example/dialog-example.component';
import { DialogExampleModule } from './main/dialog-example/dialog-example.module';
import { BanniereModalComponent } from './main/modals/banniere-modal/banniere-modal.component';
import { FileUploadModule } from 'ng2-file-upload';

import { GpAccueilModule } from './main/gp-accueil/gp-accueil.module';
import { GpAccueilComponent } from './main/gp-accueil/gp-accueil.component';
import { NotificationComponent } from './main/notification/notification.component';
import { NotificationModalComponent } from './main/modals/notification-modal/notification-modal.component';
import { EventModalComponent } from './main/modals/event-modal/event-modal.component';
import { EventComponent } from './main/event/event.component';
import { CarteCadeauComponent } from './main/carte-cadeau/carte-cadeau.component';
import { CarteCadeauModule } from './main/carte-cadeau/carte-cadeau.module';
import { MagasinComponent } from './main/magasin/magasin.component';
import { OffresComponent } from './main/offres/offres.component';
import { MagasinModule } from './main/magasin/magasin.module';
import { OffresModule } from './main/offres/offres.module';
import { CartecardeauModalComponent } from './main/modals/cartecardeau-modal/cartecardeau-modal.component';
import { MagasinModalComponent } from './main/modals/magasin-modal/magasin-modal.component';
import { OffresModalComponent } from './main/modals/offres-modal/offres-modal.component';
import { NewUserModalComponent } from './main/modals/new-user-modal/new-user-modal.component';
import { ProduitAllModule } from './main/mide_en_avant/produit-all/produit-all.module';
import { ProduitBebeModule } from './main/mide_en_avant/produit-bebe/produit-bebe.module';
import { ProduitMfModule } from './main/mide_en_avant/produit-mf/produit-mf.module';
import { BanniereComponent } from './main/banniere/banniere.component';
import { BanniereModule } from './main/banniere/banniere.module';
import { ProfileComponent } from './main/modals/profile/profile.component'; 
import { NosServiceComponent } from './main/nos-service/nos-service.component';
import { NosServiceModalComponent } from './main/modals/nos-service-modal/nos-service-modal.component';
import { NosServiceModule } from './main/nos-service/nos-service.module';
import { NosServiceModalModule } from './main/modals/nos-service-modal/nos-service-modal.module';
import { ProduitPromoComponent } from './main/mide_en_avant/produit-promo/produit-promo.component';
import { ProduitCurvyComponent } from './main/mide_en_avant/produit-curvy/produit-curvy.component';
import { ProduitFilletteComponent } from './main/mide_en_avant/produit-fillette/produit-fillette.component';
import { ProduitCurvyModule } from './main/mide_en_avant/produit-curvy/produit-curvy.module';
import { ProduitPromoModule } from './main/mide_en_avant/produit-promo/produit-promo.module';
import { ProduitFilletteModule } from './main/mide_en_avant/produit-fillette/produit-fillette.module';

const appRoutes: Routes = [
    {
        path      : '**',
        redirectTo: 'login',
    },
    
];

@NgModule({
    declarations: [
        AppComponent,
        EventComponent,
        BanniereModalComponent,
        NotificationComponent,
        GpAccueilComponent,
        NotificationModalComponent,
        EventModalComponent,
        CarteCadeauComponent,
        MagasinComponent,
        OffresComponent,
        CartecardeauModalComponent,
        MagasinModalComponent,
        OffresModalComponent,
        AdminComponent,
        ProfileComponent,
        NewUserModalComponent,
        BanniereComponent,
        NosServiceComponent,
    ],
    //-----Dialog---------
    entryComponents: [DialogExampleComponent,NosServiceModalComponent],
    imports     : [
        BrowserModule,
        BrowserAnimationsModule,
        HttpClientModule,
        RouterModule.forRoot(appRoutes),
        // RouterModule.forRoot(appRoutes, { useHash: true }),
        ToastrModule.forRoot({
            timeOut: 1400,
            progressBar: true,
            progressAnimation: 'increasing',
            preventDuplicates: true
        }),
        TranslateModule.forRoot(),

        // Material moment date module
        MatMomentDateModule,
        // Material
        MatButtonModule,
        MatIconModule,
        MatTableModule,
        MatSortModule,
        // Fuse modules
        FuseModule.forRoot(fuseConfig),
        FuseProgressBarModule,
        FuseSharedModule,
        FuseSidebarModule,
        FuseThemeOptionsModule,
        FormsModule,
        ReactiveFormsModule,
        MatDialogModule,
        MatGridListModule,
        MatCardModule,
        
        // App modules
        LayoutModule,
        SampleModule,
        ProduitsModule,
        EventModule,
        MessageModule,
        NotificationModule,
        UtilisateurModule,
        EmployerModule,
        AnalyticsDashboardModule,
        AdminModule,
        LoginModule,
        AccueilModule,
        InscriptionModule,
        DialogExampleModule,
        FileUploadModule,
        GpAccueilModule,
        CarteCadeauModule,
        MagasinModule,
        OffresModule,
        ProduitAllModule,
        ProduitBebeModule,
        ProduitMfModule,
        BanniereModule,
        NosServiceModule,
        NosServiceModalModule,
        ProduitCurvyModule,
        ProduitPromoModule,
        ProduitFilletteModule
       
    ],
    bootstrap   : [
        AppComponent
    ],
    providers: [
        GlobaleService,
        AuthGuard
        //CryptHttpService
    ]
    
})
export class AppModule
{
}
