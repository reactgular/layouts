import {Injectable} from '@angular/core';
import {LayoutDock} from '@reactgular/layouts';
import {Stateful} from '@reactgular/stateful';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {EditableModel, EditableModels} from './editable-model';

@Injectable()
export class EditableStateService extends Stateful<EditableModels> {
    public constructor() {
        super({
            top: {dock: 'top', size: 50, push: 50, pull: 0, order: 0},
            left: {dock: 'left', size: 200, push: 200, pull: 0, order: 1},
            right: {dock: 'right', size: 100, push: 100, pull: 0, order: 2},
            bottom: {dock: 'bottom', size: 50, push: 50, pull: 0, order: 3}
        });
    }

    public get panels$(): Observable<EditableModel[]> {
        return this.state$.pipe(
            map(state => Object.values(state))
        );
    }

    public patchDock(dock: LayoutDock, panel: Partial<EditableModel>) {
        const patch = {...this.snapshot()[dock], ...panel};
        this.patch({[dock]: patch});
    }
}
