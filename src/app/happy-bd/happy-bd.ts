import { Component, OnInit, signal, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Subject, timer, takeUntil } from 'rxjs';

@Component({
  selector: 'app-happy-bd',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './happy-bd.html',
  styleUrls: ['./happy-bd.css']
})
export class HappyBd implements OnInit, OnDestroy {
  public timeRemaining = signal({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });
  private birthday = Date.UTC(2025, 8, 21, 0, 0, 0);
  private destroy$ = new Subject<void>();
  public birthdayMessage = '';
  public isBirthday = false;

  ngOnInit(): void {
    timer(0, 1000)
      .pipe(takeUntil(this.destroy$))
      .subscribe(() => {
        const now = new Date().getTime();
        const distance = this.birthday - now;

        if (distance > 0) {
          const oneSecond = 1000;
          const oneMinute = oneSecond * 60;
          const oneHour = oneMinute * 60;
          const oneDay = oneHour * 24;

          this.timeRemaining.set({
            days: Math.floor(distance / oneDay),
            hours: Math.floor((distance % oneDay) / oneHour),
            minutes: Math.floor((distance % oneHour) / oneMinute),
            seconds: Math.floor((distance % oneMinute) / oneSecond),
          });
        }
        else {
          this.timeRemaining.set({ days: 0, hours: 0, minutes: 0, seconds: 0 });
          this.isBirthday = true;
        }
      });
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
