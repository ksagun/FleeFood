import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PhoneVerificationComponent } from './phone-verification/phone-verification.component';
import { VerificationComponent } from './verification.component';

const routes: Routes = [
  { path: 'phone', component: PhoneVerificationComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VerificationRoutingModule {}
