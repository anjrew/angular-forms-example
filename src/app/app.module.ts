import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ControlValueAccessorComponent } from './components/pages/control-value-accessor/control-value-accessor.component';
import { StandardPickerComponent } from './components/form-components/standard-picker/standard-picker.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NestedFormExerciseComponent } from './components/pages/nested-form-exercise/nested-form-exercise.component';
import { TemplateFormExerciseComponent } from './components/pages/template-form-exercise/template-form-exercise.component';

@NgModule({
  declarations: [
    AppComponent,
    ControlValueAccessorComponent,
    StandardPickerComponent,
    NestedFormExerciseComponent,
    TemplateFormExerciseComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
