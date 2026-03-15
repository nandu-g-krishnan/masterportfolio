import {
  AfterViewInit,
  Directive,
  ElementRef,
  Input,
  OnDestroy
} from '@angular/core';
import { animate, AnimationBuilder, AnimationPlayer, style } from '@angular/animations';

type RevealDirection = 'up' | 'left' | 'right' | 'fade';

@Directive({
  standalone: false,
  selector: '[appScrollReveal],[appRevealDelay],[appRevealDuration]'
})
export class ScrollRevealDirective implements AfterViewInit, OnDestroy {
  @Input() appScrollReveal: RevealDirection = 'up';
  @Input() appRevealDelay = 0;
  @Input() appRevealDuration = 620;

  private observer?: IntersectionObserver;
  private player?: AnimationPlayer;
  private revealed = false;

  constructor(
    private readonly elementRef: ElementRef<HTMLElement>,
    private readonly animationBuilder: AnimationBuilder
  ) {}

  ngAfterViewInit(): void {
    const element = this.elementRef.nativeElement;
    this.applyHiddenState(element);

    this.observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const element = entry.target as HTMLElement;
          const ratio = entry.intersectionRatio ?? 0;

          // Hysteresis avoids flicker near viewport edges while scrolling.
          if (ratio >= 0.2 && !this.revealed) {
            this.playEnterAnimation(element);
          } else if (ratio <= 0.02 && this.revealed) {
            this.applyHiddenState(element);
          }
        });
      },
      { threshold: [0, 0.08, 0.2, 0.35, 0.6], rootMargin: '0px 0px -4% 0px' }
    );

    this.observer.observe(element);
  }

  ngOnDestroy(): void {
    this.player?.destroy();
    this.observer?.disconnect();
  }

  private playEnterAnimation(element: HTMLElement): void {
    this.revealed = true;
    element.classList.add('is-revealed');
    this.player?.destroy();
    this.player = this.animationBuilder
      .build([
        style(this.startStyle()),
        animate(
          `${Math.max(200, this.appRevealDuration)}ms ${Math.max(0, this.appRevealDelay)}ms cubic-bezier(0.22, 1, 0.36, 1)`,
          style({ opacity: 1, transform: 'translateX(0) translateY(0) scale(1)' })
        )
      ])
      .create(element);

    this.player.play();
  }

  private applyHiddenState(element: HTMLElement): void {
    this.revealed = false;
    this.player?.destroy();
    this.player = undefined;
    element.classList.remove('is-revealed');
    element.style.opacity = '0';
    element.style.transform = this.startStyle().transform as string;
  }

  private startStyle(): { opacity: number; transform: string } {
    switch (this.appScrollReveal) {
      case 'left':
        return { opacity: 0, transform: 'translateX(-38px)' };
      case 'right':
        return { opacity: 0, transform: 'translateX(38px)' };
      case 'fade':
        return { opacity: 0, transform: 'none' };
      case 'up':
      default:
        return { opacity: 0, transform: 'translateY(28px)' };
    }
  }
}
