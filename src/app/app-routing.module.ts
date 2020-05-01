import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { VideoPageComponent } from './video-page/video-page.component';
import { MusicPageComponent } from './music-page/music-page.component';
import { WritingPageComponent } from './writing-page/writing-page.component';
import { ContactPageComponent } from './contact-page/contact-page.component';


const routes: Routes = [
	{ path: 'home', component: HomePageComponent },
	{ path: 'video', component: VideoPageComponent },
	{ path: 'music', component: MusicPageComponent },
	{ path: 'writing', component: WritingPageComponent },
	{ path: 'contact', component: ContactPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
