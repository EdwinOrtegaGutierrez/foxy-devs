import { Component } from '@angular/core';
import { BtnComponent } from "../btn/btn.component";

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [BtnComponent],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {

}
