import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CargarImagenComponent } from './pages/cargar-imagen/cargar-imagen.component';
import { GaleriaComponent } from './pages/galeria/galeria.component';

const routes: Routes = [
  {path: "imagen", component: CargarImagenComponent},
  {path: "galeria", component: GaleriaComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
