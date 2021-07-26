import { Injectable } from '@angular/core';
import { AngularFirestore,AngularFirestoreCollection,AngularFirestoreDocument} from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';


export interface Comision {
  nombre: string;
  apellido: string;
  email: string;
  password: string;
}

@Injectable({
  providedIn: 'root'
})
export class ComisionService {
  private itemsCollection: AngularFirestoreCollection<Comision>;
  private itemDoc: AngularFirestoreDocument<Comision>;
  items: Observable<Comision[]>;
  constructor(private afs: AngularFirestore) {
    this.itemsCollection = afs.collection<Comision>('comision');

    this.items = this.itemsCollection.snapshotChanges().pipe(
      map((actions) =>
        actions.map((a) => {
          const data = a.payload.doc.data() as Comision;
          const id = a.payload.doc.id;
          return { id, ...data };
        })
      )
    );
  }

  retornaItems() {
    return this.items;
  }

  addItem(item: Comision) {
    this.itemsCollection.add(item);
  }

  eliminar(id) {
    this.itemDoc = this.afs.doc<Comision>('comision/' + id);
    this.itemDoc.delete();
  }

  editar(item) {
    this.itemDoc = this.afs.doc<Comision>('comision/' + item.id);
    this.itemDoc.update(item);
  }
}
