import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import * as Faker from 'faker';
import {Observable} from 'rxjs';
import {MobileState} from '../mobile-state/mobile-state.service';

@Component({
    selector: 'rg-filter-bar',
    templateUrl: './filter-bar.component.html',
    styleUrls: ['./filter-bar.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class FilterBarComponent implements OnInit {
    public faker = Faker;

    public fields: number[] = Array(10).fill(null).map((_, indx) => indx + 1);

    public isMobile$: Observable<boolean>;

    public constructor(public readonly mobileState: MobileState) {
    }

    public ngOnInit(): void {
        this.isMobile$ = this.mobileState.selectMobile();
    }
}
