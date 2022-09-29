import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';

const MATERIAL_COMPONENTS = [
  MatButtonModule
];

@NgModule({
  imports: [
    MATERIAL_COMPONENTS
  ],
  exports: [
    MATERIAL_COMPONENTS
  ]
})
export class MaterialModule { }
