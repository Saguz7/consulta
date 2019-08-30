  import {Component, OnInit} from '@angular/core';
  import {Router} from '@angular/router';
  import {Apollo} from 'apollo-angular';
  import gql from 'graphql-tag';
  import { Observable,Observer } from 'rxjs';
  declare var M: any;
 @Component({
  selector: 'app-home', templateUrl: './home.component.html', styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(
      private router?: Router,
      private apollo?: Apollo
    ){}
    ngOnInit() {
    }

}
