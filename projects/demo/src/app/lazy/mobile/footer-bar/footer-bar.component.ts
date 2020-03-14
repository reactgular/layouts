import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import * as Faker from 'faker';
import {Observable} from 'rxjs';
import {MobileState} from '../mobile-state/mobile-state.service';

@Component({
    selector: 'rg-footer-bar',
    templateUrl: './footer-bar.component.html',
    styleUrls: ['./footer-bar.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    host: {
        '[class.rg-side-panel]': 'true'
    }
})
export class FooterBarComponent implements OnInit {
    public fields = Array(5).fill(null).map((_, indx) => {
        Faker.seed(indx);
        return ({
            label: Faker.lorem.words(2),
            placeholder: Faker.lorem.words(2),
            value: Faker.lorem.words(3)
        });
    });

    public footerShow$: Observable<boolean>;

    public constructor(public readonly mobileState: MobileState) {

    }

    public ngOnInit(): void {
        this.footerShow$ = this.mobileState.selectFooterShow();
    }
}
