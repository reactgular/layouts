import {animate, style, transition, trigger} from '@angular/animations';
import {ChangeDetectionStrategy, Component, Input, ViewEncapsulation} from '@angular/core';
import {LayoutEvent} from '../../layouts/layout-events/layout-events';
import {LayoutComponent} from '../../layouts/layout/layout.component';
import {LayoutDock} from '../../layouts/types/layout-dock';
import {ANIMATION_DEFAULT} from '../types/animation-default';

@Component({
    selector: 'rg-panel-overlay',
    template: '',
    styleUrls: ['./panel-overlay.component.scss'],
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush,
    host: {
        '[@fadeInOut]': 'fadeInOut',
        '(click)': 'close()',
        '[class.rg-panel-overlay]': 'true'
    },
    animations: [
        trigger('fadeInOut', [
            transition(':enter', [
                style({opacity: 0}),
                animate('{{animation}}', style({opacity: 1})),
            ]),
            transition(':leave', [
                animate('{{animation}}', style({opacity: 0}))
            ])
        ])
    ]
})
export class PanelOverlayComponent {
    @Input()
    public dock: LayoutDock;

    public constructor(private _layout: LayoutComponent) {

    }

    private _animation: string;

    public get animation(): string {
        return this._animation || ANIMATION_DEFAULT;
    }

    @Input()
    public set animation(value: string) {
        this._animation = value;
    }

    public get fadeInOut(): any {
        const value = true;
        const animation = this.animation;
        return {value, params: {animation}};
    }

    public close() {
        this._layout.dispatch({event: 'overlay', dock: this.dock} as LayoutEvent);
    }
}
