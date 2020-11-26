import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { MaterialModule } from '@material/material.module';
import { PhotosComponent } from './components/photos/photos.component';

@NgModule({
  declarations: [AppComponent, PhotosComponent],
  imports: [BrowserModule, BrowserAnimationsModule, MaterialModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
