import {Directive, OnDestroy, TemplateRef} from '@angular/core';
import {LayoutComponent} from '../layout/layout.component';
import {PanelContext} from '../types/panel-context';

@Directive({selector: '[rgCenter]'})
export class CenterDirective implements OnDestroy {
    public constructor(
        private readonly _layout: LayoutComponent,
        templateRef: TemplateRef<PanelContext>
    ) {
        this._layout.setCenter(templateRef);
    }

    public ngOnDestroy(): void {
        this._layout.setCenter(null);
    }
}
