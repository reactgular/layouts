import {InternalPanel} from '../../internal/types/internal-panels';
import {PanelDirective} from './panel.directive';

export abstract class PanelChangeDirective {
    protected constructor(protected readonly _layoutPanel: PanelDirective) {
    }

    protected numberElse = (a: any, b: number): number => typeof a === 'number' ? a : b;

    protected patch(patcher: (panel: InternalPanel) => Partial<InternalPanel>) {
        this._layoutPanel.patch(patcher(this._layoutPanel.getPanel()));
    }
}
