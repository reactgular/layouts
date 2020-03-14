import {ChangeDetectionStrategy, Component} from '@angular/core';

@Component({
    selector: 'rg-body',
    template: '<router-outlet></router-outlet>',
    styleUrls: ['./body.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class BodyComponent {
}
