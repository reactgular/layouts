import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {
    isLayoutOverlayEvent,
    LayoutConfig,
    LayoutDock,
    LayoutEvent,
    PanelConfig,
    PanelIfElse,
    PanelPartialResize,
    PanelPartialReveal,
    PanelSlide,
    PanelStatic
} from '@reactgular/layouts';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {MobileState} from '../mobile-state/mobile-state.service';

const DESKTOP_ORDER = {top: 0, left: 1, right: 3, bottom: 2};
const MOBILE_ORDER = {top: 3, left: 0, right: 1, bottom: 2};

const mapOrder = (dock: LayoutDock, mobile) => mobile ? MOBILE_ORDER[dock] : DESKTOP_ORDER[dock];

@Component({
    selector: 'rg-outlet-side-bar',
    templateUrl: './outlet-mobile.component.html',
    styleUrls: ['./outlet-mobile.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class OutletMobileComponent implements OnInit {

    public bottom$: Observable<PanelConfig>;

    public config: LayoutConfig = {
        animation: '250ms ease-in-out'
    };

    public filterShadow$: Observable<boolean>;

    public footerShadow$: Observable<boolean>;

    public left$: Observable<PanelConfig>;

    public menuShadow$: Observable<boolean>;

    public right$: Observable<PanelConfig>;

    public showCards: boolean = false;

    public socialCards: number[] = Array(50).fill(null).map((_, indx) => indx + 1);

    public top$: Observable<PanelConfig>;

    public constructor(private readonly _sideBarState: MobileState) {

    }

    public layoutEvent(event: LayoutEvent) {
        if (isLayoutOverlayEvent(event)) {
            switch (event.dock) {
                case 'right':
                    this._sideBarState.toggleFilterShow();
                    break;
                case 'left':
                    this._sideBarState.toggleMenuShow();
                    break;
                case 'bottom':
                    this._sideBarState.toggleFooterShow();
                    break;
            }
        }
    }

    public ngOnInit(): void {
        const mobile$ = this._sideBarState.selectMobile();

        this.top$ = PanelStatic(
            mobile$.pipe(map(mobile => mapOrder('top', mobile))),
            64
        );

        this.bottom$ = PanelPartialReveal(
            mobile$.pipe(map(mobile => mapOrder('bottom', mobile))),
            365,
            56,
            this._sideBarState.selectFooterShow()
        );

        const leftNarrow = 55;
        const leftWide = 200;
        const leftOrder$ = mobile$.pipe(map(mobile => mapOrder('left', mobile)));
        const leftDocked$ = PanelStatic(leftOrder$, leftWide);
        const leftHover$ = PanelPartialResize(leftOrder$, leftNarrow, leftWide, false, this._sideBarState.selectMenuShow());
        const leftDesktop$ = PanelIfElse(
            this._sideBarState.selectMenuFloat(),
            leftHover$,
            leftDocked$
        );
        const leftMobile$ = PanelSlide(
            leftOrder$,
            leftWide,
            true,
            this._sideBarState.selectMenuShow()
        );
        this.left$ = PanelIfElse(
            this._sideBarState.selectMobile(),
            leftMobile$,
            leftDesktop$
        );

        this.right$ = PanelSlide(
            mobile$.pipe(map(mobile => mapOrder('right', mobile))),
            350,
            this._sideBarState.selectMobile(),
            this._sideBarState.selectFilterShow()
        );

        this.filterShadow$ = this._sideBarState.filterShadow();
        this.menuShadow$ = this._sideBarState.menuShadow();
        this.footerShadow$ = this._sideBarState.footerShadow();
    }
}
