import {ChangeDetectionStrategy, Component, EventEmitter, Input, Output, ViewEncapsulation} from '@angular/core';
import {ThemePalette} from '@angular/material/core';
import {MatSliderChange} from '@angular/material/slider';

@Component({
    selector: 'rg-slider',
    templateUrl: './slider.component.html',
    styleUrls: ['./slider.component.scss'],
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class SliderComponent {
    @Output()
    public readonly change: EventEmitter<MatSliderChange> = new EventEmitter<MatSliderChange>();

    @Input()
    public color: ThemePalette;

    @Input()
    public disabled: boolean;

    @Input()
    public displayWith: (value: number) => string | number;

    @Input()
    public hint: string;

    @Output()
    public readonly input: EventEmitter<MatSliderChange> = new EventEmitter<MatSliderChange>();

    @Input()
    public invert: boolean;

    @Input()
    public label: string;

    @Input()
    public max: number;

    @Input()
    public min: number;

    @Input()
    public step: number;

    @Input()
    public thumbLabel: boolean = true;

    @Input()
    public tickInterval: 'auto' | number;

    @Input()
    public value: number | null = null;
}
