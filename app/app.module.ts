import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from "./app-routing.module";

import { AppComponent }  from './app.component';
import { ListExampleComponent }  from './list-example/list-example.component';
import { FormExampleComponent }  from './form-example/form-example.component';
import { DetailExampleComponent }  from './detail-example/detail-example.component';
import { NavigationComponent }  from './navigation/navigation.component';

import { BindingComponent } from './binding/binding.component';

import { ExamplesService } from './examples.service';

@NgModule({
	//Dependency modules
  	imports: [ 
  		BrowserModule,
      FormsModule,
			HttpModule,
			AppRoutingModule
  	],
  	
  	//Components, pipes, directives
  	declarations: [ 
  		AppComponent,
			NavigationComponent,
      ListExampleComponent,
			FormExampleComponent,
			DetailExampleComponent,
      BindingComponent
  	],
  	
  	//Services
  	providers: [
			ExamplesService
  	],

  	//Root component
  	bootstrap: [ 

      //Switch beetween root components to see examples

  		AppComponent
  	  //BindingComponent
    ]

})
export class AppModule { }