import { Component, forwardRef } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor, FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'standard-picker',
  templateUrl: './standard-picker.component.html',
  styleUrls: ['./standard-picker.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting:
        StandardPickerComponent,
      multi: true,
    },
  ],
})
export class StandardPickerComponent implements ControlValueAccessor {

  public pickedItem: string;
  public onChange: (value: string) => void; /* The callback linked to the outside word to be invoked when the value changes */
  public onTouched: () => void; /* The callback to be inVoked when the value has been touched */
  public disabled: boolean /* A boolean linked to the outside world and controlled by the outside world
   that you can use to set the default state of the component */

  constructor() {
  }

  /** Invoked by the user on the select element in this component
  @param item The item chosen in the UI */
  selectItem(item: string): void {
    this.pickedItem = item;
    this.onChange(
      item
    ); /* This sends the value back to the outside world for for Form*/
  }

  /**  @param pickedValue The value of the key
   * associated with this form which can be any type
   * This is how the value get written from the outside world (The outside form)*/
  writeValue(pickedValue: string): void {
    console.log(`Writing value from outside`, pickedValue)
    this.pickedItem = pickedValue ? pickedValue : '';
  }

  /** When the component is initialized, the outside world sends
  a call back that should be saved by this component, and which
  should be invoked to fire every time a change is made.
  @param  onChange The callback to be registered */
  registerOnChange(onChange: (value: string) => void): void {
    console.log(`Registering on change`, onChange)
    this.onChange = onChange;
  }

  /* When implementing registerOnTouched in
  your own value accessor, save the given function
  so your class calls it when the control should
  be considered blurred or "touched". */
  registerOnTouched(onTouched: () => void): void {
    console.log(`Registering on touched`, onTouched)
    this.onTouched = onTouched;
  }


  /* A disabled boolean comes from the outside world and can be used
  By this component to show a disabled state */
  setDisabledState?(isDisabled: boolean): void {
    console.log(`Setting the disabled state from the outside`, isDisabled)
    this.disabled = isDisabled;
  }
}
