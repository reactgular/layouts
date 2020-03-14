import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {PanelOrderPipe} from './panel-order/panel-order.pipe';
import {PanelOverlayComponent} from './panel-overlay/panel-overlay.component';
import {PanelSplitComponent} from './panel-split/panel-split.component';
import {PanelValidPipe} from './panel-valid/panel-valid.pipe';

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [
        PanelOrderPipe,
        PanelOverlayComponent,
        PanelSplitComponent,
        PanelValidPipe
    ],
    exports: [
        PanelOrderPipe,
        PanelValidPipe,
        PanelSplitComponent
    ]
})
export class InternalModule {
}
