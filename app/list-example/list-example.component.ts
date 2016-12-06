import { Component, OnInit } from "@angular/core";

@Component({
	selector: "list-example",
	templateUrl: "./app/list-example/list-example.component.html"
})

export class ListExampleComponent implements OnInit{

	exampleList: string[];

	ngOnInit(): void{
		this.exampleList = [
			"Teddy Riner",
			"Uini Antonio"
		];
	}
}