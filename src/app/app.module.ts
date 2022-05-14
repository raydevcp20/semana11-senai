import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NgclassAndNgstyleComponent } from './ngclass-and-ngstyle/ngclass-and-ngstyle.component';
import { NgifAndNgforComponent } from './ngif-and-ngfor/ngif-and-ngfor.component';
import { NgmodelComponent } from './ngmodel/ngmodel.component';
import { NgswitchComponent } from './ngswitch/ngswitch.component';

@NgModule({
  declarations: [
    AppComponent,
    NgclassAndNgstyleComponent,
    NgifAndNgforComponent,
    NgmodelComponent,
    NgswitchComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
