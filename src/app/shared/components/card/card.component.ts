import { CommonModule, NgOptimizedImage } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { DateDiffPipe } from '../../pipes/date-diff.pipe';
import { ITopic } from 'src/app/core/services/topics/topic.model';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
  standalone: true,
  imports: [CommonModule, NgOptimizedImage, DateDiffPipe],
})
export class CardComponent {
  @Input()
  topic!: ITopic;
  @Output() openModal = new EventEmitter<ITopic>();

  emitModal(val: ITopic) {
    this.openModal.emit(val);
  }
}
