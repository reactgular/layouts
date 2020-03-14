import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
import {LayoutDock} from '@reactgular/layouts';
import {Observable} from 'rxjs';
import {EditableModel} from '../editable-state/editable-model';
import {EditableStateService} from '../editable-state/editable-state.service';

@Component({
    selector: 'rg-edit-panel',
    templateUrl: './edit-panel.component.html',
    styleUrls: ['./edit-panel.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class EditPanelComponent {
    public panel$: Observable<EditableModel>;

    public constructor(public readonly editableState: EditableStateService) {
    }

    @Input()
    public set dock(dock: LayoutDock) {
        this.panel$ = this.editableState.select(dock);
    }
}
