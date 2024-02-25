import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { fadeInOut } from 'src/app/core/animation';

@Component({
  selector: 'app-topic-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './topic-detail.component.html',
  styleUrls: ['./topic-detail.component.scss'],
  animations: [ fadeInOut ]
})
export class TopicDetailComponent {

}
