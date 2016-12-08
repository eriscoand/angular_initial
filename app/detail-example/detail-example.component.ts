import { Component, Input, EventEmitter, Output } from "@angular/core";

import { Example } from "../classes/examples";
import { ExamplesService } from '../examples.service';

@Component({
    selector: "detail-example",
    templateUrl: "./app/detail-example/detail-example.component.html"
})

export class DetailExampleComponent {

    @Input() example: Example;

	constructor(private _examplesService: ExamplesService){};

	@Output() emitDelete: EventEmitter<number> = new EventEmitter();

	delete(exampleId:number): void{
		this.emitDelete.emit(exampleId)
	}

}