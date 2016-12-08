import { Component, EventEmitter, Output } from "@angular/core";
import { FormGroup } from "@angular/forms";

import { Example } from "../classes/examples";

@Component({
    selector: "form-example",
    templateUrl: "./app/form-example/form-example.component.html",
    styleUrls: [ "./app/form-example/form-example.component.css"]
})

export class FormExampleComponent {

    @Output() emitSave: EventEmitter<Example> = new EventEmitter();

    save(form: FormGroup): void{
        this.emitSave.emit(form.value as Example);
    }

}