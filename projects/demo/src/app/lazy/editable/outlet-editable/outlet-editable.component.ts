import {ChangeDetectionStrategy, Component, Optional, Output, SkipSelf, ViewContainerRef} from '@angular/core';
import {MatDialog} from '@angular/material';
import {Destroyable} from '@reactgular/destroyable';
import {isLayoutOverlayEvent, LayoutConfig, LayoutEvent} from '@reactgular/layouts';
import {Subject} from 'rxjs';
import {EditDisabledService} from '../edit-disabled/edit-disabled.service';
import {EditableModel} from '../editable-state/editable-model';
import {EditableStateService} from '../editable-state/editable-state.service';

@Component({
    selector: 'rg-editable',
    templateUrl: './outlet-editable.component.html',
    styleUrls: ['./outlet-editable.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [
        EditDisabledService,
        EditableStateService
    ]
})
export class OutletEditableComponent extends Destroyable {
    @Output()
    public close: Subject<void> = new Subject<void>();

    public createChild: boolean = false;

    public readonly depth: number;

    public readonly layoutConfig: LayoutConfig = {animation: '500ms ease-in-out'};

    public constructor(
        @Optional() @SkipSelf() demoLayout: OutletEditableComponent,
        private readonly _dialog: MatDialog,
        private readonly _view: ViewContainerRef,
        public readonly editableState: EditableStateService
    ) {
        super();

        this.depth = demoLayout ? demoLayout.depth + 1 : 1;
    }

    public layoutEvent(event: LayoutEvent) {
        if (isLayoutOverlayEvent(event)) {
            this.editableState.patchDock(event.dock, {overlay: false});
        }
    }

    public trackPanel = (_, panel: EditableModel) => panel.dock;
}
