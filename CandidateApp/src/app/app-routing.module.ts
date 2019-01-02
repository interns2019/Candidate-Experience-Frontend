import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CandidateLoginComponent } from './candidate-login/candidate-login.component';
import { CandidateFeedbackComponent } from './candidate-feedback/candidate-feedback.component';
import {CandidateAnalysisComponent} from './candidate-analysis/candidate-analysis.component';
import {HrLoginComponent} from './hr-login/hr-login.component';
import {MonthlyAnalysisComponent} from './candidate-analysis/monthly-analysis/monthly-analysis.component';
import {CommentAnalysisComponent} from './candidate-analysis/comment-analysis/comment-analysis.component';
import {YearlyAnalysisComponent} from './candidate-analysis/yearly-analysis/yearly-analysis.component';
import { AuthGuard } from './auth/auth.guard';
import { AuthAdminGuard } from './auth/auth-admin.guard';


const routes: Routes =
[{ path: 'login', component: CandidateLoginComponent },
{  path: 'feedback', component: CandidateFeedbackComponent,canActivate:[AuthGuard]},
  {  path: 'analysis', component: CandidateAnalysisComponent, canActivate:[AuthAdminGuard]},
  {  path: 'hrlogin', component: HrLoginComponent},
  {  path: 'monthly', component: MonthlyAnalysisComponent, canActivate:[AuthAdminGuard]},
  {  path: 'yearly', component: YearlyAnalysisComponent, canActivate:[AuthAdminGuard]},
  {  path: 'comment', component: CommentAnalysisComponent, canActivate:[AuthAdminGuard]},
{path: '', redirectTo: 'login', pathMatch: 'full' } //redirecting
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers:[AuthGuard, AuthAdminGuard]
})
export class AppRoutingModule { }
