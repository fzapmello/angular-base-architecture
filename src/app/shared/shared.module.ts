import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';

import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [],
  imports: [
    // vendor
    CommonModule,
    RouterModule,

    // material
    MatCardModule,
    MatButtonModule
  ],
  exports: [
    // vendor
    CommonModule,
    RouterModule,

    // material
    MatCardModule,
    MatButtonModule,
  ]
})
export class SharedModule {}
