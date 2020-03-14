import {NgModule} from '@angular/core';
import {GestureConfig} from '@angular/material/core';
import {BrowserModule, HAMMER_GESTURE_CONFIG} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {BodyComponent} from './body/body.component';
import {MainRoutingModule} from './main-routing.module';

@NgModule({
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        MainRoutingModule
    ],
    providers: [
        {provide: HAMMER_GESTURE_CONFIG, useClass: GestureConfig}
    ],
    declarations: [
        BodyComponent
    ],
    bootstrap: [
        BodyComponent
    ]
})
export class MainModule {
}
