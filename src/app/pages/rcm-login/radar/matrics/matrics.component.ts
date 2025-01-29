import { Component } from '@angular/core';

@Component({
  selector: 'app-matrics',
  templateUrl: './matrics.component.html',
  styleUrl: './matrics.component.scss'
})
export class MatricsComponent {

  createdData = [
    { label: 'New', value: 0 }
  ];

  schedulingData = [
    {
      label: 'Pending Schedule',
      new: 0,
      incomplete: '',
      all: 438,
      delay: 17,
      comp: 0
    }
  ];

  createdColumns = ['label', 'value'];
  schedulingColumns = ['label', 'new', 'incomplete', 'all', 'delay', 'comp'];
}