import {Pipe, PipeTransform} from '@angular/core';
import {InternalPanel} from '../types/internal-panels';

@Pipe({name: 'panelValid', pure: true})
export class PanelValidPipe implements PipeTransform {
    public transform(panels: InternalPanel[]): InternalPanel[] {
        return (panels || []).filter(panel => Boolean(panel.dock));
    }
}
