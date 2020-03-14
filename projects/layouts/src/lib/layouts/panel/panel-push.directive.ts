import {Directive, Input} from '@angular/core';
import {PanelChangeDirective} from './panel-change.directive';
import {PanelDirective} from './panel.directive';

@Directive({selector: '[rgPanelPush]'})
export class PanelPushDirective extends PanelChangeDirective {
    public constructor(layoutPanel: PanelDirective) {
        super(layoutPanel);
    }

    @Input('rgPanelPush')
    public set push(push: number) {
        this.patch(() => ({push}));
    }
}
