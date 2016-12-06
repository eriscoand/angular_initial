import { Component, Input, Output, EventEmitter } from "@angular/core";

@Component({
	selector: "list-example",
	templateUrl: "./app/list-example/list-example.component.html"
})

export class ListExampleComponent{

	@Input() exampleList: string[];

	@Output() emitDelete: EventEmitter<string> = new EventEmitter();

	delete(example:string): void{
		this.emitDelete.emit(example)
	}

}