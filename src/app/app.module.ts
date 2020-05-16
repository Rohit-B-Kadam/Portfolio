import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { SpecializingInComponent } from './ui/specializing-in/specializing-in.component';
import { ProjectCounterComponent } from './ui/project-counter/project-counter.component';
import { PersonalProjectComponent } from './ui/personal-project/personal-project.component';
import { MyExperienceComponent } from './ui/my-experience/my-experience.component';
import { FooterComponent } from './ui/footer/footer.component';
import { ContactComponent } from './ui/contact/contact.component';
import { NavbarComponent } from './ui/navbar/navbar.component';
import { HeroComponent } from './ui/hero/hero.component';


@NgModule({
  declarations: [
    AppComponent,
    SpecializingInComponent,
    ProjectCounterComponent,
    PersonalProjectComponent,
    MyExperienceComponent,
    FooterComponent,
    ContactComponent,
    NavbarComponent,
    HeroComponent,
  ],
  imports: [
    BrowserModule  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
