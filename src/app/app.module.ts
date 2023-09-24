import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ImageUploaderInputComponent } from './components/image-uploader-input/image-uploader-input.component';
import { ImageUploaderDragComponent } from './components/image-uploader-drag/image-uploader-drag.component';
import { ImageUploaderComponent } from './components/image-uploader/image-uploader.component';
import { DragDirective } from './directives/drag.directive';
import { LoadingComponent } from './components/loading/loading.component';
import { ImageCardComponent } from './components/image-card/image-card.component';
import { FormsModule } from '@angular/forms';
import { ImageAppComponent } from './components/image-app/image-app.component';

@NgModule({
  declarations: [
    AppComponent,
    ImageUploaderComponent,
    ImageUploaderInputComponent,
    ImageUploaderDragComponent,
    DragDirective,
    LoadingComponent,
    ImageCardComponent,
    ImageAppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
