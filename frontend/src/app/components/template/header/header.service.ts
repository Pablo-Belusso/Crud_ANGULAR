import { Injectable } from '@angular/core';
import { HeaderData } from './header-data.model';

@Injectable({
  providedIn: 'root'
})
export class HeaderService {

  headerData: HeaderData

  constructor() { }
}
