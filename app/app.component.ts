import { Component, OnInit } from '@angular/core';

import { Example } from "./classes/examples";
import { ExamplesService } from './examples.service';

@Component({
  selector: 'list',
  templateUrl: "./app/app.component.html",
  styles: [  ]
})

export class AppComponent implements OnInit { 
	name = 'Application Name'; 

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

	emitSave(example:Example): void{
		console.log(example);
		this._examplesService
			.pushExample(example)
			.subscribe((example: Example) => this._refresh());
	}

	emitSelected(example:Example): void{
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