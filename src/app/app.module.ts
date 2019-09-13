import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule,MatSelectModule,MatInputModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MetamodelComponent } from './metamodel/metamodel.component';
import { ConfiguratorComponent } from './configurator/configurator.component';
import { EventConfiguratorComponent } from './event-configurator/event-configurator.component';
import { SimulationEntityConfiguratorComponent } from './simulation-entity-configurator/simulation-entity-configurator.component';

@NgModule({
  declarations: [
    AppComponent,
    MetamodelComponent,
    ConfiguratorComponent,
    EventConfiguratorComponent,
    SimulationEntityConfiguratorComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    BrowserAnimationsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
