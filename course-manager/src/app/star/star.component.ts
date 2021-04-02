import { Component, OnChanges, Input } from "@angular/core";

@Component({
  selector: 'app-star',// vira tag
  templateUrl:'./star.component.html',
  styleUrls:['./star.component.css']

})
export class StarComponent implements OnChanges{
  @Input()
  rating: number = 0;//vira atributo

  startWidth: number;

  ngOnChanges(): void {
      this.startWidth = this.rating * 74 / 5;
  }
}
