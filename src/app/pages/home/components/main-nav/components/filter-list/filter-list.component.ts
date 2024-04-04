import { Component, Input } from '@angular/core';
import { MainNavList } from 'app/core/interfaces/pages';

@Component({
  selector: 'app-filter-list',
  templateUrl: './filter-list.component.html',
  styleUrl: './filter-list.component.scss',
})
export class FilterListComponent {
  @Input() itemData!: MainNavList;
}
