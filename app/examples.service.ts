import { Injectable } from "@angular/core";
import { Http } from "@angular/http";
import { Observable } from "rxjs/Observable";
import "rxjs/add/operator/map";

export class Example{
    id: number;
    name: string;
}

@Injectable()
export class ExamplesService {

    constructor(private _httpService: Http) {}
        
    getExamples(): Observable<Example[]> {        
        return this._httpService
                .get("http://localhost:3005/examples")
                .map((data) => {
                    return data.json() as Example[];
                });
    }

    pushExample(example :Example): Observable<Example> {
        return this._httpService
                .post("http://localhost:3005/examples", example)
                .map((data) => {
                    return data.json() as Example;
                });
    }

    popExample(id :Number): Observable<any>{
        return this._httpService
                .delete(`http://localhost:3005/examples/${id}`);
    }

}