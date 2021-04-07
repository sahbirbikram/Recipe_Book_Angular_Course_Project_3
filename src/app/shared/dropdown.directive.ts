import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective {

  @HostBinding('class.open') isDropdownOpen = false;

  constructor() { }

  @HostListener('mouseenter') openDropdown() {
    this.isDropdownOpen = true;
  }

  @HostListener('mouseleave') closeDropdown() {
    this.isDropdownOpen = false;
  }

}
