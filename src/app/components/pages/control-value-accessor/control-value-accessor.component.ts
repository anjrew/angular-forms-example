import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';


@Component({
  selector: 'example-control-value-accessor',
  templateUrl: './control-value-accessor.component.html',
  styleUrls: ['./control-value-accessor.component.css']
})
export class ControlValueAccessorComponent {

  public formGroup: FormGroup;

  constructor() {
    this.formGroup = new FormGroup({
      pickedValue: new FormControl('Saab')
    })
  }


  toggleDisableControl(): void {
    this.formGroup.disabled ? this.formGroup.enable() : this.formGroup.disable() ;
  }


  setToSaab(): void {
    this.formGroup.get('pickedValue').setValue('Saab')
   }

}
