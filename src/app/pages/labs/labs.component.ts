import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-labs',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './labs.component.html',
  styleUrl: './labs.component.css'
})
export class LabsComponent {
  tasks = ['Instalr angular','crear proyecto','Crear componentes'];

  name = signal('jorge1');
  person = signal({
      name: 'Nicolas',
      age: 18,
      avatar: "img"
    });

  colorCtrl1 = new FormControl();
  withCtrl = new FormControl(50, {
    nonNullable: true,
  });

  nameCtrl = new FormControl('jorge', {
    nonNullable: true,
    validators: [
      Validators.required,
      Validators.minLength(3)
    ]
  });

  constructor(){
    this.colorCtrl1.valueChanges.subscribe(value => {
      console.log(value)
    })
  }

  clickHandler(){
    alert('hola');
  }

  changeHandler(event: Event){
    console.log(event);
    const input = event.target as HTMLInputElement;
    const newValue = input.value;
    this.name.set(newValue);
  }

  keydownHandler(event: KeyboardEvent){
    const input = event.target as HTMLInputElement;
    console.log(input.value)
  }

}
