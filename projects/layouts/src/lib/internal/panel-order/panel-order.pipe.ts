import {Pipe, PipeTransform} from '@angular/core';
import {InternalPanel, InternalPanels} from '../types/internal-panels';

@Pipe({name: 'panelOrder', pure: true})
export class PanelOrderPipe implements PipeTransform {
    public transform(panels?: InternalPanels): InternalPanel[] {
        if (panels) {
            return (arr => {
                arr.sort((a, b) => (a.order === b.order) ? 0 : (a.order > b.order ? 1 : -1));
                return arr;
            })(Object.values(panels));
        }
        return [];
    }
}
