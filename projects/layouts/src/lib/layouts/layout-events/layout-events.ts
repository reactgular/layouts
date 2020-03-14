import {LayoutDock} from '../types/layout-dock';

export interface LayoutEvent {
    dock: LayoutDock;

    event: string;
}

export interface LayoutOverlayEvent extends LayoutEvent {
    event: 'overlay';
}

export const isLayoutOverlayEvent = (e: LayoutEvent): e is LayoutOverlayEvent => e.event === 'overlay';

export interface LayoutTransitionEvent extends LayoutEvent {
    elapsedTime: number;

    event: 'transition';

    property: string;

    type: string;
}

export const isLayoutTransitionEvent = (e: LayoutEvent): e is LayoutOverlayEvent => e.event === 'transition';
