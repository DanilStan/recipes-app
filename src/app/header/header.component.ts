import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  form = new FormGroup({
    search: new FormControl(''),
  });
  public toggleSearchBtn = false;

  onSubmit() {
    console.log('Submit');
    this.toggleSearchBtn = !this.toggleSearchBtn;
    this.form.reset();
  }
}
