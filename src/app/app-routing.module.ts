import { NgModule } 						from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } 	from './pages/dashboard/dashboard.component';
import { HeroesComponent } 			from './pages/heroes/heroes.component';
import { HeroDetailComponent } 	from './shared/hero-detail/hero-detail.component';

const routes: Routes = [
	{ path: '', redirectTo: '/dasboard', pathMatch: 'full' },
	{	path: 'dashboard', component: DashboardComponent },
	{	path: 'detail/:id', component: HeroDetailComponent },
	{	path: 'heroes', component: HeroesComponent }
]

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule {}