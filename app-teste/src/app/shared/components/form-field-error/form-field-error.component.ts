import { Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-form-field-error',
  template: `<p class = "text-danger">{{errorMessage}}</p>`,
  styleUrls: ['./form-field-error.component.css']
})
export class FormFieldErrorComponent {
  @Input('form-control') formControl: FormControl;

  constructor() { }

  get errorMessage(): string | null{
      if(this.mustShowErrorMessage()){
          return this.getErrorMessage();
      }
      
      return null;
  }

  private mustShowErrorMessage(): boolean{
      return this.formControl.invalid && this.formControl.touched;
  }

  private getErrorMessage(): string | null{
      if(this.formControl.errors.required){
          return "Campo obrigatório";
      }  
      else if(this.formControl.errors.minlength){
          const requiredLength: number = this.formControl.errors.minlength.requiredLength;
          return `Deve ter no mínimo ${requiredLength} caracteres`;
      }
  }
}