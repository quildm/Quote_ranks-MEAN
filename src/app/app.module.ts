import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms'; // <-- Import FormsModule
import { HttpModule } from '@angular/http';
import { QuotesComponent } from './quotes/quotes.component';


@NgModule({
  declarations: [
    AppComponent,
    QuotesComponent,
  
  ],
  imports: [
    BrowserModule,
    FormsModule, // <-- Include module in our AppModules
		HttpModule // <-- Include module in our AppModules
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
