import { Component } from '@angular/core';


const footerLinks = [
  {
    name: 'company',
    links: ['About', 'Careers', 'Brand Center', 'Blog'],
  },
  {
    name: 'Help Center',
    links: ['Discord Server', 'Twitter', 'Facebook', 'Contact Us'],
  },
  {
    name: 'Legal',
    links: ['Pricavy Policy', 'Licensing', 'Terms'],
  },
  {
    name: 'Downlaod',
    links: ['iOS', 'Android', 'Windows', 'MacOs'],
  },
];

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
})
export class FooterComponent {
  links: any[] = footerLinks;
}
