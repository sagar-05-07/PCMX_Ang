import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BreadcrumbService {
  private descriptionSource = new BehaviorSubject<string>('Default breadcrumb description');
  currentDescription = this.descriptionSource.asObservable();

  setDescription(description: string) {
    this.descriptionSource.next(description);
  }
}
