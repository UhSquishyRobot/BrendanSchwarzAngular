import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { VideoPageComponent } from './video-page/video-page.component';
import { MusicPageComponent } from './music-page/music-page.component';
import { WritingPageComponent } from './writing-page/writing-page.component';
import { ContactPageComponent } from './contact-page/contact-page.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { HomePageDescriptionComponent } from './home-page-description/home-page-description.component';
import { DomSanitizerPipe } from './dom-sanitizer.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    VideoPageComponent,
    MusicPageComponent,
    WritingPageComponent,
    ContactPageComponent,
    NavBarComponent,
    HomePageDescriptionComponent,
    DomSanitizerPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
