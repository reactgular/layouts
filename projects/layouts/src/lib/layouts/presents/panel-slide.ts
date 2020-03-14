import {distinctStringify, toObservable} from '@reactgular/observables';
import {combineLatest, Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {PanelConfig} from '../types/panel-config';

/**
 * Creates an observable that emits a panel config which slides a panel on/off the screen.
 *
 * If overlay is True the panel floats over top of content, and when False it pushes content.
 */
export function PanelSlide(
    order: number | Observable<number>,
    size: number | Observable<number>,
    overlay: boolean | Observable<boolean>,
    toggle: boolean | Observable<boolean>
): Observable<PanelConfig> {

    const order$ = toObservable(order);
    const size$ = toObservable(size);
    const overlay$ = toObservable(overlay);
    const toggle$ = toObservable(toggle);

    return combineLatest([order$, size$, overlay$, toggle$]).pipe(
        distinctStringify(),
        map(([order, size, overlay, toggle]) => {
            return {
                order,
                size,
                overlay: overlay && toggle,
                push: overlay ? 0 : (toggle ? size : 0),
                pull: toggle ? 0 : size
            };
        })
    );
}
