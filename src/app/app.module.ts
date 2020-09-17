import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { WorkComponent } from './work/work.component';
import { ContactComponent } from './contact/contact.component';
import { WhoamiComponent } from './about/whoami/whoami.component';
import { ExpertiseComponent } from './about/expertise/expertise.component';
import { TimelineComponent } from './about/timeline/timeline.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AboutComponent,
    HomeComponent,
    WorkComponent,
    ContactComponent,
    WhoamiComponent,
    ExpertiseComponent,
    TimelineComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
