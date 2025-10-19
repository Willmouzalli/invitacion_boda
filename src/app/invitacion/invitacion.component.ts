import { Component, OnInit, signal, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subject, timer, takeUntil } from 'rxjs';

@Component({
  selector: 'app-invitacion',
  templateUrl: './invitacion.component.html',
  styleUrls: ['./invitacion.component.css']
})

export class InvitacionComponent implements OnInit, OnDestroy {
  nombre!: string;
  numeroInvitados!: number;
  public timeRemaining = signal({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  private expectedDay = Date.UTC(2026, 1, 10, 7, 30, 0);
  private destroy$ = new Subject<void>();
  public marryMessage = "";
  public isMarryDay = false;

  ngOnInit(): void {
    timer(0, 1000)
    .pipe(takeUntil(this.destroy$))
    .subscribe(() => {
        const now = new Date().getTime();
        const distance = this.expectedDay - now;

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
          this.isMarryDay = true;
        }
      });
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }


  constructor(private route: ActivatedRoute) {
    this.route.params.subscribe(params => {
      this.nombre = params['nombre'];
      this.numeroInvitados = +params['numero'];
    });
  }

  enableSound(): void {
    const audio: HTMLAudioElement | null = document.querySelector('#background-audio');
    if (audio) {
      audio.play();
    }
  }
}


