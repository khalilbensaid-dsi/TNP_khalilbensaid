import { Pipe, PipeTransform } from '@angular/core';
import { Produit } from './application/Produit';

@Pipe({
  name: 'searsh'
})
export class SearshPipe implements PipeTransform {

  transform(value: Produit[], searsh:string):Produit[]  {
    if(!value){
      return value;
    }
    if (!searsh){return value;}
    else return value.filter(value=>value.title.toLowerCase().indexOf(searsh.toLowerCase())!==-1);
  }

}
