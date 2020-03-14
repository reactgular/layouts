import {LayoutDock} from '../../layouts/types/layout-dock';
import {InternalPanel} from '../types/internal-panels';

/**
 * Flex direction of DOM elements inside the panel.
 */
export function panelFlexDirection(panel: InternalPanel): string {
    switch (panel.dock) {
        case 'top':
            return 'column';
        case 'bottom':
            return 'column-reverse';
        case 'left':
            return 'row';
        case 'right':
            return 'row-reverse';
        default:
            return null;
    }
}

/**
 * The CSS height of the panel.
 */
export const panelHeight = (panel: InternalPanel): string | null => panelSize(panel, 'top', 'bottom');

/**
 * The CSS width of the panel.
 */
export const panelWidth = (panel: InternalPanel): string | null => panelSize(panel, 'left', 'right');

/**
 * The horizontal alignment of the panel.
 */
export const isHorizontal = (panel: InternalPanel): boolean => panel.dock === 'top' || panel.dock === 'bottom';

/**
 * The vertical alignment of the panel.
 */
export const isVertical = (panel: InternalPanel): boolean => !isHorizontal(panel);

const panelSize = (panel: InternalPanel, a: LayoutDock, b: LayoutDock) => panel ? toUnit(getSize(panel, a, b)) : null;

const getSize = ({dock, size}: InternalPanel, a: LayoutDock, b: LayoutDock) => (dock === a || dock === b) ? size : null;

/**
 * @deprecated Sizes will be number from now on.
 */
const toUnit = (a: string | number | null): string | null => (typeof a === 'number') ? `${a}px` : a;
