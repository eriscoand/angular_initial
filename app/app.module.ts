import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import { ListExampleComponent }  from './list-example/list-example.component';

@NgModule({
	//Dependency modules
  	imports: [ 
  		BrowserModule
  	],
  	
  	//Components, pipes, directives
  	declarations: [ 
  		AppComponent,
      ListExampleComponent
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