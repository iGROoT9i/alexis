import { Component, OnInit } from '@angular/core';
import { DocenteService } from '../../services/docente.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-evaluacion',
  templateUrl: './evaluacion.component.html',
  styleUrls: ['./evaluacion.component.css']
})
export class EvaluacionComponent implements OnInit {

  items:any;
  constructor(private cnx : DocenteService,private router: Router) {
    this.cnx.retornaItems().subscribe(items =>{
      this.items=items;
      //console.log(this.items);
    })
   }

  ngOnInit(): void {
  }

  seleccionar(id){

    localStorage.setItem("evaluado",id.id)

    localStorage.setItem("nombre",id.nombre + " "+ id.apellido)
    this.router.navigate(['/admin/calificacion']);
  }

}
