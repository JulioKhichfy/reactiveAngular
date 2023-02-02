import {Component, OnInit} from '@angular/core';
import { Observable } from 'rxjs';
import { filter, map, tap } from 'rxjs/operators';
import { LoadingService } from './loading/loading.service';
import { MessagesService } from './messages/messages.service';
import { User } from './model/user';
import { AuthStore } from './services/auth.store';

const AUTH_DATA = "auth_data";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[
    LoadingService,
    MessagesService
  ]
})
export class AppComponent implements  OnInit {

    constructor(public auth: AuthStore) {

    }

    ngOnInit() {
      
    }

  logout() {
    this.auth.logout();
   
  }

}
