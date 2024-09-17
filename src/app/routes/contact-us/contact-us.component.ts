import { Component, signal } from '@angular/core';
import { BtnComponent } from "../../shared/ui/btn/btn.component";
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

interface DataContactUs {
  name:string,
  email:string,
  phone:string,
  message:string
}

@Component({
  selector: 'app-contact-us',
  standalone: true,
  imports: [BtnComponent, ReactiveFormsModule],
  templateUrl: './contact-us.component.html',
  styleUrl: './contact-us.component.css'
})

export class ContactUsComponent {
  // form = signal<FormGroup>(
  //   new FormGroup(
  //     {
  //       name: new FormControl(''),
  //       email: new FormControl(''),
  //       phone: new FormControl(''),
  //       message: new FormControl('')
  //     }
  //   )
  // )

  // send(){
  //   const data:DataContactUs = this.form().value;
  //   console.log(data)
  // }
}
