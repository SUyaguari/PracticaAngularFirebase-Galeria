import { Component, OnInit } from '@angular/core';
import { galeria } from 'src/app/domain/modelo';
import { ImagenFirestoreService } from 'src/app/service/imagen-firestore.service';
import firebase from 'firebase/compat/app' ;
import "firebase/compat/storage";
import "firebase/compat/firestore" ;
import { Router } from '@angular/router';

@Component({
  selector: 'app-cargar-imagen',
  templateUrl: './cargar-imagen.component.html',
  styleUrls: ['./cargar-imagen.component.scss']
})
export class CargarImagenComponent implements OnInit {

  galeria: galeria = new galeria();

  enlace: any;

  constructor(private imagenService: ImagenFirestoreService, private route: Router) { }

  ngOnInit(): void {
    
  }

 subir(enlace: string) { 
    console.log("archivo",enlace," guardado")
 this.galeria.image=enlace;
 console.log("archivo: ",this.galeria.image, "esta guardado en la base");
}


public cambioArchivo = async(event:any)=> {
  const archivo = event.target.files[0];
  const storageRef = firebase.storage().ref();
const archivoPath = storageRef.child(archivo.name);
 await archivoPath.put(archivo);
 console.log("archivo cargado ", archivo.name);
  this.enlace = await archivoPath.getDownloadURL(); 
  this.galeria.image=this.enlace;
  console.log(this.enlace) 
  this.subir(this.enlace);
}

guardar(){
  console.log("Hola", this.galeria);
  this.imagenService.save(this.galeria);
  this.route.navigate(['galeria']);
}

}
