import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AppLayoutModule } from './layout/app.layout.module';
import { LoginComponent } from './public/login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { LoginModule } from './public/login/login.module';
import { MessagesModule } from 'primeng/messages';
import { MessageModule } from 'primeng/message';
import { ToastModule } from 'primeng/toast';
import { PasswordModule } from 'primeng/password';
import { InputTextModule } from 'primeng/inputtext';
@NgModule({
    declarations: [
        AppComponent,LoginComponent,
    ],
    imports: [
        
        BrowserModule,
        AppRoutingModule,
        AppLayoutModule,
        HttpClientModule,
        FormsModule,
        LoginModule,
        MessagesModule,
        MessageModule,
        ToastModule,
        PasswordModule,
        InputTextModule
    ],
    providers: [
        { provide: LocationStrategy, useClass: HashLocationStrategy },
      
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
