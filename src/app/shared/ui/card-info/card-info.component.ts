import { Component, Input } from '@angular/core';
import { BtnComponent } from "../btn/btn.component";

interface ElementsList {
  titleElement:string,
  icons:string[]
}

@Component({
  selector: 'app-card-info',
  standalone: true,
  imports: [BtnComponent],
  templateUrl: './card-info.component.html',
  styleUrl: './card-info.component.css'
})

export class CardInfoComponent {
  @Input() title!:string;
  @Input() description!:string;

  @Input() elementsList!: ElementsList[];
  @Input() infoList!:any[];

  // currentIndex = 0;

  // prevSlide() {
  //   this.currentIndex = (this.currentIndex > 0) ? this.currentIndex - 1 : this.elementsList.length - 1;
  // }
  
  // nextSlide() {
  //   this.currentIndex = (this.currentIndex < this.elementsList.length - 1) ? this.currentIndex + 1 : 0;
  // }
  
  // prevInfo(){
  //   this.currentIndex = (this.currentIndex > 0) ? this.currentIndex - 1 : this.infoList.length - 1;
  // }
  // nextInfo(){
  //   this.currentIndex = (this.currentIndex < this.infoList.length - 1) ? this.currentIndex + 1 : 0;
  // }
}
