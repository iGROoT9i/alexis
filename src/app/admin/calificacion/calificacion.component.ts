import { Component, OnInit } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/storage';
import { FilesService } from '../../services/files.service';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { CalificacionService } from '../../services/calificacion.service';

@Component({
  selector: 'app-calificacion',
  templateUrl: './calificacion.component.html',
  styleUrls: ['./calificacion.component.css']
})
export class CalificacionComponent implements OnInit {

  docente:any=localStorage.getItem("nombre");

 

  principal1:boolean=true;
  principal2:boolean=false;
  principal3:boolean=false;
  principal4:boolean=false;
  principal5:boolean=false;
  principal6:boolean=false;
  principal7:boolean=false;
  principal8:boolean=false;
  
  verdocumentos:boolean=false;

  items:any;
  user:any=localStorage.getItem("evaluado")
  profileUrl: Observable<string | null>;


  Calificacionlist:any;
  Calificacionedit:any= {
    docente:'',
    puntaje1:'',
    puntaje2:'',
    puntaje3:'',
    puntaje4:'',
    puntaje5:'',
    puntaje6:'',
    puntaje7:'',
    puntaje8:'',
    puntaje9:'',
    puntaje10:'',
    puntaje11:'',
    puntaje12:'',
    puntaje13:'',
    puntaje14:'',
    puntaje15:'',
    puntaje16:'',
    puntaje17:'',
    puntaje18:'',
    puntaje19:'',
    puntaje20:'',
    puntaje21:'',
    puntaje22:'',
    puntaje23:'',
    puntaje24:'',
    puntaje25:'',
  }
  
  puntaje:any= {
    docente: this.user,
    puntaje1:'',
    puntaje2:'',
    puntaje3:'',
    puntaje4:'',
    puntaje5:'',
    puntaje6:'',
    puntaje7:'',
    puntaje8:'',
    puntaje9:'',
    puntaje10:'',
    puntaje11:'',
    puntaje12:'',
    puntaje13:'',
    puntaje14:'',
    puntaje15:'',
    puntaje16:'',
    puntaje17:'',
    puntaje18:'',
    puntaje19:'',
    puntaje20:'',
    puntaje21:'',
    puntaje22:'',
    puntaje23:'',
    puntaje24:'',
    puntaje25:'',
  }
  registro:boolean=true;

  constructor(private storage: AngularFireStorage,private cnx : FilesService,private router: Router,private califc : CalificacionService) {
    this.cnx.retornaItems().subscribe(items =>{
      this.items=items;
      //console.log(this.items);
    });

    this.califc.retornaItems().subscribe(itemsa =>{
      this.Calificacionlist=itemsa;
      
      itemsa.forEach(element => {

console.log(element.docente + " " + this.user);
        if(element.docente===this.user){
          this.registro=false;
        }
        
        
      });
    });
   }

  ngOnInit(): void {
    
  }



  registrarcalificacion(){

    console.log(this.puntaje);
    this.califc.addItem(this.puntaje);
  
  }



  ver(name){
    const ref = this.storage.ref(name);
    this.profileUrl = ref.getDownloadURL();

   
  }

  cambiar(modo){

    if(modo==="1"){
      this.principal1=true;
      this.principal2=false;
      this.principal3=false;
      this.principal4=false;
      this.principal5=false;
      this.principal6=false;
      this.principal7=false;
      this.principal8=false;
      
    }
    if(modo==="2"){
      this.principal1=false;
      this.principal2=true;
      this.principal3=false;
      this.principal4=false;
      this.principal5=false;
      this.principal6=false;
      this.principal7=false;
      this.principal8=false;
      
    }
    if(modo==="3"){
      this.principal1=false;
      this.principal2=false;
      this.principal3=true;
      this.principal4=false;
      this.principal5=false;
      this.principal6=false;
      this.principal7=false;
      this.principal8=false;
      
    }
    if(modo==="4"){
      this.principal1=false;
      this.principal2=false;
      this.principal3=false;
      this.principal4=true;
      this.principal5=false;
      this.principal6=false;
      this.principal7=false;
      this.principal8=false;
      
    }
    if(modo==="5"){
      this.principal1=false;
      this.principal2=false;
      this.principal3=false;
      this.principal4=false;
      this.principal5=true;
      this.principal6=false;
      this.principal7=false;
      this.principal8=false;
      
    }
    if(modo==="6"){
      this.principal1=false;
      this.principal2=false;
      this.principal3=false;
      this.principal4=false;
      this.principal5=false;
      this.principal6=true;
      this.principal7=false;
      this.principal8=false;
      
    }
    if(modo==="7"){
      this.principal1=false;
      this.principal2=false;
      this.principal3=false;
      this.principal4=false;
      this.principal5=false;
      this.principal6=false;
      this.principal7=true;
      this.principal8=false;
      
    }
    if(modo==="8"){
      this.principal1=false;
      this.principal2=false;
      this.principal3=false;
      this.principal4=false;
      this.principal5=false;
      this.principal6=false;
      this.principal7=false;
      this.principal8=true;
      
    }
    
    
  }


  verdoc(){

    if(this.verdocumentos){
    this.verdocumentos=false;

    }else{
      this.verdocumentos=true;
    }
  }

  volver(){
    localStorage.removeItem("evaluado");

    this.router.navigate(['/admin/evaluacion']);

  }



  
 
  
  editar(item){
    console.log(item);
    this.Calificacionedit = item;
  }

  editarForm(){
    this.califc.editar(this.Calificacionedit);
  }
}
