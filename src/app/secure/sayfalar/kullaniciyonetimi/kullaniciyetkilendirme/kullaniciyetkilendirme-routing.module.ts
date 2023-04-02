import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { KullaniciYetkilendirmeComponent } from './kullaniciyetkilendirme.component';

@NgModule({
	imports: [RouterModule.forChild([
		{ path: '', component: KullaniciYetkilendirmeComponent }
	])],
	exports: [RouterModule]
})
export class KullaniciYetkilendirmeRoutingModule { }
