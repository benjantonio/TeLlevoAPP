import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'inscribirse'
})
export class InscribirsePipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
