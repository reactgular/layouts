import {distinctStringify, toObservable} from '@reactgular/observables';
import {combineLatest, Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {PanelConfig} from '../types/panel-config';

/**
 * Creates a panel config that shows only a partial part of the panel, and toggles revealing the full size. When
 * it is toggled the panel is moved to reveal all and overlay center content.
 *
 * This preset is useful when you want to hide a partial part of the panel and then reveal it without changing
 * the side of the panel (which might causes flickering of panel content).
 */
export function PanelPartialReveal(
    order: number | Observable<number>,
    size: number | Observable<number>,
    visible: number | Observable<number>,
    toggle: boolean | Observable<boolean>
): Observable<PanelConfig> {

    const order$ = toObservable(order);
    const size$ = toObservable(size);
    const visible$ = toObservable(visible);
    const toggle$ = toObservable(toggle);

    return combineLatest([order$, size$, visible$, toggle$]).pipe(
        distinctStringify(),
        map(([order, size, visible, toggle]) => {
            return {
                order,
                size,
                overlay: toggle,
                push: visible,
                pull: toggle ? 0 : size - visible
            };
        })
    );
}
