import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
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
//import { MessageComponent } from './main/message/message.component';
//import { NotificationComponent } from './main/notification/notification.component';
//import { EventComponent } from './main/event/event.component';
//import { ProduitsComponent } from './main/produits/produits.component';

import { UtilisateurComponent } from './main/utilisateur/utilisateur.component';
import { UtilisateurModule } from './main/utilisateur/utilisateur.module';
import { EmployerComponent } from './main/employer/employer.component';
import { EmployerModule } from './main/employer/employer.module';
import { AnalyticsDashboardModule } from './main/dashboards/analytics/analytics.module';
import { AdminComponent } from './main/admin/admin.component';
import { AdminModule } from './main/admin/admin.module';
import { LoginComponent } from './main/login/login.component';
import { LoginModule } from './main/login/login.module';
import { AccueilComponent } from './main/accueil/accueil.component';
import { AccueilModule } from './main/accueil/accueil.module';


const appRoutes: Routes = [
    {
        path      : ' **',
        redirectTo: 'analytique'
    },
    
];

@NgModule({
    declarations: [
        AppComponent,
        //AccueilComponent,
       // LoginComponent
    ],
    imports     : [
        BrowserModule,
        BrowserAnimationsModule,
        HttpClientModule,
        RouterModule.forRoot(appRoutes),

        TranslateModule.forRoot(),

        // Material moment date module
        MatMomentDateModule,

        // Material
        MatButtonModule,
        MatIconModule,

        // Fuse modules
        FuseModule.forRoot(fuseConfig),
        FuseProgressBarModule,
        FuseSharedModule,
        FuseSidebarModule,
        FuseThemeOptionsModule,

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
        AccueilModule
    ],
    bootstrap   : [
        AppComponent
    ]
})
export class AppModule
{
}
