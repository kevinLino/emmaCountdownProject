import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-countdown',
  standalone: true,
  imports: [],
  templateUrl: './countdown.component.html',
  styleUrl: './countdown.component.css'
})
export class CountdownComponent implements OnInit {

  targetDate: Date = new Date('2024-11-13T00:00:00'); //Buscar
  days: number = 0;
  hours: number = 0;
  minutes: number = 0;
  seconds: number = 0;

  ngOnInit(): void {
      this.calculateTimeLeft();
      interval(1000).subscribe(()=>this.calculateTimeLeft()); //Buscar Subscribe
  }

  calculateTimeLeft(): void {

    const currendDate = new Date(); // Buscar currenDate
    const timeDifference =  this.targetDate.getTime() - currendDate.getTime();

    this.days = Math.floor(timeDifference / (1000*60*60*24));
    this.hours = Math.floor((timeDifference % (1000*60*60*24)) / (1000*60*60));
    this.minutes = Math.floor((timeDifference % (1000*60*60)) / (1000*60));
    this.seconds = Math.floor((timeDifference % (1000*60)) / 1000);

  }

}
