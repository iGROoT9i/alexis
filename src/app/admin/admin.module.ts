import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { EvaluacionComponent } from './evaluacion/evaluacion.component';
import { ComisionComponent } from './comision/comision.component';
import { CalificacionComponent } from './calificacion/calificacion.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AdminComponent,
    EvaluacionComponent,
    ComisionComponent,
    CalificacionComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    FormsModule
  ]
})
export class AdminModule { }
