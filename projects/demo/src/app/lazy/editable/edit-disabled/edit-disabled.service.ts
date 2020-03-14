import {Injectable} from '@angular/core';
import {Destroyable} from '@reactgular/destroyable';
import {BehaviorSubject, Observable} from 'rxjs';
import {finalize, takeUntil} from 'rxjs/operators';

@Injectable()
export class EditDisabledService extends Destroyable {
    private readonly _disabled$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

    public disabled$: Observable<boolean> = this._disabled$.asObservable();

    public disableUntil(ob$: Observable<any>) {
        this._disabled$.next(true);
        ob$.pipe(
            takeUntil(this._destroyed$),
            finalize(() => this._disabled$.next(false))
        ).subscribe();
    }
}
