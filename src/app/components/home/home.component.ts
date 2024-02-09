import { Component } from '@angular/core';
import { ChoiceComponent } from './choice/choice.component';
import { ExploreComponent } from './explore/explore.component';
import { TroubleComponent } from './trouble/trouble.component';
import { LawyersComponent } from './lawyers/lawyers.component';
import { ClientComponent } from './client/client.component';
import { AttorneyComponent } from './attorney/attorney.component';
import { ExpertComponent } from './expert/expert.component';
import { AppoinmentComponent } from './appoinment/appoinment.component';
import { BlogsComponent } from './blogs/blogs.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink, ChoiceComponent, ExploreComponent, TroubleComponent,
  LawyersComponent, ClientComponent, AttorneyComponent, ExpertComponent,
  AppoinmentComponent, BlogsComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
