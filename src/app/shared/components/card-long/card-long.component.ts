import { CommonModule, NgOptimizedImage } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ITopic } from 'src/app/core/services/topics/topic.model';
import { DateDiffPipe } from '../../pipes/date-diff.pipe';

@Component({
  selector: 'app-card-long',
  templateUrl: './card-long.component.html',
  styleUrls: ['./card-long.component.scss'],
  standalone: true,
  imports: [CommonModule, NgOptimizedImage, DateDiffPipe],
})
export class CardLongComponent {
  @Input()
  topic!: ITopic;
  @Output() openModal = new EventEmitter<ITopic>();

  emitModal(val: ITopic) {
    this.openModal.emit(val);
  }
}
