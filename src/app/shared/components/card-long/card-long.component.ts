import { CommonModule, NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-card-long',
  templateUrl: './card-long.component.html',
  styleUrls: ['./card-long.component.scss'],
  standalone: true,
  imports: [CommonModule, NgOptimizedImage],
})
export class CardLongComponent {}
