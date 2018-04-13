import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { FechaActualComponent } from './fecha-actual/fecha-actual.component';
import { CopyrightComponent } from './copyright/copyright.component';
import { ViewModelComponent } from './view-model/view-model.component';
import { EjMetodoComponent } from './ej-metodo/ej-metodo.component';
import { EjpropertybindingComponent } from './ejpropertybinding/ejpropertybinding.component';
import { EjeventbindingComponent } from './ejeventbinding/ejeventbinding.component';
import { Ej2bindingComponent } from './ej2binding/ej2binding.component';
import { EjdirectivaIfComponent } from './ejdirectiva-if/ejdirectiva-if.component';
import { EjdirectivaStyleComponent } from './ejdirectiva-style/ejdirectiva-style.component';
import { EjdirectivaClassComponent } from './ejdirectiva-class/ejdirectiva-class.component';
import { EjdirectivangforComponent } from './ejdirectivangfor/ejdirectivangfor.component';
import { ArrayObjetosngForComponent } from './array-objetosng-for/array-objetosng-for.component';
import { EjdirectivangSwitchComponent } from './ejdirectivang-switch/ejdirectivang-switch.component';
import { MenuitemDirective } from './menuitem.directive';
import { EjmidirectivaComponent } from './ejmidirectiva/ejmidirectiva.component';
import { PadreComponent } from './padre/padre.component';
import { HijoComponent } from './hijo/hijo.component';


@NgModule({
  declarations: [
    AppComponent,
    FechaActualComponent,
    CopyrightComponent,
    ViewModelComponent,
    EjMetodoComponent,
    EjpropertybindingComponent,
    EjeventbindingComponent,
    Ej2bindingComponent,
    EjdirectivaIfComponent,
    EjdirectivaStyleComponent,
    EjdirectivaClassComponent,
    EjdirectivangforComponent,
    ArrayObjetosngForComponent,
    EjdirectivangSwitchComponent,
    MenuitemDirective,
    EjmidirectivaComponent,
    PadreComponent,
    HijoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
