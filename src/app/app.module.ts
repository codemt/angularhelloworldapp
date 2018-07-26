import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule  } from '@angular/forms';
import { AppComponent } from './app.component';
import { UserComponent } from './components/user/user.component';
import { EdituserComponent } from './components/edituser/edituser.component';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    EdituserComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
