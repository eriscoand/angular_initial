import { Component } from "@angular/core";

@Component({
	selector: "binding",
	templateUrl: "./app/binding/binding.component.html",
	styles: [`
		.message{
			background-color: pink;
			color: white;
		}
	`]
})

export class BindingComponent {

	message = "Hello world";

	getColumns(): string{
		return "50";
	}

	getRows(): string{
		return "10";
	}

	truecss: boolean = true;
	falsecss: boolean = false;

	getColor(): string{
		return "blue";
	}

	showMessage(): void{
		alert(this.message)
	}

}