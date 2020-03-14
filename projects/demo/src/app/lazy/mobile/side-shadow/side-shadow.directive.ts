import {Directive, Input} from '@angular/core';

@Directive({
    selector: '[rgSideShadow]',
    host: {
        '[class.rg-shadow-panel]': 'true',
        '[class.rg-shadow-enable]': 'shadow',
    }
})
export class SideShadowDirective {
    @Input('rgSideShadow')
    public shadow: boolean;
}
