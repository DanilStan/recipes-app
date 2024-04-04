import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { MainNavComponent } from './components/main-nav/main-nav.component';
import { FilterListComponent } from './components/main-nav/components/filter-list/filter-list.component';
import { MainNavDataService } from './services/main-nav-data.service';

@NgModule({
  declarations: [HomeComponent, MainNavComponent, FilterListComponent],
  imports: [CommonModule],
  exports: [HomeComponent],
  providers: [MainNavDataService],
})
export class HomeModule {}
