import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatTooltipModule} from '@angular/material/tooltip';
import {LayoutsModule} from '@reactgular/layouts';
import {FakeCardsModule} from '../../shared/fake-cards/fake-cards.module';
import {HomeButtonModule} from '../../shared/home-button/home-button.module';
import {FilterBarComponent} from './filter-bar/filter-bar.component';
import {FooterBarComponent} from './footer-bar/footer-bar.component';
import {MenuComponent} from './menu/menu.component';
import {MobileRoutingModule} from './mobile-routing.module';
import {OutletMobileComponent} from './outlet-mobile/outlet-mobile.component';
import {SideBarComponent} from './side-bar/side-bar.component';
import {SideShadowDirective} from './side-shadow/side-shadow.directive';
import {TopBarComponent} from './top-bar/top-bar.component';
import { ToggleStateComponent } from './toggle-state/toggle-state.component';

@NgModule({
    imports: [
        CommonModule,
        MobileRoutingModule,
        LayoutsModule,
        HomeButtonModule,
        MatButtonModule,
        MatIconModule,
        MatToolbarModule,
        FakeCardsModule,
        MatFormFieldModule,
        MatInputModule,
        MatPaginatorModule,
        MatTooltipModule
    ],
    declarations: [
        FilterBarComponent,
        FooterBarComponent,
        MenuComponent,
        OutletMobileComponent,
        SideBarComponent,
        SideShadowDirective,
        TopBarComponent,
        ToggleStateComponent
    ]
})
export class MobileModule {
}
