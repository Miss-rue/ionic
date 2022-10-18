import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ChfpasswordPageRoutingModule } from './chfpassword-routing.module';

import { ChfpasswordPage } from './chfpassword.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ChfpasswordPageRoutingModule
  ],
  declarations: [ChfpasswordPage]
})
export class ChfpasswordPageModule {}
