import { Component } from '@angular/core';
import { ViewportScroller } from '@angular/common';
import * as moment from 'moment';
import { Moment } from 'moment';

@Component({
  selector: 'cv-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor(private viewportScroller: ViewportScroller) {}

  onClickScroll(elementId: string) {
    this.viewportScroller.scrollToAnchor(elementId);
  }
  get getJavaDuration(): string {
    return this.getTranslatedDuration(moment('2021-04-01'));
  }

  get getTypescriptDuration(): string {
    return this.getTranslatedDuration(moment('2022-06-01'));
  }

  get getHorusDuration(): string {
    return this.getTranslatedDuration(moment('2022-02-01'));
  }

  private getTranslatedDuration(start: Moment): string {
    const duration = moment.duration(moment().diff(start));
    const years = Math.floor(duration.asMonths() / 12);
    const months = Math.floor(duration.asMonths() % 12);

    let result = '';
    if (years > 0) result += years + ' yr';
    if (months > 0) result += ' ' + months + ' mos';
    return result;
  }
}
