import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';
import { EvaluacionComponent } from './evaluacion/evaluacion.component';
import { ComisionComponent } from './comision/comision.component';
import { CalificacionComponent } from './calificacion/calificacion.component';

const routes: Routes = [
  {
    path: '',
    component: AdminComponent,
    children: [
      {
        path: 'evaluacion',
        component: EvaluacionComponent,
      },
      {
        path: 'comision',
        component: ComisionComponent,
      },
      {
        path: 'calificacion',
        component: CalificacionComponent,
      },
      {
        path: '**',
        redirectTo: 'evaluacion',
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}
