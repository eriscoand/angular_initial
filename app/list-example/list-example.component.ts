import { Component, Input, Output, EventEmitter } from "@angular/core";

import { Example } from "../examples.service";

@Component({
	selector: "list-example",
	templateUrl: "./app/list-example/list-example.component.html",
	styleUrls: ["./app/list-example/list-example.component.css"]
})

export class ListExampleComponent{

	@Input() exampleList: Example[];

	@Output() emitDelete: EventEmitter<string> = new EventEmitter();

	delete(example:string): void{
		this.emitDelete.emit(example)
	}

}