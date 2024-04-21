import {Component, EventEmitter, input, Output, output} from '@angular/core';
import {MatButton} from "@angular/material/button";

@Component({
  selector: 'app-button',
  standalone: true,
    imports: [
        MatButton
    ],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss'
})
export class ButtonComponent {

  textContent = input('', {
    alias: 'textContent'
  });

  color = input<string>('', {
    alias: 'color'
  });

  isDisabled = input(true, {
    alias: 'isDisabled'
  })

  @Output()
  submit = new EventEmitter();

  submitEvent(event: any) {
    this.submit.emit(event);
  }
}

// Lista de Componentes para Aplicacao:
//     - Button (Submit, Voltar)
//     - Input
//     - Search
//     - Loader
//     - Chat
//
//
// Criar Estilo de Title com fonts.
//     Poppins e Inter: fonts
// Titulo e Subtitulos são Poppins
// Demais textos são Inter.
