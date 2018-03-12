import {Directive, HostListener, HostBinding} from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective {

  @HostBinding('class.active') active: boolean;

  @HostListener('click', ['$event']) click(event) {
    event.stopPropagation();
    this.active = !this.active;
  }

  @HostListener('document:click') toggle() {
    if (this.active) {
      this.active = !this.active;
    }
  }

  constructor() {
  }

}
