import { Route } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DetailsComponent } from './details/details.component';

const routeConfig: Route[] = [
  { path: '', component: HomeComponent },
  { path: 'details/:id', component: DetailsComponent }
];

export default routeConfig;
