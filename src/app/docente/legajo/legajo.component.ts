import { Component, OnInit } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/storage';
import { Observable } from 'rxjs';
import { FilesService } from '../../services/files.service';

@Component({
  selector: 'app-legajo',
  templateUrl: './legajo.component.html',
  styleUrls: ['./legajo.component.css']
})
export class LegajoComponent implements OnInit {

  items:any;
  profileUrl: Observable<string | null>;
  user:string = localStorage.getItem("user");
  

  constructor(private storage: AngularFireStorage,private cnx : FilesService) { 
    

    this.cnx.retornaItems().subscribe(items =>{
      this.items=items;
      //console.log(this.items);
    })
  }

  ngOnInit(): void {
  }



  uploadFile(event) {


    

    // console.log(event.path[0].files[0].name);
    //console.log(event.target.files[0].name);
    const file = event.target.files[0];
    const filePath = event.target.files[0].name;
    const task = this.storage.upload(filePath, file);

    let item:any = {name: filePath,docente: this.user};
    this.cnx.addItem(item); 
  }

  eliminar(id){

    //console.log(id);
    this.cnx.eliminar(id);
  }


  ver(name){
    const ref = this.storage.ref(name);
    this.profileUrl = ref.getDownloadURL();

   
  }
  
}
