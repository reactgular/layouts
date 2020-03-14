import {
    ChangeDetectionStrategy,
    ChangeDetectorRef,
    Component,
    EventEmitter,
    Input,
    OnInit,
    Output,
    TemplateRef
} from '@angular/core';
import {Stateful} from '@reactgular/stateful';
import {Observable} from 'rxjs';
import {ANIMATION_DEFAULT} from '../../internal/types/animation-default';
import {InternalPanel, InternalPanels} from '../../internal/types/internal-panels';
import {LayoutEvent} from '../layout-events/layout-events';
import {LayoutConfig} from '../types/layout-config';
import {LayoutDock} from '../types/layout-dock';
import {PanelConfig} from '../types/panel-config';
import {PanelContext} from '../types/panel-context';

export interface LayoutModel {
    animation: string;

    center: TemplateRef<PanelContext> | null;

    panels: InternalPanels;
}

@Component({
    selector: 'rg-layout',
    templateUrl: './layout.component.html',
    styleUrls: ['./layout.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    exportAs: 'rgLayout'
})
export class LayoutComponent extends Stateful<LayoutModel> implements OnInit {
    public animation$: Observable<string>;

    public center$: Observable<TemplateRef<PanelContext> | null>;

    @Output()
    public events: EventEmitter<LayoutEvent> = new EventEmitter<LayoutEvent>();

    public panels$: Observable<InternalPanels>;

    private _nextId: number = 0;

    public constructor(private readonly _change: ChangeDetectorRef) {
        super({
            animation: ANIMATION_DEFAULT,
            center: null,
            panels: {}
        });
    }

    @Input()
    public set config(config: LayoutConfig) {
        this.patch({animation: config.animation || ANIMATION_DEFAULT});
    }

    public dispatch(event: LayoutEvent) {
        this.events.emit(event);
    }

    public ngOnInit(): void {
        this.animation$ = this.select('animation');
        this.panels$ = this.select('panels');
        this.center$ = this.select('center');
    }

    public panel(id: number): InternalPanel {
        return this.snapshot().panels[id];
    }

    public panelAdd(dock: LayoutDock, template: TemplateRef<PanelContext>, config: PanelConfig): number {
        return (id => {
            this._panelsReduce(panels => {
                panels[id] = {
                    id,
                    dock,
                    template,
                    ...config
                };
                return panels;
            });
            return id;
        })(this._nextId++);
    }

    public panelRemove(id: number) {
        this._panelsReduce(panels => {
            delete panels[id];
            return panels;
        });
    }

    public panelUpdate(id: number, panel: Partial<InternalPanel>) {
        this._panelsReduce(panels => {
            delete panel.id;
            panels[id] = {...panels[id], ...panel};
            return panels;
        });
    }

    public setCenter(center: TemplateRef<PanelContext>) {
        this.patch({center});
    }

    private _panelsReduce(reducer: (panels: InternalPanels) => InternalPanels) {
        const panels = reducer({...this.snapshot().panels});
        this.patch({panels});
    }
}
