import { Component, EventEmitter, Output } from "@angular/core";

@Component({
    selector: "form-example",
    templateUrl: "./app/form-example/form-example.component.html",
    styleUrls: []
})

export class FormExampleComponent {

    text: string;

    @Output() emitSave: EventEmitter<string> = new EventEmitter();

    save(): void{
        this.emitSave.emit(this.text);
    }

}