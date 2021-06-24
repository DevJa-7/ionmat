import { Directive, HostListener, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appDatetimemask]',
})
export class DatetimemaskDirective {
  @Input('appDatetimemask') maskType: string; // 'dateonly' or 'datetime'

  includeTime: boolean;

  constructor(private element: ElementRef) {}


@HostListener('keydown', ['$event'])
onKeyDown(event: any) {

  if (['ArrowLeft', 'ArrowRight', 'Tab'].indexOf(event.key) > -1) {
    return;
  }

  if ( ['Backspace', '0','1','2','3','4','5','6','7','8','9'].indexOf(event.key) > -1) {

    this.includeTime = this.maskType === 'dateonly' ? false : true;
    let input = this.element.nativeElement.value;

    if (event.key === 'Backspace') {
      if (input.length > 0) {
        const lastchar = input.substr(input.length - 1, 1);
        if (lastchar === '/' || lastchar === ' ' || lastchar === ':') {
          this.element.nativeElement.value = input.substring(0, input.length - 2);
        } else {
          this.element.nativeElement.value = input.substring(0, input.length - 1);
        }
        event.preventDefault();
      }
    } else {
      if ((!this.includeTime && input.length === 10) || (this.includeTime && input.length === 16)) {
        event.preventDefault();
        return;
      } else {
        input = input + event.key;
      }
    }

    if (input.length === 2 && event.key !== 'Backspace') {
      const day = parseInt(input);

      if (day > 31 || day === 0) {
        this.element.nativeElement.value = '';
      } else {
        this.element.nativeElement.value = input + '/';
        event.preventDefault();
      }
    } else if (input.length === 5) {
      const month = parseInt(input.substring(3,5));
      if (month > 12) {
        this.element.nativeElement.value = input.substring(0,3);
        event.preventDefault();
      } else {
        this.element.nativeElement.value = input + '/';
        event.preventDefault();
      }
    } else if (input.length == 10) {
      if (this.includeTime) {
        this.element.nativeElement.value = input + ' ';
        event.preventDefault();
      }
    } else if (input.length == 13) {
      const hour = parseInt(input.substring(11,13));
      if (hour > 23) {
        this.element.nativeElement.value = input.substring(0, 11);
        event.preventDefault();
      } else {
        this.element.nativeElement.value = input + ':';
        event.preventDefault();
      }
    } else if (input.length === 16) {
      const min = parseInt(input.substring(14,16));
      if (min > 59) {
        this.element.nativeElement.value = input.substring(0,14);
        event.preventDefault();
      } else {

      }
    }

  } else {
    event.preventDefault();
  }


}

}



