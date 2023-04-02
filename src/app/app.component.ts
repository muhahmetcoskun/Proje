import { Component, OnInit } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';
import {LoginService} from "./public/login/services/login.service";
import {Router} from "@angular/router";
@Component({
    selector: 'app-root',
    templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {

    constructor(private primengConfig: PrimeNGConfig,private loginService: LoginService,private router: Router) { }

    ngOnInit() {
        this.primengConfig.ripple = true;
        

          const storageUserAsStr = localStorage.getItem('currentUser');
          //todoAC: burayı aç login bağlantısı yapıldığında
        //   if (!storageUserAsStr) {
        //     this.router.navigate(['/login']);
        //   }
    }
}
