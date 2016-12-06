import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: "./app/app.component.html",
  styles: [
  	"h1 {color: red;}"
  ]
})

export class AppComponent  { 
	name = 'Application Name'; 
	url = 'http://www.google.com';
}