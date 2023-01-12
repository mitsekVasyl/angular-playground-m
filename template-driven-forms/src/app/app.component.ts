import { Component, ViewChild } from '@angular/core';
import { NgForm } from "@angular/forms";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('f') form: NgForm

  suggestUserName() {
    const suggestedName = 'Superuser';
  }

  onSubmit() {
    console.log(`form is submitted: ${this.form.value.username} ${this.form.value.email}`)
  }

  // onSubmit(form: NgForm) {
  //   console.log(`form is submitted: ${form.value.username} ${form.value.email}`)
  // }
}
