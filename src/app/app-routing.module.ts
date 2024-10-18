import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './components/home/home.component';
import {AppComponent} from './app.component';
import {NgModule} from '@angular/core';

export const routes: Routes = [
  { path: '', redirectTo: '/Root', pathMatch: 'full' },
  {path: 'Root', component: AppComponent},
  {path: 'Home', component: HomeComponent},
  { path: '**', component: AppComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}

