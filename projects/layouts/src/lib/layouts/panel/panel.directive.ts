import {Directive, Input, OnDestroy, TemplateRef} from '@angular/core';
import {InternalPanel} from '../../internal/types/internal-panels';
import {LayoutComponent} from '../layout/layout.component';
import {LayoutDock} from '../types/layout-dock';
import {DEFAULT_PANEL_ORDER} from '../types/panel-config';
import {PanelContext} from '../types/panel-context';

@Directive({selector: '[rgPanel]'})
export class PanelDirective implements OnDestroy {
    private _id: number = null;

    public constructor(
        private _templateRef: TemplateRef<PanelContext>,
        private readonly _layout: LayoutComponent
    ) {
    }

    @Input('rgPanel')
    public set dock(dock: LayoutDock) {
        if (this._id === null) {
            const config = {size: 0, order: DEFAULT_PANEL_ORDER[dock]};
            this._id = this._layout.panelAdd(
                this.dock,
                this._templateRef,
                config
            );
        }
        this.patch({dock});
    }

    public getPanel(): InternalPanel {
        if (this._id === null) {
            throw new Error('Panel not docked');
        }
        return this._layout.panel(this._id);
    }

    public ngOnDestroy(): void {
        if (this._id !== null) {
            this._layout.panelRemove(this._id);
        }
    }

    public patch(panel: Partial<InternalPanel>) {
        if (this._id === null) {
            throw new Error('Panel not docked');
        }
        this._layout.panelUpdate(this._id, panel);
    }
}
