import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { fadeInOut } from 'src/app/core/animation';
import { ITopic } from 'src/app/core/services/topics/topic.model';
import { DateDiffPipe } from 'src/app/shared/pipes/date-diff.pipe';
import { TopicService } from 'src/app/core/services/topics/topic.service';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-topic-detail',
  standalone: true,
  imports: [CommonModule, NgOptimizedImage, DateDiffPipe],
  templateUrl: './topic-detail.component.html',
  styleUrls: ['./topic-detail.component.scss'],
  animations: [fadeInOut],
})
export class TopicDetailComponent implements OnInit, OnDestroy {
  @Input() fromParent: ITopic = {};
  unsubscribe$ = new Subject<void>();
  comments: ITopic[] = [];
  constructor(private topicServce: TopicService) {}

  ngOnInit(): void {
    const id = Number(this.fromParent.id);
    this.topicServce
      .getComments(id)
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe((res) => {
        this.comments = [...res]
      });
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }


  commentIdentify(index: number): number {
    return index;
  }
}
