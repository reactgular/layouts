import {toObservable} from '@reactgular/observables';
import {Observable} from 'rxjs';
import {switchMap} from 'rxjs/operators';
import {PanelConfig} from '../types/panel-config';

/**
 * Emits one of two PanelConfig objects based upon a condition.
 */
export function PanelIfElse(
    cond: boolean | Observable<boolean>,
    configA: PanelConfig | Observable<PanelConfig>,
    configB: PanelConfig | Observable<PanelConfig>,
): Observable<PanelConfig> {
    const cond$ = toObservable(cond);
    const configA$ = toObservable(configA);
    const configB$ = toObservable(configB);
    return cond$.pipe(switchMap(cond => cond ? configA$ : configB$));
}
