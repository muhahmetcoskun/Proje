import { Component, OnInit } from '@angular/core';
import {Kullanici} from "./models/kullanici.model";
import {LoginService} from "./services/login.service";
import {Router} from "@angular/router";
import { MessageService } from 'primeng/api';
@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styles: [`
        :host ::ng-deep .pi-eye,
        :host ::ng-deep .pi-eye-slash {
            transform:scale(1.6);
            margin-right: 1rem;
            color: var(--primary-color) !important;
        }
    `],
    providers: [MessageService]
})
export class LoginComponent  implements OnInit {

    kullanici: Kullanici = new Kullanici();
 
    errorMessage: string = "";
  
    constructor(private loginService: LoginService,private messageService: MessageService, private router: Router) { }
  
    ngOnInit(): void {
      if (this.loginService.currentUserValue?.id) {
        this.router.navigate(['/uygulamalar']);
        return;
      }
    }
  
    login() {
      
      // this.loginService.login(this.user).subscribe(data => {
         //this.router.navigate(['/uygulamalar']);
      // }, err => {
        //this.messageService.add({ key: 'tst', severity: 'error', summary: 'Hata Mesajı', detail: 'Kullanici Adı veya Şifre Hatalı.' });

      //   console.log(err);
      // })
    }
}
