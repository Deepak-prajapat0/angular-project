import { Component } from '@angular/core';
import { Pipe,PipeTransform } from '@angular/core';

@Component({
  selector: 'app-lecture',
  templateUrl: './misc.component.html'
})

export class favourite{
  isFavourite: boolean = false;
  onClick(){
    this.isFavourite = !this.isFavourite
  }
}
