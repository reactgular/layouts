import {Directive, Input} from '@angular/core';
import {DEFAULT_PANEL_ORDER} from '../types/panel-config';
import {PanelChangeDirective} from './panel-change.directive';
import {PanelDirective} from './panel.directive';

@Directive({selector: '[rgPanelOrder]'})
export class PanelOrderDirective extends PanelChangeDirective {
    public constructor(layoutPanel: PanelDirective) {
        super(layoutPanel);
    }

    @Input('rgPanelOrder')
    public set order(order: number) {
        this.patch(panel => ({order: this.numberElse(order, DEFAULT_PANEL_ORDER[panel.dock])}));
    }
}
