import {NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
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
