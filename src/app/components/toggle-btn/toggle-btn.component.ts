import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-toggle-btn',
  templateUrl: './toggle-btn.component.html',
  styleUrls: ['./toggle-btn.component.css'],
})
export class ToggleBtnComponent implements OnInit {
  text: string = 'test';
  color: string = 'red';
  constructor() {}

  ngOnInit(): void {}
  toggle() {
    console.log('toggle');
  }
}
