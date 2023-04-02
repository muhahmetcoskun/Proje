import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UygulamalarRoutingModule } from './uygulamalar-routing.module';
import { UygulamalarComponent } from './uygulamalar.component';

@NgModule({
    imports: [
        CommonModule,
        UygulamalarRoutingModule
    ],
    declarations: [UygulamalarComponent]
})
export class UygulamalarModule { }
