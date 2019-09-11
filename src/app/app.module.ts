import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MetamodelComponent } from './metamodel/metamodel.component';
import { ConfiguratorComponent } from './configurator/configurator.component';

@NgModule({
  declarations: [
    AppComponent,
    MetamodelComponent,
    ConfiguratorComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
