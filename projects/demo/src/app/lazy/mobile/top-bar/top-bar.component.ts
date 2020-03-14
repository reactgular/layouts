import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {MobileState} from '../mobile-state/mobile-state.service';

@Component({
    selector: 'rg-top-bar',
    templateUrl: './top-bar.component.html',
    styleUrls: ['./top-bar.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class TopBarComponent implements OnInit {
    public filter$: Observable<boolean>;

    public mobile$: Observable<boolean>;

    public mobileIcon$: Observable<string>;

    public constructor(public readonly mobileState: MobileState) {

    }

    public ngOnInit(): void {
        this.filter$ = this.mobileState.selectFilterShow();
        this.mobile$ = this.mobileState.selectMobile();
        this.mobileIcon$ = this.mobileState.selectMobile().pipe(
            map(menu => menu ? 'mobile_friendly' : 'mobile_off')
        );
    }
}
