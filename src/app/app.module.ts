import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Ng4LoadingSpinnerModule } from 'ng4-loading-spinner';
import { AppComponent } from './app.component';
import { FormsModule} from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './not-found/not-found.component';
import { AuthGuardService as AuthGuard, AuthGuardService} from './auth-guard.service'
import { DataService } from './data.service';
import { SimpleService } from './simple.service';
import { AuthorsComponent } from './authors/authors.component';
import { ChildComponent } from './authors/child/child.component';


@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent,
    AuthorsComponent,
    ChildComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
