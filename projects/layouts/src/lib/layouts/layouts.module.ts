import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {InternalModule} from '../internal/internal.module';
import {CenterDirective} from './center/center.directive';
import {LayoutComponent} from './layout/layout.component';
import {PanelConfigDirective} from './panel/panel-config.directive';
import {PanelOrderDirective} from './panel/panel-order.directive';
import {PanelOverlayDirective} from './panel/panel-overlay.directive';
import {PanelPullDirective} from './panel/panel-pull.directive';
import {PanelPushDirective} from './panel/panel-push.directive';
import {PanelSizeDirective} from './panel/panel-size.directive';
import {PanelDirective} from './panel/panel.directive';

@NgModule({
    imports: [
        CommonModule,
        InternalModule
    ],
    declarations: [
        CenterDirective,
        LayoutComponent,
        PanelConfigDirective,
        PanelDirective,
        PanelOrderDirective,
        PanelOverlayDirective,
        PanelPullDirective,
        PanelPushDirective,
        PanelSizeDirective
    ],
    exports: [
        CenterDirective,
        LayoutComponent,
        PanelConfigDirective,
        PanelDirective,
        PanelOrderDirective,
        PanelOverlayDirective,
        PanelPullDirective,
        PanelPushDirective,
        PanelSizeDirective
    ]
})
export class LayoutsModule {
}
