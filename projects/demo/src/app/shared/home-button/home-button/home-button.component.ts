import {ChangeDetectionStrategy, Component, Input} from '@angular/core';

@Component({
    selector: 'rg-home-button',
    templateUrl: './home-button.component.html',
    styleUrls: ['./home-button.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeButtonComponent {
    @Input()
    public disabled: boolean = false;
}
