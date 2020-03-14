import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {OutletEditableComponent} from './outlet-editable/outlet-editable.component';

const routes: Routes = [
    {
        path: '',
        component: OutletEditableComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class EditableRoutingModule {
}
