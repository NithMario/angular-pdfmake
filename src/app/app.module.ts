import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// import { PdfmakeModule } from 'ng-pdf-make';
import {PdfmakeService} from 'ng-pdf-make/pdfmake/pdfmake.service';


import { AppComponent } from './app.component';

@NgModule({
  imports: [
    BrowserModule,
    
  ],
  declarations: [
    AppComponent
  ],
 
  providers: [PdfmakeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
