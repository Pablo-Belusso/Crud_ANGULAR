import { Injectable } from '@angular/core';
import { HeaderData } from './header-data.model';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HeaderService {

  private _headerData: BehaviorSubject <HeaderData>;

  constructor() { 
    this._headerData: new BehaviorSubject <HeaderData> ({
      title: 'Início',
      icon: 'home',
      routeUrl: ''
    });
  }

  get HeaderData(): HeaderData {
    return this._headerData.value
  }

  set HeaderData(HeaderData: HeaderData) {
    this._headerData.next(headerData)
  }

}
