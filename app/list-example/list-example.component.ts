import { Component } from "@angular/core";

@Component({
	selector: "list-example",
	templateUrl: "./app/list-example/list-example.component.html"
})

export class ListExampleComponent {
	exampleList: string[] = [
		"Teddy Riner",
		"Uini Antonio"
	];
}