import {Component, inject, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [ReactiveFormsModule],
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
  ngOnInit(): void {

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


  setMessageErrorFirstName(): string {
    let message = '';

    if (this.controlFirstName.hasError('required')) {
      message = 'Campo precisa ser Preenchido!';
    }

    return message;
  }
  sendRegister() {

  }
}
