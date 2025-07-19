import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator',
  standalone: true,
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {
  display: string = '';

  ngOnInit(): void {
    const saved = localStorage.getItem('calculator');
    if (saved) {
      this.display = saved;
    }
  }

  press(val: string): void {
    this.display += val;
    localStorage.setItem('calculator', this.display);
  }

  clear(): void {
    this.display = '';
    localStorage.setItem('calculator', this.display);
  }

  calculate(): void {
    try {
      this.display = eval(this.display.replace('×', '*').replace('÷', '/'));
    } catch (e) {
      this.display = 'Error';
    }
    localStorage.setItem('calculator', this.display);
  }
}