import { HttpModule } from '@angular/http';
import { ParentService } from './parent.service';
import { ChildService } from './child.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AuscultationComponentComponent } from './auscultation-component/auscultation-component.component';
import { TestComponent } from './test/test.component';

@NgModule({
  declarations: [
    AppComponent,
    AuscultationComponentComponent,
    TestComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    HttpModule
  ],
  providers: [ ChildService, ParentService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
