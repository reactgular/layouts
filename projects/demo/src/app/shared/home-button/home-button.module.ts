import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatTooltipModule} from '@angular/material/tooltip';
import {RouterModule} from '@angular/router';
import {HomeButtonComponent} from './home-button/home-button.component';

@NgModule({
    imports: [
        CommonModule,
        MatIconModule,
        MatTooltipModule,
        MatButtonModule,
        RouterModule
    ],
    declarations: [
        HomeButtonComponent
    ],
    exports: [
        HomeButtonComponent
    ]
})
export class HomeButtonModule {
}
