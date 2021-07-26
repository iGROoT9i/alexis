import { Injectable } from '@angular/core';
import { AngularFirestore,AngularFirestoreCollection,AngularFirestoreDocument} from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

export interface Calificacion {
    docente: string;
    puntaje1: string;
    puntaje2: string;
    puntaje3: string;
    puntaje4: string;
    puntaje5: string;
    puntaje6: string;
    puntaje7: string;
    puntaje8: string;
    puntaje9: string;
    puntaje10: string;
    puntaje11: string;
    puntaje12: string;
    puntaje13: string;
    puntaje14: string;
    puntaje15: string;
    puntaje16: string;
    puntaje17: string;
    puntaje18: string;
    puntaje19: string;
    puntaje20: string;
    puntaje21: string;
    puntaje22: string;
    puntaje23: string;
    puntaje24: string;
    puntaje25: string;
}


@Injectable({
  providedIn: 'root'
})
export class CalificacionService {

  private itemsCollection: AngularFirestoreCollection<Calificacion>;
  private itemDoc: AngularFirestoreDocument<Calificacion>;
  items: Observable<Calificacion[]>;
  constructor(private afs: AngularFirestore) {
    this.itemsCollection = afs.collection<Calificacion>('calificacion');

    this.items = this.itemsCollection.snapshotChanges().pipe(
      map((actions) =>
        actions.map((a) => {
          const data = a.payload.doc.data() as Calificacion;
          const id = a.payload.doc.id;
          return { id, ...data };
        })
      )
    );
  }

  retornaItems() {
    return this.items;
  }

  addItem(item: Calificacion) {
    this.itemsCollection.add(item);
  }

  eliminar(id) {
    this.itemDoc = this.afs.doc<Calificacion>('calificacion/' + id);
    this.itemDoc.delete();
  }

  editar(item) {
    this.itemDoc = this.afs.doc<Calificacion>('calificacion/' + item.id);
    this.itemDoc.update(item);
  }
}