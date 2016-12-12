import { Component, Input, Output, EventEmitter, OnInit } from "@angular/core";

import { Example } from "../classes/examples";
import { ExamplesService } from '../examples.service';
import { ActivatedRoute } from '@angular/router';

@Component({
	templateUrl: "./app/list-example/list-example.component.html",
	styleUrls: ["./app/list-example/list-example.component.css"]
})

export class ListExampleComponent implements OnInit{

	exampleList: Example[];
	example : Example;
	orderedSense: string = "asc";

	constructor(private _examplesService: ExamplesService,
				private _route: ActivatedRoute){};

	ngOnInit(): void{
		this._route.data.forEach((data: {examples: Example[] }) => {
			this.exampleList = data.examples;
		});
	}

	@Output() emitSelected: EventEmitter<Example> = new EventEmitter();

	selected(example: Example): void{
		this.example = example;
	}

	emitDelete(exampleId:Number): void{
		this._examplesService
			.popExample(exampleId)
			.subscribe((example: Example) => {
				//NOT CALLING SERVER AGAIN!
				this.exampleList = this.exampleList.filter((c: Example) => c.id !== exampleId);
				this.example = null;
			});
	}

	changeOrder(): void{
		this.orderedSense =
		this.orderedSense === "asc"
			? "desc"
			: "asc";
	}


}