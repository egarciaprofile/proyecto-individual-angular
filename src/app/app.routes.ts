import { Routes } from '@angular/router';
import { FrontpageComponent } from './modules/+home/components/frontpage/frontpage.component';
import { RegisterPageComponent } from './modules/+register/components/register-page/register-page.component';
import { AdminPageComponent } from './modules/+admin/components/admin-page/admin-page.component';
import { EntityPageComponent } from './modules/+admin/components/entity-page/entity-page.component';

export const routes: Routes = [
  { path: '', component: FrontpageComponent },
  { path: 'register', component: RegisterPageComponent },
  { path: 'admin', component: AdminPageComponent },
  { path: 'admin/view/:entity', component: EntityPageComponent}
];
