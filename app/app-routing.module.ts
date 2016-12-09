import { RouterModule, Routes } from "@angular/router";
import { NgModule } from "@angular/core";

import { ListExampleComponent } from "./list-example/list-example.component";
import { FormExampleComponent } from "./form-example/form-example.component";

const routes: Routes = [
    {
        path: "list",
        component: ListExampleComponent
    },
    {
        path: "form",
        component: FormExampleComponent
    },
    {
        path: "**",
        redirectTo: "list"
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}