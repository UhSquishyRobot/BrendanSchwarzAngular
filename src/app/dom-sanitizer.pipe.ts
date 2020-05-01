import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Pipe({
  name: 'domSanitizer'
})
export class DomSanitizerPipe implements PipeTransform {

  constructor(private sanitizer: DomSanitizer) { }

  transform(url: string): any {
    const ret = this.sanitizer.bypassSecurityTrustResourceUrl(url);
  	console.log(ret);
  	return ret;
  }

}
