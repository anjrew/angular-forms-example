import { Component, OnInit, OnChanges } from '@angular/core';

@Component({
  selector: 'template-form-exercise',
  templateUrl: './template-form-exercise.component.html',
  styleUrls: ['./template-form-exercise.component.css']
})
export class TemplateFormExerciseComponent implements OnChanges {

  model = {
    firstName: '',
    lastName: '',
    email: '',
    address: '',
    language: ''
  }

  constructor() { }

  ngOnChanges() {
    console.log(`The value of this Model is : `, this.model);
  }

}
