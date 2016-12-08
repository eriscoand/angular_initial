import { Component, OnInit } from '@angular/core';

import { ExamplesService, Example } from './examples.service';

@Component({
  selector: 'list',
  templateUrl: "./app/app.component.html",
  styles: [  ]
})

export class AppComponent implements OnInit { 
	name = 'Application Name'; 

	exampleList: Example[];

	constructor(private _examplesService: ExamplesService){};

	private _refresh(): void{
		this._examplesService.getExamples()
							 .subscribe((exampleList: Example[]) => this.exampleList = exampleList);
	}

	ngOnInit(): void{
		this._refresh();
	}

	emitSave(exampleName:string): void{

        let example: Example = new Example();
        example.name = exampleName;

		this._examplesService
			.pushExample(example)
			.subscribe((example: Example) => this._refresh());

	}

	emitDelete(exampleId:Number): void{
		this._examplesService
			.popExample(exampleId)
			.subscribe((example: Example) => this._refresh());
		this._refresh();
	}

}