import { Routes } from '@angular/router';
import { InvitacionComponent } from './invitacion/invitacion.component';

export const routes: Routes = [
  { path: 'invitacion/:nombre/:numero', component: InvitacionComponent },
  { path: '', redirectTo: '/invitacion/default/0', pathMatch: 'full' },
];
