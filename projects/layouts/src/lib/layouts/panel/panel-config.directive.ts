import {Directive, Input} from '@angular/core';
import {DEFAULT_PANEL_ORDER, PanelConfig} from '../types/panel-config';
import {PanelChangeDirective} from './panel-change.directive';
import {PanelDirective} from './panel.directive';

@Directive({selector: '[rgPanelConfig]'})
export class PanelConfigDirective extends PanelChangeDirective {
    public constructor(layoutPanel: PanelDirective) {
        super(layoutPanel);
    }

    @Input('rgPanelConfig')
    public set config({order, overlay, size, pull, push}: PanelConfig) {
        this.patch(panel => {
            return {
                order: this.numberElse(order, DEFAULT_PANEL_ORDER[panel.dock]),
                overlay: Boolean(overlay),
                size,
                pull,
                push
            };
        });
    }
}
