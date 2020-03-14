import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import {MatDialogModule} from '@angular/material/dialog';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {MatSelectModule} from '@angular/material/select';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatTooltipModule} from '@angular/material/tooltip';
import {LayoutsModule} from '@reactgular/layouts';
import {HomeButtonModule} from '../../shared/home-button/home-button.module';
import {SliderModule} from '../../shared/slider/slider.module';
import {EditDialogComponent} from './edit-dialog/edit-dialog.component';
import {EditPanelComponent} from './edit-panel/edit-panel.component';
import {EditableControlsComponent} from './editable-controls/editable-controls.component';
import {EditableRoutingModule} from './editable-routing.module';
import {OutletEditableComponent} from './outlet-editable/outlet-editable.component';

@NgModule({
    imports: [
        CommonModule,
        ReactiveFormsModule,
        EditableRoutingModule,
        MatFormFieldModule,
        MatSelectModule,
        MatSlideToggleModule,
        MatDialogModule,
        MatIconModule,
        MatButtonModule,
        MatTooltipModule,
        SliderModule,
        LayoutsModule,
        HomeButtonModule
    ],
    declarations: [
        EditDialogComponent,
        EditPanelComponent,
        EditableControlsComponent,
        OutletEditableComponent
    ],
    entryComponents: [
        EditDialogComponent
    ],
})
export class EditableModule {
}
