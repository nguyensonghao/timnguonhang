import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class UtilService {
  constructor() { }

  markFormGroupTouched(formGroup) {
    if (this.isIEOrEdge) {
      const controls = formGroup.controls;
      const listControls = [];
      for (let key in controls) {
        listControls.push(controls[key]);
      }

      listControls.forEach(control => {
        control.markAsTouched();
        if (control.controls) {
          this.markFormGroupTouched(control);
        }
      })
    } else {
      (Object as any).values(formGroup.controls).forEach(control => {
        control.markAsTouched();
        if (control.controls) {
          this.markFormGroupTouched(control);
        }
      })
    }
  }

  isIEOrEdge() {
    return /msie\s|trident\/|edge\//i.test(window.navigator.userAgent);
  }
}
