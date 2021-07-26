import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DocenteService } from '../services/docente.service';
import { ComisionService } from '../services/comision.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  modo:boolean = true;

  usuario:any = {nombre: '',apellido:'',email:'',password:''};

  validar:any;
  comisionvalidar:any;

  email:string;
  password:string;

  constructor(private router: Router,private ser:DocenteService,private comision:ComisionService) { 
    this.ser.retornaItems().subscribe(items =>{
      this.validar=items;
      //console.log(this.items);
    })


    this.comision.retornaItems().subscribe(items =>{
      this.comisionvalidar=items;
      //console.log(this.items);
    })
  }

  ngOnInit(): void {
    this.inicio();
  }

  inicio(){
    let user = localStorage.getItem("user");

    if(user != undefined){
      this.router.navigate(['/docente']);
    }
  }
  login(){
    if(this.modo){
      this.modo=false;
    }else{
      this.modo=true;
    }
    
  }


  agregar(){
    this.ser.addItem(this.usuario);

    if(this.modo){
      this.modo=false;
    }else{
      this.modo=true;
    }
  }



  iniciosesion(){

    this.validar.forEach(element => {

      if(this.email === element.email && this.password === element.password){
        localStorage.setItem("user", element.id);

        this.router.navigate(['/docente']);

      }
      
    });

    this.comisionvalidar.forEach(element => {

      if(this.email === element.email && this.password === element.password){


        localStorage.setItem("comision", element.id);

        this.router.navigate(['/admin']);

      }
      
    });

  }
}
