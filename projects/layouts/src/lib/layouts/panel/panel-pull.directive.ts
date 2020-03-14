import {Directive, Input} from '@angular/core';
import {PanelChangeDirective} from './panel-change.directive';
import {PanelDirective} from './panel.directive';

@Directive({selector: '[rgPanelPull]'})
export class PanelPullDirective extends PanelChangeDirective {
    public constructor(layoutPanel: PanelDirective) {
        super(layoutPanel);
    }

    @Input('rgPanelPull')
    public set pull(pull: number) {
        this.patch(() => ({pull}));
    }
}
