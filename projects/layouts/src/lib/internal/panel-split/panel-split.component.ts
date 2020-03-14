import {
    ChangeDetectionStrategy,
    ChangeDetectorRef,
    Component,
    Input,
    OnInit,
    TemplateRef,
    ViewEncapsulation
} from '@angular/core';
import {Destroyable} from '@reactgular/destroyable';
import {BehaviorSubject, Observable} from 'rxjs';
import {distinctUntilChanged, scan, takeUntil} from 'rxjs/operators';
import {LayoutEvent} from '../../layouts/layout-events/layout-events';
import {LayoutComponent} from '../../layouts/layout/layout.component';
import {PanelContext} from '../../layouts/types/panel-context';
import {transitionToggle} from '../observables/transition-toggle';
import {isHorizontal, panelFlexDirection, panelHeight, panelWidth} from '../panel-utils/panel-utils';
import {InternalPanel} from '../types/internal-panels';

@Component({
    selector: 'rg-panel-split',
    templateUrl: './panel-split.component.html',
    styleUrls: ['./panel-split.component.scss'],
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush,
    host: {
        '[class.rg-has-overlay]': 'hasOverlay',
        '[class.rg-horizontal]': 'isHorizontal',
        '[class.rg-vertical]': '!isHorizontal'
    }
})
export class PanelSplitComponent extends Destroyable implements OnInit {
    @Input()
    public center: TemplateRef<PanelContext> | null;

    public children: InternalPanel[];

    public flexDirection: string;

    public height: string;

    public horizontal: boolean;

    public panel: InternalPanel;

    public transitionPanel$: Observable<string>;

    public transitionPanelContent$: Observable<string>;

    public width: string;

    private readonly _docks: BehaviorSubject<string> = new BehaviorSubject<string>(null);

    private readonly _enableAnimation$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

    public constructor(
        private readonly _layout: LayoutComponent,
        private readonly _change: ChangeDetectorRef
    ) {
        super();
    }

    public get hasOverlay(): boolean {
        return Boolean(this.panel && this.panel.overlay);
    }

    public get isHorizontal(): boolean {
        return Boolean(this.panel && isHorizontal(this.panel));
    }

    @Input()
    public set panels(panels: InternalPanel[]) {
        this._setPanel(panels && panels.length ? panels[0] : null);
        this._setChildren(panels);
    }

    public _setChildren(panels?: InternalPanel[]) {
        this.children = panels && panels.length > 1 ? panels.slice(1) : null;
    }

    public ngOnInit(): void {
        this._docks.pipe(
            distinctUntilChanged(),
            scan<string, [string, string]>((acc, next) => ([next, acc[0]]), [null, null]),
            takeUntil(this._destroyed$)
        ).subscribe(dock => {
            this._enableAnimation$.next(false);
            setTimeout(() => this._enableAnimation$.next(true));
        });

        this.transitionPanelContent$ = transitionToggle(
            this._layout.animation$,
            this._enableAnimation$,
            ['padding']
        );

        this.transitionPanel$ = transitionToggle(
            this._layout.animation$,
            this._enableAnimation$,
            ['margin', 'height', 'width']
        );
    }

    public pulled(panel: InternalPanel): number {
        return typeof panel.pull === 'number' ? -(panel.pull) : 0;
    }

    public pushed(panel: InternalPanel): number {
        return typeof panel.push === 'number' ? panel.push : panel.size;
    }

    public transitionEvent(event: TransitionEvent, target: HTMLDivElement) {
        if (event.target !== target) {
            return;
        }
        const dock = this.panel.dock;
        const type = event.type.replace('transition', '');
        const elapsedTime = event.elapsedTime;
        if (event.propertyName === 'width' || event.propertyName === 'height') {
            this._layout.dispatch({event: 'transition', dock, type, property: 'size', elapsedTime} as LayoutEvent);
        } else if (event.propertyName === 'margin-left'
            || event.propertyName === 'margin-right'
            || event.propertyName === 'margin-top'
            || event.propertyName === 'margin-bottom') {
            this._layout.dispatch({event: 'transition', dock, type, property: 'pull', elapsedTime} as LayoutEvent);
        } else if (event.propertyName === 'padding-left'
            || event.propertyName === 'padding-right'
            || event.propertyName === 'padding-top'
            || event.propertyName === 'padding-bottom') {
            this._layout.dispatch({event: 'transition', dock, type, property: 'push', elapsedTime} as LayoutEvent);
        }
    }

    private _setPanel(panel?: InternalPanel) {
        this.panel = panel || null;
        this._docks.next(panel ? panel.dock : null);
        this.flexDirection = panel ? panelFlexDirection(panel) : null;
        this.height = panel ? panelHeight(panel) : null;
        this.width = panel ? panelWidth(panel) : null;
        this.horizontal = panel ? isHorizontal(panel) : false;
    }
}
