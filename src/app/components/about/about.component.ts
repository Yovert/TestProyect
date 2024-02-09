import { OfferComponent } from './offer/offer.component';
import { Component } from '@angular/core';
import { SpecialisedComponent } from './specialised/specialised.component';
import { AttorneyComponent } from '../home/attorney/attorney.component';
import { ClientComponent } from '../home/client/client.component';
import { PartnetsComponent } from './partnets/partnets.component';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [SpecialisedComponent, OfferComponent,AttorneyComponent,
  ClientComponent,PartnetsComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {

}
