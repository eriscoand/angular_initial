import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: "./app/app.component.html",
  styles: [
  	"h1 {color: red;}"
  ]
})

export class AppComponent implements OnInit { 
	name = 'Application Name'; 
	url = 'http://www.google.com';

	exampleList: string[];

	ngOnInit(): void{
		this.exampleList = [
			"Teddy Riner",
			"Uini Antonio",
			"Monkey D. Luffy",
			"Roronoa Zoro",
			"Anakin Skywalker",
			"Luke Skywalker",
			"Leia Skywalker"
		];
	}

	emitDelete(example:string): void{
		this.exampleList = this.exampleList.filter((c: string) => c !== example);
	}

}