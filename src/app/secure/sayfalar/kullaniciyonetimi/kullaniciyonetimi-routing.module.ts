import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
    imports: [RouterModule.forChild([
        { path: 'uygulamatanimlama', loadChildren: () => import('./uygulamatanimlama/uygulamatanimlama.module').then(m => m.UygulamaTanimlamaModule) },

        { path: 'kullaniciyetkilendirme', loadChildren: () => import('./kullaniciyetkilendirme/kullaniciyetkilendirme.module').then(m => m.KullaniciYetkilendirmeModule) },
        { path: '**', redirectTo: '/notfound' }
    ])],
    exports: [RouterModule]
})
export class KullaniciYonetimiRoutingModule { }
