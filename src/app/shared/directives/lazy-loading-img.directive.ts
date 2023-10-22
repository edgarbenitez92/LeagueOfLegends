import { Directive } from '@angular/core';

@Directive({
    selector: '[appLazyLoadingImg]',
    standalone: true,
})
export class LazyLoadingImgDirective {
  constructor() {}
}
