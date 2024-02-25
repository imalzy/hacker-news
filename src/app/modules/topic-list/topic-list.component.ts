import { Component } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { CardComponent } from 'src/app/shared/components/card/card.component';
import { CardLongComponent } from 'src/app/shared/components/card-long/card-long.component';
import { fadeInOut } from 'src/app/core/animation';

@Component({
  selector: 'app-topic-list',
  standalone: true,
  imports: [CommonModule, NgOptimizedImage, CardComponent, CardLongComponent],
  templateUrl: './topic-list.component.html',
  styleUrls: ['./topic-list.component.scss'],
  animations: [ fadeInOut ]
})
export class TopicListComponent {

}
