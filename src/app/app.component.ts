import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'counter';
  initialValue = 0;

  ngOnInit(): void {
    const [getA, nextA] = this.counter(1);
    getA(); // 1
    nextA();
    getA(); // 2
    const [getB, nextB] = this.counter(10);
    nextB();
    getA(); // 2
    getB(); // 11
    nextA();
    getA(); // 3
    getB(); // 11
  }

  counter(a = 0) {
    let count = a;
    return [
      () => {
      console.log(count);
      return count;
      },
      () => {
      count = count + 1;
      }
    ]
  }
}
