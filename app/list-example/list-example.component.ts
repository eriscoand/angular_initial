import { Component, Input, Output, EventEmitter } from "@angular/core";

import { Example } from "../classes/examples";

@Component({
	selector: "list-example",
	templateUrl: "./app/list-example/list-example.component.html",
	styleUrls: ["./app/list-example/list-example.component.css"]
})

export class ListExampleComponent{

	@Input() exampleList: Example[];

	@Output() emitSelected: EventEmitter<Example> = new EventEmitter();

	selected(example: Example): void{
		this.emitSelected.emit(example);
	}

}