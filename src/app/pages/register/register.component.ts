import {Component, inject, OnInit, signal} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatButtonModule} from "@angular/material/button";
import {HeaderComponent} from "../../shared/header/header.component";

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [ReactiveFormsModule, MatInputModule, MatFormFieldModule, MatButtonModule, HeaderComponent],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent implements OnInit {
  formGroup!: FormGroup;

  private formBuilder = inject(FormBuilder);
  controlFirstName!: FormControl;
  controlLastName!: FormControl;
  controlEmail!: FormControl;
  controlPhoneNumber!: FormControl;
  controlPlataform!: FormControl;

  messageErrorPlataform = signal('');
  messageErrorPhone = signal('');
  messageErrorEmail = signal('');
  messageErrorLastName = signal('');
  messageErrorFirstName = signal('');
  ngOnInit(): void {
    this.startRegisterFormField();
  }

  startControlField(): void {
    this.controlFirstName = new FormControl('', [
        Validators.required,
        Validators.min(4),
        Validators.max(80)
    ]);

    this.controlLastName = new FormControl('', [
      Validators.required,
      Validators.min(4),
      Validators.max(80)
    ]);

    this.controlEmail = new FormControl<string>('', [
        Validators.email,
        Validators.required,
        Validators.nullValidator
    ]);

    this.controlPlataform = new FormControl<string>('', [
        Validators.required,
        Validators.min(2),
        Validators.nullValidator
    ]);

    this.controlPhoneNumber = new FormControl<number>(0, [
        Validators.required
    ])
  }

  startRegisterFormField(): void {
    this.formGroup = this.formBuilder.group({
      firstName: this.controlFirstName,
      lastName: this.controlLastName,
      email: this.controlEmail,
      phone: this.controlPhoneNumber,
      plataformWorked: this.controlPlataform
    });
  }


  setMessageErrorFirstName(): void {
    if (this.controlFirstName.hasError('required')) {
      this.messageErrorFirstName.set('Campo precisa ser Preenchido!')
    } else {
      this.messageErrorFirstName.set('');
    }
  }

  setMessageErrorLastName(): void {
    if (this.controlLastName.hasError('required')) {
      this.messageErrorLastName.set('Campo precisa ser Preenchido!');
    } else {
      this.messageErrorLastName.set('');
    }
  }

  setMessageErrorEmail(): void {
    if (this.controlEmail.hasError('required')) {
      this.messageErrorEmail.set('Campo precisa ser Preenchido!');
    } else {
      this.messageErrorEmail.set('');
    }
  }

  setMessageErrorPhone(): void {
    if (this.controlPhoneNumber.hasError('required')) {
      this.messageErrorPhone.set('Campo precisa ser Preenchido!')
    } else {
      this.messageErrorPhone.set('');
    }
  }

  setMessageErrorPlataform(): void {
    if (this.controlPlataform.hasError('required')) {
      this.messageErrorPlataform.set('Campo precisa ser Preenchido!');
    } else {
      this.messageErrorPlataform.set('');
    }
  }
  sendRegister() {

  }
}
