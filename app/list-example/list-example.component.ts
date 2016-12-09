import { Component, Input, Output, EventEmitter, OnInit } from "@angular/core";

import { Example } from "../classes/examples";
import { ExamplesService } from '../examples.service';

@Component({
	templateUrl: "./app/list-example/list-example.component.html",
	styleUrls: ["./app/list-example/list-example.component.css"]
})

export class ListExampleComponent implements OnInit{

	exampleList: Example[];
	example : Example;

	constructor(private _examplesService: ExamplesService){};

	private _refresh(): void{
		this._examplesService.getExamples()
							 .subscribe((exampleList: Example[]) => this.exampleList = exampleList);
	}

	ngOnInit(): void{
		this._refresh();
	}

	@Output() emitSelected: EventEmitter<Example> = new EventEmitter();

	selected(example: Example): void{
		this.example = example;
	}

	emitDelete(exampleId:Number): void{
		this._examplesService
			.popExample(exampleId)
			.subscribe((example: Example) => {
				this.example = null;
				this._refresh();
			});
	}

}