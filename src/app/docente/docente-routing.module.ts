import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DocenteComponent } from './docente.component';
import { LegajoComponent } from './legajo/legajo.component';
import { PerfilComponent } from './perfil/perfil.component';

const routes: Routes = [{ path: '', component: DocenteComponent ,
  children: [
    {
      path: 'legajo',
      component: LegajoComponent,
      
    },
    {
      path: 'perfil',
      component: PerfilComponent,
      
    },
    {
      path: '**',
      redirectTo: 'perfil'
    }
   
  ]}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DocenteRoutingModule { }
