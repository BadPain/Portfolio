import { CommonModule, NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
interface TextSegment {
  textKey: string;
  color: string;
  translated?: string;
}

@Component({
  selector: 'app-aboutme',
  standalone: true,
  imports: [TranslateModule, CommonModule, NgOptimizedImage],
  templateUrl: './aboutme.component.html',
  styleUrl: './aboutme.component.scss',
})
export class AboutmeComponent {
  currentIndex = 0;
  deleting = false;
  typingTimer: any;
  visibleLengths: number[] = [];

  animationItems = [
    {
      icon: 'assets/img/otherSpecs/iconLocation.svg',
      segments: [
        {
          textKey: 'ABOUTME.FIRSTANIMATION.FIRSTPART',
          color: 'rgb(137, 188, 255)',
        },
        { 
          textKey: 'ABOUTME.FIRSTANIMATION.SECONDPART', 
          color: 'rgb(248, 245, 236)'
        },
        {
          textKey: 'ABOUTME.FIRSTANIMATION.THIRDPART',
          color: 'rgb(248, 245, 236)',
        },
      ] as TextSegment[],
      flatText: '',
    },
    {
      icon: 'assets/img/otherSpecs/iconRemote.svg',
      segments: [
        {
          textKey: 'ABOUTME.SECONDANIMATION.FIRSTPART',
          color: 'rgb(137, 188, 255)',
        },
        {
          textKey: 'ABOUTME.SECONDANIMATION.SECONDPART',
          color: 'rgb(248, 245, 236)',
        },
        {
          textKey: 'ABOUTME.SECONDANIMATION.THIRDPART',
          color: 'rgb(248, 245, 236)',
        },
      ] as TextSegment[],
      flatText: '',
    },
    {
      icon: 'assets/img/otherSpecs/iconTravel.svg',
      segments: [
        {
          textKey: 'ABOUTME.THIRDANIMATION.FIRSTPART',
          color: 'rgb(137, 188, 255)',
        },
        { 
          textKey: 'ABOUTME.THIRDANIMATION.SECONDPART', 
          color: 'rgb(248, 245, 236)'
        },
        {
          textKey: 'ABOUTME.THIRDANIMATION.THIRDPART',
          color: 'rgb(248, 245, 236)',
        },
      ] as TextSegment[],
      flatText: '',
    },
  ];

  get currentIcon() {
    return this.animationItems[this.currentIndex]?.icon || '';
  }

  get currentSegments() {
    return this.animationItems[this.currentIndex]?.segments || [];
  }

  getVisibleSegmentLength(segment: any): number {
    const index = this.currentSegments.indexOf(segment);
    return this.visibleLengths[index] || 0;
  }

  constructor(private translate: TranslateService) {}

  ngOnInit() {
    this.loadTexts();
    this.translate.onLangChange.subscribe(() => {
      this.loadTexts();
      this.deleting = false;
      this.currentIndex = 0;
    });
  }

  async loadTexts() {
    const translationPromises = this.animationItems.map(async (item) => {
      const texts = await Promise.all(
        item.segments.map((seg) => this.translate.get(seg.textKey).toPromise())
      );

      item.flatText = texts.join('');
      item.segments.forEach((seg, i) => (seg.translated = texts[i]));
    });

    await Promise.all(translationPromises);
    this.visibleLengths = [];
    clearTimeout(this.typingTimer);
    this.startTyping();
  }

  startTyping() {
    const segments = this.currentSegments;

    if (!this.visibleLengths.length) {
      this.visibleLengths = segments.map(() => 0);
    }

    if (!this.deleting) {
      for (let i = 0; i < segments.length; i++) {
        if (this.visibleLengths[i] < (segments[i]?.translated?.length || 0)) {
          this.visibleLengths[i]++;
          break;
        }
      }

      const isDone = segments.every(
        (s, i) => this.visibleLengths[i] === (s.translated?.length || 0)
      );

      if (isDone) {
        this.deleting = true;
        setTimeout(() => this.startTyping(), 750);
        return;
      }
    } else {
      for (let i = segments.length - 1; i >= 0; i--) {
        if (this.visibleLengths[i] > 0) {
          this.visibleLengths[i]--;
          break;
        }
      }

      const isDone = this.visibleLengths.every((len) => len === 0);
      if (isDone) {
        this.deleting = false;
        this.currentIndex =
          (this.currentIndex + 1) % this.animationItems.length;
        this.visibleLengths = [];
      }
    }

    this.typingTimer = setTimeout(
      () => this.startTyping(),
      this.deleting ? 40 : 80
    );
  }
}
