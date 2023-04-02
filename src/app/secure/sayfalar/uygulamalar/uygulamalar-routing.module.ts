import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { UygulamalarComponent } from './uygulamalar.component';

@NgModule({
    imports: [RouterModule.forChild([
        { path: '', component: UygulamalarComponent }
    ])],
    exports: [RouterModule]
})
export class UygulamalarRoutingModule { }
