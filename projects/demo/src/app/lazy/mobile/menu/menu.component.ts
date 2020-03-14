import {ChangeDetectionStrategy, Component} from '@angular/core';

interface SideBarMenu {
    icon: string;

    title: string;
}

@Component({
    selector: 'rg-menu',
    templateUrl: './menu.component.html',
    styleUrls: ['./menu.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class MenuComponent {
    public active: number = 0;

    public items: SideBarMenu[];

    public constructor() {
        this.items = [
            {icon: 'home', title: 'Home'},
            {icon: 'apps', title: 'Apps'},
            {icon: 'movie', title: 'Movies'},
            {icon: 'library_music', title: 'Music'},
            {icon: 'library_books', title: 'Books'},
            {icon: 'devices', title: 'Devices'},
            {icon: 'network_check', title: 'Internet'}
        ];
    }
}
