import { Component, EventEmitter, OnInit, Output } from '@angular/core';

import { HttpClient } from '@angular/common/http';

import listadeImagenes from 'C:/Users/cebol/Angular/PracticaAngularFirebase/src/assets/json/archivo.json';
import { ImagenFirestoreService } from 'src/app/service/imagen-firestore.service';
import { FormControl } from '@angular/forms';
import { galeria } from 'src/app/domain/modelo';

@Component({
  selector: 'app-galeria',
  templateUrl: './galeria.component.html',
  styleUrls: ['./galeria.component.scss']
})
export class GaleriaComponent implements OnInit {

  filtro ='';

  responsiveOptions: any; 
  imagenes: any;
  g:any;
  
  vector:galeria[]=[];
  
  constructor(private http: HttpClient, private imagenService: ImagenFirestoreService) {
    this.responsiveOptions = [
      {
          breakpoint: '1024px',
          numVisible: 3,
          numScroll: 3
      },
      {
          breakpoint: '768px',
          numVisible: 2,
          numScroll: 2
      },
      {
          breakpoint: '560px',
          numVisible: 1,
          numScroll: 1
      }
  ];
  
  this.vector = [];
   }

  ngOnInit(): void {
    console.log("ng0nInit")
    this.imagenes = this.imagenService.getContactos();

    console.log(this.imagenes);

    this.imagenes.subscribe((data:any)=>{
      const aux:any = data;
      this.g = aux;
      console.log("datos....", this.g)
    })
    
    a: galeria;
      this.imagenes.subscribe((a: any)  => this.vector = a);
  }

  
}
