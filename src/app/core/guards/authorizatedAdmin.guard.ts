/**
 * Created by xavi on 2/17/17.
 */
import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import {StorageService} from "../services/storage.service";
 import {User} from "../../core/models/user.model";

@Injectable()
export class AuthorizatedAdminGuard implements CanActivate {
  //Para conocer los datos del usuario
  public user: User;
  constructor(private router: Router,
              private storageService: StorageService) { }

  canActivate() {
     this.user = this.storageService.getCurrentUser();



     if (this.storageService.isAuthenticated() && this.storageService.getCurrentUser().id_rol == 1) {
      // logged in so return true
      if(this.storageService.isExpired()){
           this.storageService.logout();
           window.location.href = "/login";
        }
      return true;

    }

    // not logged in so redirect to login page
    this.router.navigate(['/']);
    return false;
  }
}
