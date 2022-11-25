import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatRadioModule } from '@angular/material/radio';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatCardModule } from '@angular/material/card';

import { HomeComponent } from './pages/home/home.component';
import { GettingStartedComponent } from './pages/gettingstarted/gettingstarted.component';

import { HttpClientModule } from '@angular/common/http';
import { NgxAudioPlayerModule } from 'projects/ngx-audio-player/src/public_api';
import { MatButtonModule } from '@angular/material/button';

import {NavBarModule} from './shared/navbar';
import {FooterModule} from './shared/footer';
import { RegisterComponent } from './form-login/register/register.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { ParentInputComponent } from './input/parent-input/parent-input.component';
import { ChildInputComponent } from './input/child-input/child-input.component';
import { ParentOutputComponent } from './output/parent-output/parent-output.component';
import { ChildOutputComponent } from './output/child-output/child-output.component';
import { LoginComponent } from './form-login/login/login.component';
import { ProfileComponent } from './profile/profile/profile.component';
import { MutipleAvatarComponent } from './upload/multiple-avatar/mutiple-avatar.component';
import {AngularFireModule} from '@angular/fire';
import {AngularFireStorageModule} from '@angular/fire/storage';
import {environment} from '../environments/environment.prod';
import { SingerComponent } from './upload/singer-avatar/singer.component';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatSelectModule} from '@angular/material/select';
import {AuthGuard} from './sevurity/auth.guard';

export const appRoutes: Routes = [
  { path: '', component: HomeComponent, data: { title: 'Home' } },
  {
    path: 'guide/getting-started',
    component: GettingStartedComponent,
    data: { title: 'Getting Started' }
  },
  {path: 'register', component: RegisterComponent},
  {path: 'login', component: LoginComponent},
  {path: 'profile', component: ProfileComponent, canActivate: [AuthGuard]}
];
// tslint:disable-next-line:max-line-length
@NgModule({declarations: [AppComponent, HomeComponent, GettingStartedComponent, RegisterComponent, ParentInputComponent, ChildInputComponent, ParentOutputComponent, ChildOutputComponent, LoginComponent, ProfileComponent, MutipleAvatarComponent, SingerComponent],
  imports: [
    HttpClientModule,
    BrowserModule,
    MatCardModule,
    MatToolbarModule,
    MatIconModule,
    MatInputModule,
    MatRadioModule,
    MatCheckboxModule,
    MatSlideToggleModule,
    MatButtonModule,
    BrowserAnimationsModule,
    NavBarModule, FooterModule,
    NgxAudioPlayerModule,
    AngularFireStorageModule,
    MatSelectModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    RouterModule.forRoot(appRoutes, {useHash: false}), MatFormFieldModule, MatInputModule, FormsModule, ReactiveFormsModule, MatProgressSpinnerModule, MatProgressBarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

}
