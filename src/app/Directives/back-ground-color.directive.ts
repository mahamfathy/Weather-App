import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appBackGroundColor]',
  standalone: true,
})
export class BackGroundColorDirective implements OnInit {
  @Input('appBackGroundColor') temperature: number = 0;
  constructor(private el: ElementRef) {}

  ngOnInit(): void {
    this.setBackGround();
  }
  private setBackGround() {
    if (this.temperature < 10) {
      this.el.nativeElement.style.backgroundColor = 'blue';
    } else if (this.temperature >= 10 && this.temperature <= 25) {
      this.el.nativeElement.style.backgroundColor = 'green';
    } else {
      this.el.nativeElement.style.backgroundColor = 'red';
    }
  }
}
