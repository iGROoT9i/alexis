import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-docente',
  templateUrl: './docente.component.html',
  styleUrls: ['./docente.component.css']
})
export class DocenteComponent implements OnInit {
  
  constructor(private router: Router) { }

  ngOnInit(): void {
    this.inicio();
  }

  inicio(){
  let user:string = localStorage.getItem("user");

    if(user != undefined){
      
      
    }else{
      this.router.navigate(['/login']);
    }
  }

  salir(){
    localStorage.removeItem("user");
    this.router.navigate(['/login']);
  }
}
