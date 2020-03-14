import {Injectable} from '@angular/core';
import {Stateful} from '@reactgular/stateful';
import {Observable} from 'rxjs';
import {distinctUntilChanged, map} from 'rxjs/operators';
import {MobileModel} from './mobile.model';

@Injectable({providedIn: 'root'})
export class MobileState extends Stateful<MobileModel> {
    public constructor() {
        super({
            filterShow: false,
            footerShow: false,
            menuFloat: true,
            menuShow: false,
            mobile: false
        });
    }

    public filterShadow(): Observable<boolean> {
        return this.state$.pipe(
            map(state => state.mobile && state.filterShow),
            distinctUntilChanged()
        );
    }

    public footerShadow(): Observable<boolean> {
        return this.selectFooterShow();
    }

    public menuHover(over: boolean) {
        const state = this.snapshot();
        if (state.mobile || !state.menuFloat) {
            return;
        }
        if (over) {
            this.patch({menuShow: true});
        } else {
            this.patch({menuShow: false});
        }
    }

    public menuShadow(): Observable<boolean> {
        return this.state$.pipe(
            map(state => state.menuShow && state.menuFloat),
            distinctUntilChanged()
        );
    }

    public selectFilterShow(): Observable<boolean> {
        return this.select('filterShow');
    }

    public selectFooterShow(): Observable<boolean> {
        return this.select('footerShow');
    }

    public selectMenuFloat(): Observable<boolean> {
        return this.select('menuFloat');
    }

    public selectMenuShow(): Observable<boolean> {
        return this.select('menuShow');
    }

    public selectMobile(): Observable<boolean> {
        return this.select('mobile');
    }

    public toggleFilterShow(): void {
        const filterShow = !this.snapshot().filterShow;
        this.patch({filterShow});
    }

    public toggleFooterShow(): void {
        const footerShow = !this.snapshot().footerShow;
        this.patch({footerShow});
    }

    public toggleMenuFloat(): void {
        const menuFloat = !this.snapshot().menuFloat;
        this.patch({menuFloat});
    }

    public toggleMenuShow(): void {
        const menuShow = !this.snapshot().menuShow;
        this.patch({
            menuShow,
            menuFloat: true
        });
    }

    public toggleMobile(): void {
        const mobile = !this.snapshot().mobile;
        this.patch({
            mobile,
            filterShow: false,
            menuFloat: true,
            menuShow: false
        });
    }
}
