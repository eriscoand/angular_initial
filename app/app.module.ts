import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';

@NgModule({
	//Dependency modules
  	imports:      [ 
  		BrowserModule
  	],
  	
  	//Components, pipes, directives
  	declarations: [ 
  		AppComponent
  	],
  	
  	//Services
  	providers: [

  	],

  	//Root component
  	bootstrap:    [ 
  		AppComponent
  	]

})
export class AppModule { }