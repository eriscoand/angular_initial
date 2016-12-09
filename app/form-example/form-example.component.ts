import { Component } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { Router } from "@angular/router";

import { Example } from "../classes/examples";
import { ExamplesService } from '../examples.service';

@Component({
    templateUrl: "./app/form-example/form-example.component.html",
    styleUrls: [ "./app/form-example/form-example.component.css"]
})

export class FormExampleComponent {

    constructor(private _router: Router,
                private _examplesService: ExamplesService){};

    save(form: FormGroup): void{
		this._examplesService
			.pushExample(form.value as Example)
			.subscribe((example: Example) => {
                this._router.navigate(["/list"])
			});
    }

}