import {ChangeDetectionStrategy, Component} from '@angular/core';

@Component({
    selector: 'rg-outlet-home',
    templateUrl: './outlet-home.component.html',
    styleUrls: ['./outlet-home.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class OutletHomeComponent {
}
