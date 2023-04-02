import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
// import { NotfoundComponent } from './demo/components/notfound/notfound.component';
import { AppLayoutComponent } from "./layout/app.layout.component";
import { LoginComponent } from './public/login/login.component';
import { UygulamalarComponent } from './secure/sayfalar/uygulamalar/uygulamalar.component';

@NgModule({
    imports: [
        RouterModule.forRoot([
            {
                path: '', component: AppLayoutComponent,               
                children: [
                    { path: 'kullaniciyonetimi', loadChildren: () => import('./secure/sayfalar/kullaniciyonetimi/kullaniciyonetimi.module').then(m => m.KullaniciYonetimiModule) }
                ]
            },
            { path: 'uygulamalar', component: UygulamalarComponent},
           { path: 'login', component: LoginComponent},
            { path: '**', redirectTo: '/notfound' },
        ], { scrollPositionRestoration: 'enabled', anchorScrolling: 'enabled', onSameUrlNavigation: 'reload' })
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
