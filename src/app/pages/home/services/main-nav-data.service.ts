import { Injectable } from '@angular/core';
import { MainNavList } from 'app/core/interfaces/pages';

@Injectable()
export class MainNavDataService {
  constructor() {}
  navData: MainNavList[] = [
    {
      id: 1,
      img: 'assets/images/icons/sprite.svg#icon-breakfest',
      title: 'breakfest',
    },
    {
      id: 2,
      img: 'assets/images/icons/sprite.svg#icon-lunch',
      title: 'lunch',
    },
    {
      id: 3,
      img: 'assets/images/icons/sprite.svg#icon-dinner',
      title: 'dinner',
    },
    {
      id: 4,
      img: 'assets/images/icons/sprite.svg#icon-dessert',
      title: 'dessert',
    },
    {
      id: 5,
      img: 'assets/images/icons/sprite.svg#icon-quick-bite',
      title: 'quick bite!',
    },
  ];
}
