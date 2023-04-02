import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { UygulamaTanimlamaComponent } from './uygulamatanimlama.component';

@NgModule({
	imports: [RouterModule.forChild([
		{ path: '', component: UygulamaTanimlamaComponent }
	])],
	exports: [RouterModule]
})
export class UygulamaTanimlamaRoutingModule { }
