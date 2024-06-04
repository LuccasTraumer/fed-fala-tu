import {Component, inject, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {MatFormField, MatLabel} from "@angular/material/form-field";
import {MatInput} from "@angular/material/input";
import {MatCheckbox} from "@angular/material/checkbox";
import {MatButton} from "@angular/material/button";
import {NgOptimizedImage} from "@angular/common";
import {ButtonComponent} from "../../shared/button/button.component";
import {Router, RouterModule} from "@angular/router";
import {InputComponent} from "../../shared/input/input.component";

@Component({
  selector: 'app-login',
  standalone: true,
    imports: [
        ReactiveFormsModule,
        MatFormField,
        MatInput,
        MatLabel,
        MatCheckbox,
        MatButton,
        NgOptimizedImage,
        ButtonComponent,
        RouterModule,
        InputComponent
    ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent implements OnInit {
  private formBuilder = inject(FormBuilder);
  private router = inject(Router);

  controlUsername: FormControl = new FormControl('', [Validators.required, Validators.min(3), Validators.max(80)]);
  controlPassword: FormControl = new FormControl('', [Validators.required, Validators.min(3), Validators.max(26)]);
  formGroup: FormGroup = this.formBuilder.group({
    username: this.controlUsername,
    password: this.controlPassword,
  });

  ngOnInit() {
  }

  setMessageErrorUsername() {
    let message = '';

    if (this.controlUsername.touched && this.controlUsername.hasError('required')) {
      message = 'Campo precisa ser Preenchido!';
    }

    return message;
  }

  setMessageErrorPassword() {
    let message = '';

    if (this.controlPassword.touched && this.controlPassword.hasError('required')) {
      message = 'Campo precisa ser Preenchido!';
    }

    return message;
  }

  submit() {
    //TODO: Chamar auth e redirecionar para Home
  }

  redirectToRegister() {
    this.router.navigate(['register']);
  }

  forgetPassword() {
    this.router.navigate(['forget-password'])
  }

    login(): void {
      console.warn(`CLICK`);
        this.router.navigate(['home']);
    }
}
