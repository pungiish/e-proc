import { Routes } from '@angular/router';
import { TestComponent } from './components/test/test.component';
import { AppComponent } from './app.component';

export const routes: Routes = [
  {
    path: '',
    component: AppComponent,
  }
  , {
    //this will group all the component into pages component in single view with the side menu par
    path: 'pages',
    loadChildren: () => import('../../../../libs/dashboard/src/lib/pages.module')
      .then(m => m.PagesModule),
  }

];
