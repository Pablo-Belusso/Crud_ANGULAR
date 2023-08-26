import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() { }

  showOnConsole(msg: string): void {
    console.log(msg)
  }

}
