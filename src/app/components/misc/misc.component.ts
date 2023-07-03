import { Component } from '@angular/core';
import { Pipe,PipeTransform } from '@angular/core';

@Component({
  selector: 'app-lecture',
  templateUrl: './misc.component.html'
})
// @Pipe({
//   name:"summery"
// })
// export class PipeSummery implements PipeTransform {
//   transform(value: string, args?: any) {
//     if(!value){
//       return null
//     }
//     else{
//       return value.substring(0,14)+'...'
//     }
//   }
    
// }

export class favourite{
  isFavourite: boolean = false;
  onClick(){
    this.isFavourite = !this.isFavourite
  }
}