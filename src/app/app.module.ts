import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { Ng2AutoCompleteModule } from 'ng2-auto-complete';

import { AppComponent } from './app.component';
import { ParadasInputComponent } from './paradas-input/paradas-input.component';

@NgModule({
  declarations: [
    AppComponent,
    ParadasInputComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    Ng2AutoCompleteModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
