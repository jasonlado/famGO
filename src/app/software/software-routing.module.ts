import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NavigationComponent } from './navigation/navigation.component';
import { BookComponent } from './book/book.component';
import { DestinationComponent } from './destination/destination.component';
import { HistoryComponent } from './history/history.component';

const routes: Routes = [
  {
    path: 'navigation', component: NavigationComponent,

    children: [
      { path: 'dashboard', component: DashboardComponent },
      { path: 'booking', component: BookComponent },
      { path: 'destination', component: DestinationComponent },
      { path: 'bookingHistory', component: HistoryComponent },
      { path: '', redirectTo: 'booking', pathMatch: 'full' },


    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SoftwareRoutingModule { }
