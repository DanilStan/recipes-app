import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from 'app/pages/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SubscribeComponent } from './components/subscribe/subscribe.component';

@NgModule({
  declarations: [HeaderComponent, FooterComponent, SubscribeComponent],
  imports: [CommonModule, ReactiveFormsModule, FormsModule],
  exports: [HeaderComponent, FooterComponent, SubscribeComponent],
})
export class CoreModule {}
