import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ControlValueAccessorComponent } from './components/pages/control-value-accessor/control-value-accessor.component';
import { NestedFormExerciseComponent } from './components/pages/nested-form-exercise/nested-form-exercise.component';
import { TemplateFormExerciseComponent } from './components/pages/template-form-exercise/template-form-exercise.component';


const routes: Routes = [
  {
    component: ControlValueAccessorComponent,
    path: 'control-accessor'
  },
  {
    component: NestedFormExerciseComponent,
    path: 'nested-form'
  },
  {
    component: TemplateFormExerciseComponent,
    path: 'template-form'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
