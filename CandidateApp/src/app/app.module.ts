import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CookieService } from 'angular2-cookie/services/cookies.service'; // for cookies
import { CandidateLoginComponent } from './candidate-login/candidate-login.component';
import { CandidateFeedbackComponent } from './candidate-feedback/candidate-feedback.component';
import { FormsModule } from '@angular/forms'; // for tow way data binding

import {HttpModule} from "@angular/http"; 
import { Globals } from './globals';
import { CandidateAnalysisComponent } from './candidate-analysis/candidate-analysis.component';
import { HrLoginComponent } from './hr-login/hr-login.component';
import { MonthlyAnalysisComponent } from './candidate-analysis/monthly-analysis/monthly-analysis.component';
import { YearlyAnalysisComponent } from './candidate-analysis/yearly-analysis/yearly-analysis.component';
import { CommentAnalysisComponent } from './candidate-analysis/comment-analysis/comment-analysis.component' // global variables
import { DatePipe } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatTabsModule} from '@angular/material/tabs';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatCardModule} from '@angular/material/card';
import {MatListModule} from '@angular/material/list';
import {MatDividerModule} from '@angular/material/divider';
import {MatStepperModule} from '@angular/material/stepper';
import {MatFormFieldModule} from '@angular/material/form-field';
import { RouterModule } from '@angular/router';
import { AuthGuard } from './auth/auth.guard';
import {TokenInterceptorService} from './auth/token-interceptor.service';
import { AuthAdminGuard } from './auth/auth-admin.guard';
import { HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http'; // for http request
@NgModule({
  declarations: [
    AppComponent,
    CandidateLoginComponent,
    CandidateFeedbackComponent,
    CandidateAnalysisComponent,
    HrLoginComponent,
    MonthlyAnalysisComponent,
    YearlyAnalysisComponent,
    CommentAnalysisComponent
  ],
  imports: [MatListModule,MatDividerModule,MatStepperModule,MatFormFieldModule,
    MatCardModule,
    MatButtonToggleModule,
    MatButtonModule,
    MatInputModule,
    BrowserModule,
    HttpModule,
    AppRoutingModule,
    FormsModule, // for tow way data binding
    HttpClientModule, // for http request
    BrowserAnimationsModule,
    MatTabsModule
  ],
  providers: [
    CookieService,
    Globals,
    DatePipe,
    AuthGuard,
    AuthAdminGuard,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptorService,
      multi: true
    }
  ], // for cookies
  bootstrap: [AppComponent]
})
export class AppModule { }
