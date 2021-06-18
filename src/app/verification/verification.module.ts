import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VerificationRoutingModule } from './verification-routing.module';
import { VerificationComponent } from './verification.component';
import { PhoneVerificationComponent } from './phone-verification/phone-verification.component';

@NgModule({
  declarations: [VerificationComponent, PhoneVerificationComponent],
  imports: [CommonModule, VerificationRoutingModule],
})
export class VerificationModule {}
