import { Component, SimpleChanges, OnChanges, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'pm-star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.css']
})
export class StarComponent implements OnChanges {

  @Input() rating: number;
  startWidth: number;
  @Output() ratingClicked: EventEmitter<string> = new EventEmitter<string>();

  ngOnChanges(changes: SimpleChanges): void {
    this.startWidth = this.rating * 86 /5;
  }

  onClicked(): void {
    this.ratingClicked.emit(`The rating ${this.rating} was cliked!`);
  }

}
