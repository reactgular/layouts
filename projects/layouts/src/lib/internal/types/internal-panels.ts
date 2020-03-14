import {TemplateRef} from '@angular/core';
import {LayoutDock} from '../../layouts/types/layout-dock';
import {PanelConfig} from '../../layouts/types/panel-config';
import {PanelContext} from '../../layouts/types/panel-context';

/**
 * The rendered panels on the layout
 */
export interface InternalPanel extends PanelConfig {
    /**
     * The position to dock the panel.
     */
    dock: LayoutDock;

    /**
     * Used ny ngFor trackBy function
     */
    id: number;

    /**
     * The template to render.
     */
    template: TemplateRef<PanelContext>;
}

/**
 * Defines a map of panels by ID.
 */
export type InternalPanels = { [id: number]: InternalPanel };
