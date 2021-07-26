import { Component, OnInit } from '@angular/core';
import { DocenteService } from '../../services/docente.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {
  
  items:any;
  itemEditar:any = {nombre:'',apellido:'',email:'',password:''};
  user:string = localStorage.getItem("user");


  constructor(private cnx : DocenteService) {
    this.cnx.retornaItems().subscribe(items =>{
      this.items=items;
      //console.log(this.items);
    })
   }

  ngOnInit(): void {
  }

  editar(item){
    console.log(item);
    this.itemEditar = item;
  }

  editarForm(){
    this.cnx.editar(this.itemEditar);
  }

}
