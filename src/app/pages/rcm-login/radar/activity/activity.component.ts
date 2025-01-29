import { Component } from '@angular/core';

@Component({
  selector: 'app-activity',
  templateUrl: './activity.component.html',
  styleUrl: './activity.component.scss'
})
export class ActivityComponent {


  users = [
    { category: 'EHHC', context: 'Charges', newToday: 71, compToday: 22, pastDue: 2, },
    { category: 'EHHC', context: 'Coding', newToday: 41, compToday: 0, pastDue: 1, },
    { category: 'ROHC', context: 'Charges', newToday: 19, compToday: 5, pastDue: 1, },
    { category: 'ROHC', context: 'Coding', newToday: 1, compToday: 0, pastDue: 0, },
    { category: 'Dallas', context: 'Charges', newToday: 65, compToday: 14, pastDue: 0, },
    { category: 'Dallas', context: 'Coding', newToday: 27, compToday: 0, pastDue: 0, },
  ];

  isFirstInCategory(index: number, data: any[]): boolean {
    return index === 0 || data[index].category !== data[index - 1].category;
  }

  getRowspan(category: string, data: any[]): number {
    return data.filter(item => item.category === category).length;
  }

}

