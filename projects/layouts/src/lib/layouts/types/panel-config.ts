/**
 * Defaults order for panel docking positions.
 */
export const DEFAULT_PANEL_ORDER = {top: 0, left: 1, right: 2, bottom: 3};

export interface PanelConfig {
    /**
     * Set as a unique value from 0 to 3 that defines the render order of the panels. This value controls
     * how a panel overlaps other panels allowing for a variety of layout designs.
     *
     * Defaults to DEFAULT_PANEL_ORDER.
     */
    order?: number;

    /**
     * Displays an overlay across the content beside the panel. You can listen for click events from the
     * layout component.
     *
     * Defaults to false.
     */
    overlay?: boolean;

    /**
     * Pull the panel off screen in pixels. Value range between 0 and "size" where zero has no effect.
     *
     * Defaults to 0.
     */
    pull?: number;

    /**
     * The margin of the content beside the panel. Value range between 0 and "size" is recommended where zero
     * has no effect.
     *
     * Defaults to "size".
     */
    push?: number;

    /**
     * The size of the panel.
     */
    size: number;
}
