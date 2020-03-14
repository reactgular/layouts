import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {MobileState} from '../mobile-state/mobile-state.service';

@Component({
    selector: 'rg-side-bar',
    templateUrl: './side-bar.component.html',
    styleUrls: ['./side-bar.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    host: {
        '[class.rg-side-panel]': 'true',
        '(mouseenter)': 'mobileState.menuHover(true)',
        '(mouseleave)': 'mobileState.menuHover(false)'
    }
})
export class SideBarComponent implements OnInit {
    public isMobile$: Observable<boolean>;

    public lockIcon$: Observable<string>;

    public locked$: Observable<boolean>;

    @Input()
    public width: number;

    public constructor(public readonly mobileState: MobileState) {
    }

    public ngOnInit(): void {
        this.locked$ = this.mobileState.selectMenuFloat();
        this.lockIcon$ = this.locked$.pipe(
            map(locked => locked ? 'toggle_on' : 'toggle_off')
        );
        this.isMobile$ = this.mobileState.selectMobile();
    }
}
