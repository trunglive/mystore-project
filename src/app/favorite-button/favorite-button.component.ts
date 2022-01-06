import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-favorite-button',
  templateUrl: './favorite-button.component.html',
  styleUrls: ['./favorite-button.component.css'],
})
export class FavoriteButtonComponent implements OnInit {
  @Input() selected: boolean | undefined;
  @Output() toggleFavorite: EventEmitter<any> = new EventEmitter<boolean>();

  constructor() {}

  ngOnInit(): void {}

  public toggleSelected() {
    this.selected = !this.selected;
    this.toggleFavorite.emit(this.selected);
  }
}
