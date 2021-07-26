import { Injectable } from '@angular/core';
import { AngularFirestore,AngularFirestoreCollection,AngularFirestoreDocument} from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

export interface File {
  name: string;
  docente: string
}

@Injectable({
  providedIn: 'root'
})
export class FilesService {

  private itemsCollection: AngularFirestoreCollection<File>;
  private itemDoc: AngularFirestoreDocument<File>;
  items: Observable<File[]>;
  constructor(private afs: AngularFirestore) {
    this.itemsCollection = afs.collection<File>('files');

    this.items = this.itemsCollection.snapshotChanges().pipe(
      map((actions) =>
        actions.map((a) => {
          const data = a.payload.doc.data() as File;
          const id = a.payload.doc.id;
          return { id, ...data };
        })
      )
    );
  }

  retornaItems() {
    return this.items;
  }

  addItem(item: File) {
    this.itemsCollection.add(item);
  }

  eliminar(id) {
    this.itemDoc = this.afs.doc<File>('files/' + id);
    this.itemDoc.delete();
  }

}
