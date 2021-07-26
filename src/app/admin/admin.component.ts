import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.inicio();
  }

  
  inicio(){
    let user:string = localStorage.getItem("comision");
  
      if(user != undefined){
        
        
      }else{
        this.router.navigate(['/login']);
      }
    }
  
    salir(){
      localStorage.removeItem("comision");
      this.router.navigate(['/login']);
    }
}
