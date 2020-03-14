import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {OutletMobileComponent} from './outlet-mobile/outlet-mobile.component';

const routes: Routes = [
    {
        path: '',
        component: OutletMobileComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class MobileRoutingModule {
}
