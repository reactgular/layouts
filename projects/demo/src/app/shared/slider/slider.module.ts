import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SliderComponent} from './slider/slider.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSliderModule} from '@angular/material/slider';

@NgModule({
    imports: [
        CommonModule,
        MatFormFieldModule,
        MatSliderModule
    ],
    declarations: [
        SliderComponent
    ],
    exports: [
        SliderComponent
    ]
})
export class SliderModule {
}
