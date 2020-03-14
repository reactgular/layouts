import {Directive, Input} from '@angular/core';
import {PanelChangeDirective} from './panel-change.directive';
import {PanelDirective} from './panel.directive';

@Directive({selector: '[rgPanelSize]'})
export class PanelSizeDirective extends PanelChangeDirective {
    public constructor(layoutPanel: PanelDirective) {
        super(layoutPanel);
    }

    @Input('rgPanelSize')
    public set size(size: number) {
        this.patch(() => ({size: this.numberElse(size, 0)}));
    }
}
