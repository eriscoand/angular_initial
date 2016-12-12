import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve } from "@angular/router";
import { Observable } from "rxjs/Observable";

import { Example } from "./classes/examples";
import { ExamplesService } from "./examples.service";

@Injectable()
export class ExampleResolve implements Resolve<Example[]> {

    constructor(private _examplesService: ExamplesService) {}

    resolve(route: ActivatedRouteSnapshot): Observable<Example[]> {
        return this._examplesService.getExamples();
    }

}