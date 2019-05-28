import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { ModalModule } from 'ngx-bootstrap/modal';
import { PessoasComponent } from './pessoas/pessoas.component';
import { PessoaViewComponent } from './pessoa-view/pessoa-view.component';
import { PessoaNewComponent } from './pessoa-new/pessoa-new.component';
import { ApiService } from './api.service';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { AngularValidateBrLibModule } from 'angular-validate-br';

@NgModule({
  declarations: [
    AppComponent,
    PessoasComponent,
    PessoaViewComponent,
    PessoaNewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TooltipModule.forRoot(),
    ModalModule.forRoot(),
    HttpClientModule,
    AngularValidateBrLibModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
