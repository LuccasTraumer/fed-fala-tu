import {Component, input} from '@angular/core';
import {FormGroup, FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatInput} from "@angular/material/input";

@Component({
  selector: 'app-input',
  standalone: true,
    imports: [
        FormsModule,
        MatInput,
        ReactiveFormsModule
    ],
  templateUrl: './input.component.html',
  styleUrl: './input.component.scss'
})
export class InputComponent {
    // @ts-ignore
    formGroup = input<FormGroup>(null, {
        alias: 'formGroup',
    });

    inputPlaceholder = input('', {
        alias: 'placeholderContent'
    });

    type = input<string>('', {
        alias: 'type'
    });

    controlName = input<string>('', {
        alias: 'controlName'
    });

    setMessageError = input<string>('', {
        alias: 'setMessageError'
    })

    icon = input<string>('', {
        alias: 'icon'
    })
}
