import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent }  from './app.component';
import { ListExampleComponent }  from './list-example/list-example.component';
import { BindingComponent } from './binding/binding.component';

@NgModule({
	//Dependency modules
  	imports: [ 
  		BrowserModule,
      FormsModule
  	],
  	
  	//Components, pipes, directives
  	declarations: [ 
  		AppComponent,
      ListExampleComponent,
      BindingComponent
  	],
  	
  	//Services
  	providers: [

  	],

  	//Root component
  	bootstrap: [ 

      //Switch beetween root components to see examples

  		AppComponent
  	  //BindingComponent
    ]

})
export class AppModule { }