import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VideoDetailComponent } from './video-detail/video-detail.component';
import { VideoListComponent } from './video-list/video-list.component';
import { VideoCenterComponent } from './video-center/video-center.component';
import { VideoUploadComponent } from './video-upload/video-upload.component';
import { AppComponent } from './app.component';
const routes: Routes = [

  { path :'video-detail', component:VideoDetailComponent},
{ path :'video-list',component:VideoListComponent},
{ path :'videos',component:VideoCenterComponent},
{ path :'app-video-upload',component:VideoUploadComponent},
{path:'app-root',component:AppComponent},
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
