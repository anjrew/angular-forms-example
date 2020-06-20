import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ControlValueAccessorComponent } from './components/pages/control-value-accessor/control-value-accessor.component';


const routes: Routes = [
  {
    component: ControlValueAccessorComponent,
    path: ''
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
