import { Component, OnDestroy, OnInit, inject } from '@angular/core';
import { CommonModule, NgOptimizedImage, SlicePipe } from '@angular/common';
import { CardComponent } from 'src/app/shared/components/card/card.component';
import { CardLongComponent } from 'src/app/shared/components/card-long/card-long.component';
import { fadeInOut } from 'src/app/core/animation';
import { TopicService } from 'src/app/core/services/topics/topic.service';
import { Subject, takeUntil } from 'rxjs';
import { ITopic } from 'src/app/core/services/topics/topic.model';
import { DateDiffPipe } from 'src/app/shared/pipes/date-diff.pipe';
import { TopicDetailComponent } from '../topic-detail/topic-detail.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-topic-list',
  standalone: true,
  imports: [
    CommonModule,
    NgOptimizedImage,
    CardComponent,
    CardLongComponent,
    SlicePipe,
    DateDiffPipe,
  ],
  templateUrl: './topic-list.component.html',
  styleUrls: ['./topic-list.component.scss'],
  animations: [fadeInOut],
})
export class TopicListComponent implements OnInit, OnDestroy {
  private unsubscribe$ = new Subject<void>();
  topics: ITopic[] = [];
  private modalService = inject(NgbModal);

  constructor(private topicService: TopicService) {

  }

  ngOnInit(): void {
    this.topicService
      .retrieveTopics()
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe((res) => {
        this.topics = [...res];
      });
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

  topicIdentify(index: number): number {
    return index;
  }

  emitModal(topic: ITopic): void {
    const modalRef = this.modalService.open(TopicDetailComponent, {
      backdropClass: 'custom-backdrop',
      size: 'lg',
      windowClass: 'custom-window',
    });
    
    modalRef.componentInstance.fromParent = topic;
    modalRef.result.then((result) => {
      console.log(result);
    }, (reason) => {
    });

  }

  getGridClass(index: number): string {
    const cycleIndex = index % 8;
    switch (cycleIndex) {
      case 0:
      case 1:
      case 2:
      case 3:
        return 'half-width'; // 50% width
      case 4:
      case 5:
      case 6:
      case 7:
        return 'full-width'; // 100% width
      default:
        return '';
    }
  }
}
