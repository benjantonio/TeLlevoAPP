import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { NavController } from '@ionic/angular';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NoIngresadoGuard implements CanActivate {
  
  constructor(public navCtrl:NavController,private elrouteruwu:Router){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      if (localStorage.getItem('ingresado') == 'true') {
        console.log('Cuenta iniciada :)')
        this.navCtrl.navigateRoot('inicio');
        return false;
      } else {
        console.log('Cuenta NO iniciada >:c')
        return true;
      }
    
  }
  
}
