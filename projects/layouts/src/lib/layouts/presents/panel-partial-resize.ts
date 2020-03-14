import {distinctStringify, toObservable} from '@reactgular/observables';
import {combineLatest, Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {PanelConfig} from '../types/panel-config';

/**
 * Emits a PanelConfig object that changes sized based upon a boolean value.
 */
export function PanelPartialResize(
    order: number | Observable<number>,
    narrow: number | Observable<number>,
    wide: number | Observable<number>,
    overlay: boolean | Observable<boolean>,
    toggle: boolean | Observable<boolean>
): Observable<PanelConfig> {

    const order$ = toObservable(order);
    const narrow$ = toObservable(narrow);
    const wide$ = toObservable(wide);
    const overlay$ = toObservable(overlay);
    const toggle$ = toObservable(toggle);

    return combineLatest([order$, narrow$, wide$, overlay$, toggle$]).pipe(
        distinctStringify(),
        map(([order, narrow, wide, overlay, toggle]) => {
            console.log({order, narrow, wide, overlay, toggle});
            return {
                order,
                size: toggle ? wide : narrow,
                overlay,
                push: narrow,
                pull: 0
            };
        })
    );
}
