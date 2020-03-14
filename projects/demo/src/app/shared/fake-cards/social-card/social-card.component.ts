import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
import * as faker from 'faker';

@Component({
    selector: 'rg-social-card',
    templateUrl: './social-card.component.html',
    styleUrls: ['./social-card.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class SocialCardComponent {
    public avatarUrl: string;

    public imageUrl: string;

    public paragraph: string;

    public subtitle: string;

    public title: string;

    @Input()
    public set cardId(cardId: number) {
        faker.seed(cardId);
        this.title = faker.lorem.words(3);
        this.subtitle = faker.lorem.words(3);
        this.paragraph = faker.lorem.sentences(3);
        this.avatarUrl = `url(${faker.image.avatar()})`;
        this.imageUrl = `https://picsum.photos/id/${cardId}/200/200`;
    }
}
