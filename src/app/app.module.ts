import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ComponentInteractionComponent } from './component-interaction/component-interaction.component';
import { BindingsComponent } from './bindings/bindings.component';
import { FormsModule } from '@angular/forms';
import { DirectivesComponent } from './directives/directives.component';
import { StudentListComponent } from './student-list/student-list.component';
import { CourseListComponent } from './course-list/course-list.component';
import { SarviceService } from './sarvice.service';
import{HttpClientModule} from '@angular/common/http';
import { PageNotfoundComponent } from './page-notfound/page-notfound.component';
import { CourseDetailsComponent } from './course-details/course-details.component'
@NgModule({
  declarations: [
    AppComponent,
   
    ComponentInteractionComponent,
        BindingsComponent,
        DirectivesComponent,
        StudentListComponent,
        CourseListComponent,
        PageNotfoundComponent,
        CourseDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [SarviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
