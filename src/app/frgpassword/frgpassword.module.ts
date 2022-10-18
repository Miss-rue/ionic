import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FrgpasswordPageRoutingModule } from './frgpassword-routing.module';

import { FrgpasswordPage } from './frgpassword.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FrgpasswordPageRoutingModule
  ],
  declarations: [FrgpasswordPage]
})
export class FrgpasswordPageModule {}
