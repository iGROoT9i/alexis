import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DocenteRoutingModule } from './docente-routing.module';
import { DocenteComponent } from './docente.component';
import { LegajoComponent } from './legajo/legajo.component';
import { PerfilComponent } from './perfil/perfil.component';
import { FormsModule } from '@angular/forms';
import  {  PdfViewerModule  }  from  'ng2-pdf-viewer';

@NgModule({
  declarations: [
    DocenteComponent,
    LegajoComponent,
    PerfilComponent
  ],
  imports: [
    CommonModule,
    DocenteRoutingModule,
    FormsModule,
    PdfViewerModule
  ]
})
export class DocenteModule { }
