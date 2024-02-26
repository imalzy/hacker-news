import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dateDiff',
  standalone: true,
})
export class DateDiffPipe implements PipeTransform {
  transform(value: any, ...args: unknown[]): string {
    let unix_timestamp = value;

    // Create a new JavaScript Date object based on the timestamp
    // multiplied by 1000 so that the argument is in milliseconds, not seconds
    const date = new Date(unix_timestamp * 1000);
    const dateNow = new Date();
    let delta = Math.abs(dateNow.valueOf() - date.valueOf()) / 1000;

    // calculate (and subtract) whole days
    const days = Math.floor(delta / 86400);
    delta -= days * 86400;

    // calculate (and subtract) whole hours
    const hours = Math.floor(delta / 3600) % 24;
    delta -= hours * 3600;

    // calculate (and subtract) whole minutes
    const minutes = Math.floor(delta / 60) % 60;
    delta -= minutes * 60;

    // what's left is seconds
    const seconds = delta % 60;

    let result = '';
    if (days !== 0) {
      result = days + ' Days';
    }

    if (hours !== 0) {
      result = hours + ' Hours';
    }

    if (minutes !== 0) {
      result = minutes + ' Minutes';
    }

    if (seconds !== 0) {
      result = Math.ceil(seconds) + ' Seconds';
    }

    return result;
  }
}
