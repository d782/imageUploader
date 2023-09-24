import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ImageCardComponent } from './components/image-card/image-card.component';
import { ImageAppComponent } from './components/image-app/image-app.component';

const routes: Routes = [
  {
    path:'',
    component:ImageAppComponent
  },
  {
    path:'uploaded/:idfile',
    component:ImageCardComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
