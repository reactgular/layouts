import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MatButtonModule} from '@angular/material/button';
import {HomeRoutingModule} from './home-routing.module';
import {OutletHomeComponent} from './outlet-home/outlet-home.component';

@NgModule({
    imports: [
        CommonModule,
        HomeRoutingModule,
        MatButtonModule
    ],
    declarations: [
        OutletHomeComponent
    ]
})
export class HomeModule {
}
