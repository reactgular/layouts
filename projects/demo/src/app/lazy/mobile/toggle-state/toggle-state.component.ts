import {ChangeDetectionStrategy, Component, EventEmitter, Input, Output} from '@angular/core';
import {Observable} from 'rxjs';

@Component({
    selector: 'rg-toggle-state',
    templateUrl: './toggle-state.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ToggleStateComponent {
    @Input()
    public iconOff: string;

    @Input()
    public iconOn: string;

    @Input()
    public state$: Observable<boolean>;

    @Output()
    public toggle: EventEmitter<void> = new EventEmitter<void>();
}
