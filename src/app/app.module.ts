import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import {CarouselModule} from 'primeng/carousel';
import { ButtonModule } from 'primeng/button';
import { AngularFireModule }  from '@angular/fire/compat'
import { AngularFireStorageModule } from '@angular/fire/compat/storage';
import { CargarImagenComponent } from './pages/cargar-imagen/cargar-imagen.component'
import {InputTextModule} from 'primeng/inputtext';
import { DividerModule } from 'primeng/divider';
import {FileUploadModule} from 'primeng/fileupload';
import { environment } from 'src/environments/environment';
import { GaleriaComponent } from './pages/galeria/galeria.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
import { FilterPipe } from './pipe/filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    CargarImagenComponent,
    GaleriaComponent,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ButtonModule,
    HttpClientModule,
    CarouselModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireStorageModule,
    InputTextModule,
    DividerModule,
    FileUploadModule,
    FormsModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
