import { Component } from '@angular/core';

@Component({
  selector: 'app-visit-activity',
  templateUrl: './visit-activity.component.html',
  styleUrl: './visit-activity.component.scss'
})
export class VisitActivityComponent {

  // Set default position to 'center-alt'
  position: 'start' | 'end' | 'center' | 'center-alt' = 'center';  // Default value changed to 'center-alt'
  orientation: 'vertical' | 'horizontal' = 'vertical';
  reverse: boolean = false;

  items: Record<string, any>[] = [
    {
      name: 'Cathy Lee',
      updated: '08/15/2024, 12:00 pm',
      icon: 'fitness_center',
      label: 'Scheduling',
      content:
        "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC.",
    },
    {
      name: 'David Kim',
      updated: '07/22/2024, 3:30 pm',
      icon: 'language',
      label: 'Scheduled',
      content:
        'The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested.',
    },
    {
      name: 'Bob Johnson',
      updated: '09/28/2024, 7:00 pm',
      icon: 'home',
      label: 'Completed',
      content:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
    },
    {
      name: 'Alice Smith',
      updated: '11/05/2024, 9:15 am',
      icon: 'school',
      label: 'Processing',
      content:
        "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.",
    },
    {
      name: 'Bob Johnson',
      updated: '09/28/2024, 7:00 pm',
      icon: 'home',
      label: 'Closed',
      content:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
    },
    {
      name: 'John Doe',
      updated: '10/10/2024, 4:45 pm',
      icon: 'work',
      label: 'No-Show',
      content:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
    },
    {
      name: 'Alice Smith',
      updated: '11/05/2024, 9:15 am',
      icon: 'school',
      label: 'Cancelled',
      content:
        "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.",
    },
  ];

  getLabelClass(label: string): string {
    return label.toLowerCase().replace(/\s+/g, '-');
  }

  getImageUrl(img: string | null): string | null {
    if (img) {
      return (
        'https://raw.githubusercontent.com/w3soto/ngx-mat-timeline/master/projects/demo/src/assets/' +
        img
      );
    }
    return null;
  }

}
