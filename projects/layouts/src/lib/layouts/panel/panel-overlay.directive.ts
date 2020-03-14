import {Directive, Input} from '@angular/core';
import {PanelChangeDirective} from './panel-change.directive';
import {PanelDirective} from './panel.directive';

@Directive({selector: '[rgPanelOverlay]'})
export class PanelOverlayDirective extends PanelChangeDirective {
    public constructor(layoutPanel: PanelDirective) {
        super(layoutPanel);
    }

    @Input('rgPanelOverlay')
    public set overlay(overlay: boolean) {
        this.patch(() => ({overlay: Boolean(overlay)}));
    }
}
