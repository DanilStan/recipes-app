import { MainNavList } from 'app/core/interfaces/pages';
import { MainNavDataService } from './../../services/main-nav-data.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-nav',
  templateUrl: './main-nav.component.html',
  styleUrl: './main-nav.component.scss',
})
export class MainNavComponent implements OnInit {
  navData!: MainNavList[];

  constructor(private mainNavDataService: MainNavDataService) {}
  ngOnInit(): void {
    this.navData = this.mainNavDataService.navData;
  }
}
