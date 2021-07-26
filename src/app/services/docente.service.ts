import { Injectable } from '@angular/core';
import { AngularFirestore,AngularFirestoreCollection,AngularFirestoreDocument} from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';



export interface Docente {
  nombre: string;
  apellido: string;
  email: string;
  password: string;
}


@Injectable({
  providedIn: 'root'
})
export class DocenteService {
  private itemsCollection: AngularFirestoreCollection<Docente>;
  private itemDoc: AngularFirestoreDocument<Docente>;
  items: Observable<Docente[]>;
  constructor(private afs: AngularFirestore) {
    this.itemsCollection = afs.collection<Docente>('docente');

    this.items = this.itemsCollection.snapshotChanges().pipe(
      map((actions) =>
        actions.map((a) => {
          const data = a.payload.doc.data() as Docente;
          const id = a.payload.doc.id;
          return { id, ...data };
        })
      )
    );
  }

  retornaItems() {
    return this.items;
  }

  addItem(item: Docente) {
    this.itemsCollection.add(item);
  }

  eliminar(id) {
    this.itemDoc = this.afs.doc<Docente>('docente/' + id);
    this.itemDoc.delete();
  }

  editar(item) {
    this.itemDoc = this.afs.doc<Docente>('docente/' + item.id);
    this.itemDoc.update(item);
  }
}
