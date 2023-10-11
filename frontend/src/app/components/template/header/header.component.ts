import { HeaderService } from './header.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor (private HeaderService: HeaderService) { }

  ngOnInit(): void {     
  }

  get title(): String {
    return this.HeaderService.HeaderData.title
  }

  get icon(): String {
    return this.HeaderService.HeaderData.icon
  }

  get routeUrl(): String {
    return this.HeaderService.HeaderData.routeUrl
  }

}
