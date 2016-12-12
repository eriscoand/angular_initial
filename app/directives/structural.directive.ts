import { Directive, TemplateRef, ViewContainerRef, Input } from "@angular/core";

@Directive({
    selector: "[structural]"
})
export class StructuralDirective {

    constructor(
        private _templateRef: TemplateRef<any>,
        private _viewContainerRef: ViewContainerRef
    ) {}

    @Input("structural") set delay(delaytime : number){
        setTimeout(() => {
            this._viewContainerRef.createEmbeddedView(this._templateRef)
        }, delaytime);
    }



}