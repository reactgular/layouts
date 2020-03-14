import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {SocialCardComponent} from './social-card/social-card.component';

@NgModule({
    imports: [
        CommonModule,
        MatCardModule,
        MatButtonModule
    ],
    declarations: [
        SocialCardComponent
    ],
    exports: [
        SocialCardComponent
    ]
})
export class FakeCardsModule {
}
