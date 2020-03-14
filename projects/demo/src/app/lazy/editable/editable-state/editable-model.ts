import {LayoutDock, PanelConfig} from '@reactgular/layouts';

export interface EditableModels {
    [dock: string]: EditableModel;
}

export interface EditableModel extends PanelConfig {
    dock: LayoutDock;
}
