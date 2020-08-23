import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainPageComponent } from './main-page/main-page.component';
import { WatchListComponent } from './watch-list/watch-list.component';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
  { path: 'mainpage', component: MainPageComponent },
  { path: 'watchlist', component: WatchListComponent },
  { path: '', redirectTo: '/mainpage', pathMatch: 'full' },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
