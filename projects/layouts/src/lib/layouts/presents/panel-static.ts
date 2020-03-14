import {distinctStringify, toObservable} from '@reactgular/observables';
import {combineLatest, Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {PanelConfig} from '../types/panel-config';

/**
 * Creates an observable that emits a panel that doesn't push or pull content. Often used to add a top menu bar.
 */
export function PanelStatic(
    order: number | Observable<number>,
    size: number | Observable<number>,
): Observable<PanelConfig> {
    const order$ = toObservable(order);
    const size$ = toObservable(size);

    return combineLatest([order$, size$]).pipe(
        distinctStringify(),
        map(([order, size]) => ({order, size}))
    );
}
