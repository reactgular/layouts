import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
    {
        path: '',
        children: [
            {
                path: '',
                loadChildren: () => import('../lazy/home/home.module').then(m => m.HomeModule)
            }, {
                path: 'editable',
                loadChildren: () => import('../lazy/editable/editable.module').then(m => m.EditableModule)
            }, {
                path: 'mobile',
                loadChildren: () => import('../lazy/mobile/mobile.module').then(m => m.MobileModule)
            }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class MainRoutingModule {

}
