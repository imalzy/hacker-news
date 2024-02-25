import { Component } from '@angular/core';
import { fadeInOut } from './core/animation';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [ fadeInOut ]
})
export class AppComponent {
  title = 'assessment-imalzy';
}
