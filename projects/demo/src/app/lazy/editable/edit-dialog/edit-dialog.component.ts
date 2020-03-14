import {ChangeDetectionStrategy, Component} from '@angular/core';
import {LayoutDock} from '@reactgular/layouts';
import {EditableStateService} from '../editable-state/editable-state.service';

@Component({
    selector: 'rg-edit-dialog',
    templateUrl: './edit-dialog.component.html',
    styleUrls: ['./edit-dialog.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class EditDialogComponent {
    public editPanel: LayoutDock = 'top';

    public constructor(public readonly editableState: EditableStateService) {

    }
}
