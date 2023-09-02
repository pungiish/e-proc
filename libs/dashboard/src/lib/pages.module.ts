import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NebularModule } from '@e-proc/nebular';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { HomeComponent } from './pages/home/home.component';
import { PagesComponent } from './pages.component';
import { PagesRoutingModule } from './pages-routing.module';
import { TranslateModule } from '@ngx-translate/core';
import { CoreModule, I18nService } from '@e-proc/core';

const COMPONENTS = [
  PagesComponent,
  HomeComponent,
  NotFoundComponent,
];


@NgModule({
  imports: [
    //  RouterModule,

    TranslateModule,
     CommonModule,
     CoreModule,
     NebularModule,
     PagesRoutingModule,
    ],
  declarations: [...COMPONENTS],
  exports: [...COMPONENTS ],
  providers:[I18nService, TranslateModule]
})
export class PagesModule {}