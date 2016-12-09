import { Component, Input, EventEmitter, Output } from "@angular/core";

import { Example } from "../classes/examples";

@Component({
    selector: "detail-example",
    templateUrl: "./app/detail-example/detail-example.component.html"
})

export class DetailExampleComponent {

    @Input() example: Example;

	@Output() emitDelete: EventEmitter<number> = new EventEmitter();

	delete(exampleId:number): void{
		this.emitDelete.emit(exampleId)
	}

}