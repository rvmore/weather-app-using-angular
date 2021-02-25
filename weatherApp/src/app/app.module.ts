import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// MODULE IMPORTS
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {TableModule} from 'primeng/table';
import { NgxSpinnerModule } from 'ngx-spinner';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WeatherComponent } from './weather/weather.component';

// UI Library Import
import { UiLibraryModule } from 'ui-library';

// SERVICE IMPORTS
import { CommonService } from './shared/services/common.service';
import { DatePipe } from '@angular/common';
@NgModule({
  declarations: [
    AppComponent,
    WeatherComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgxChartsModule,
    BrowserAnimationsModule,
    TableModule,
    NgxSpinnerModule,
    UiLibraryModule
  ],
  providers: [CommonService, DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
