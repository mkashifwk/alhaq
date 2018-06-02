import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';

const routes: Routes = [
	{ path: '', component: AppComponent },
];

export const AppRoutes = RouterModule.forChild(routes);
