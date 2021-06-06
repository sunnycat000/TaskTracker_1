import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
@Component({
  selector: 'app-toggle-btn',
  templateUrl: './toggle-btn.component.html',
  styleUrls: ['./toggle-btn.component.css'],
})
export class ToggleBtnComponent implements OnInit {
  @Input() text: string;
  @Input() color: string;
  @Output() btnClicked = new EventEmitter();
  constructor() {}

  ngOnInit(): void {}
  toggle() {
    this.btnClicked.emit();
  }
}
