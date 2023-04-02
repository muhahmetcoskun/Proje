import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { LayoutService } from './service/app.layout.service';

@Component({
    selector: 'app-menu',
    templateUrl: './app.menu.component.html'
})
export class AppMenuComponent implements OnInit {

    model: any[] = [];

    constructor(public layoutService: LayoutService) { }

    ngOnInit() {
        this.model = [
            {
                
                items: [
                    { label: 'ANA SAYFA', icon: 'pi pi-fw pi-home', routerLink: ['/uygulamalar'] }
                ]
            },
           
            {
               
                items: [
                    {
                        label: 'Kullanıcı Yönetimi', icon: 'pi pi-fw pi-user',
                        items: [
                            
                                    { label: 'Uygulama Tanımlama', icon: 'pi pi-fw pi-bookmark',routerLink: ['/kullaniciyonetimi/uygulamatanimlama']  },
                                    { label: 'Rol Tanımlama', icon: 'pi pi-fw pi-bookmark' },
                                    { label: 'Aksiyon Tanımlama', icon: 'pi pi-fw pi-bookmark' },
                                    { label: 'Kullanıcı Yetkilendirme', icon: 'pi pi-fw pi-bookmark',routerLink: ['/kullaniciyonetimi/kullaniciyetkilendirme']  },
                            
                        ]
                    }
                  
                ]
            }
        
        ];
    }
}
