import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  isOpen: boolean = false;
  onClick(){
    this.isOpen = !this.isOpen
  }
}
