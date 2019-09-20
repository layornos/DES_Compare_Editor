import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule,MatSelectModule,MatInputModule, MatButtonModule, MatDivider, MatDividerModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MetamodelComponent } from './metamodel/metamodel.component';
import { ConfiguratorComponent } from './configurator/configurator.component';
import { EventConfiguratorComponent } from './event-configurator/event-configurator.component';
import { SimulationEntityConfiguratorComponent } from './simulation-entity-configurator/simulation-entity-configurator.component';
import { SchedulesConfiguratorComponent } from './schedules-configurator/schedules-configurator.component';
import { CliInputGeneratorComponent } from './cli-input-generator/cli-input-generator.component';
import { AttributeConfiguratorComponent } from './attribute-configurator/attribute-configurator.component';
import { SimulatorTreeViewComponent } from './simulator-tree-view/simulator-tree-view.component';

@NgModule({
  declarations: [
    AppComponent,
    MetamodelComponent,
    ConfiguratorComponent,
    EventConfiguratorComponent,
    SimulationEntityConfiguratorComponent,
    SchedulesConfiguratorComponent,
    CliInputGeneratorComponent,
    AttributeConfiguratorComponent,
    SimulatorTreeViewComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    MatButtonModule,
    MatDividerModule,
    BrowserAnimationsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
