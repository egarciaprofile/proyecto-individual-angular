import { Routes } from '@angular/router';
import { FrontpageComponent } from './modules/+home/components/frontpage/frontpage.component';
import { RegisterPageComponent } from './modules/+register/components/register-page/register-page.component';

export const routes: Routes = [
  { path: '', component: FrontpageComponent },
  { path: 'register', component: RegisterPageComponent }
];
