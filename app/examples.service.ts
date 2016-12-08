import { Injectable } from "@angular/core";
import { Http } from "@angular/http";
import { Observable } from "rxjs/Observable";
import "rxjs/add/operator/map";

import { Example } from "./classes/examples";

@Injectable()
export class ExamplesService {

    private _url: string = "http://localhost:3005/examples"; 

    constructor(private _httpService: Http) {}
        
    getExamples(): Observable<Example[]> {        
        return this._httpService
                .get(this._url)
                .map((data) => {
                    return data.json() as Example[];
                });
    }

    pushExample(example :Example): Observable<Example> {
        return this._httpService
                .post(this._url, example)
                .map((data) => {
                    return data.json() as Example;
                });
    }

    popExample(id :Number): Observable<any>{
        return this._httpService
                .delete(`${this._url}/${id}`);
    }

}