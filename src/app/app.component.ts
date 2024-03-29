import { afterNextRender, Component } from '@angular/core';
import { ViewportScroller } from '@angular/common';
import moment, { Moment } from 'moment';
import { ParticlesConfig } from '../assets/particles-config';

declare let particlesJS: any; // Required to be properly interpreted by TypeScript.

@Component({
  selector: 'cv-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor(private viewportScroller: ViewportScroller) {
    afterNextRender(() => {
      particlesJS('particles-js-title', ParticlesConfig);
      particlesJS('particles-js-experience', ParticlesConfig);
    });
  }

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

  get getCurrentYear(): number {
    return moment().year();
  }
}
