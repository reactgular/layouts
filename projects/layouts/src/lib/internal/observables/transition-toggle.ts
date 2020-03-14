import {combineLatest, Observable} from 'rxjs';
import {distinctUntilChanged, map} from 'rxjs/operators';

export function transitionToggle(
    animation$: Observable<string>,
    enabled$: Observable<boolean>,
    properties: string[]
): Observable<string> {
    return combineLatest(animation$, enabled$).pipe(
        map(([animation, enabled]) => {
            return enabled && Boolean(animation$)
                ? properties.map(property => `${property} ${animation}`).join(', ')
                : undefined;
        }),
        distinctUntilChanged()
    );
}
