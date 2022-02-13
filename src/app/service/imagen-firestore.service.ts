import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { Observable } from 'rxjs';
import { galeria } from '../domain/modelo';

@Injectable({
  providedIn: 'root'
})
export class ImagenFirestoreService {

  constructor(private afs: AngularFirestore, private storage: AngularFireStorage) { 

  }

  save(imagen: galeria){
    const refImagen = this.afs.collection("baseGaleria");

    console.log("guardado", imagen);

    if(imagen.id == null){
      imagen.id = this.afs.createId();
    }


    refImagen.doc(imagen.id).set(Object.assign({},imagen));
    //refImagen.add(Object.assign({},contacto));

  }

  getContactos(): Observable<any[]>{
    const refContactos = this.afs.collection("baseGaleria");
    return refContactos.valueChanges()
  }
}
