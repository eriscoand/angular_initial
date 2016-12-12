import { Directive, ElementRef, Renderer, HostListener } from "@angular/core";

@Directive({
    selector: "[attribute]"
})
export class AttributeDirective {

    constructor( 
        private _elementRef: ElementRef,
        private _renderer: Renderer
    ) { }

    @HostListener("mouseenter") showBlink(){

        this._renderer.setElementStyle(
            this._elementRef.nativeElement,
            "background-color", "#f4f4f4"
        );

    }

    @HostListener("mouseleave") unShowBlink(){

        this._renderer.setElementStyle(
            this._elementRef.nativeElement,
            "background-color", "transparent"
        );

    }

}