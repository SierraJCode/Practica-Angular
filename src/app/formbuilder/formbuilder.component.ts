import { Component } from '@angular/core';
import { FormBuilder, FormControl, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-formbuilder',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './formbuilder.component.html',
  styleUrl: './formbuilder.component.scss'
})
export class FormbuilderComponent {
  constructor(private formBuilder: FormBuilder) {}
  regex: RegExp = /^(?=[^A-Z]*[A-Z])(?=[^a-z]*[a-z])(?=\D*\d).{8,}$/;

  formUser = this.formBuilder.group({
    usuario: ['', Validators.required],
    password: ['', Validators.pattern(this.regex)]
  })

  get usuario(){
    return this.formUser.get('usuario') as FormControl
  }
}
