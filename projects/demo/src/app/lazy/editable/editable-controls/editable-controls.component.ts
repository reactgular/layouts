import {ChangeDetectionStrategy, Component, Output, ViewContainerRef} from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {Subject} from 'rxjs';
import {EditDisabledService} from '../edit-disabled/edit-disabled.service';
import {EditDialogComponent} from '../edit-dialog/edit-dialog.component';
import {OutletEditableComponent} from '../outlet-editable/outlet-editable.component';

@Component({
    selector: 'rg-editable-controls',
    templateUrl: './editable-controls.component.html',
    styleUrls: ['./editable-controls.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class EditableControlsComponent {
    @Output()
    public close: Subject<void> = new Subject<void>();

    public readonly depth: number;

    @Output()
    public open: Subject<void> = new Subject<void>();

    public constructor(
        {depth}: OutletEditableComponent,
        private readonly _dialog: MatDialog,
        private readonly _view: ViewContainerRef,
        public readonly sharedDisabled: EditDisabledService
    ) {
        this.depth = depth;
    }

    public edit() {
        const dialogRef = this._dialog.open(EditDialogComponent, {
            viewContainerRef: this._view,
            hasBackdrop: false,
            autoFocus: false,
            width: '350px'
        });
        this.sharedDisabled.disableUntil(dialogRef.afterClosed());
    }
}
