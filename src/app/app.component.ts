import { Component, OnInit } from '@angular/core';
import { MainNavComponent } from './main-nav/main-nav.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  ngOnInit(): void {
  }
  title = 'AnimeX';
}
