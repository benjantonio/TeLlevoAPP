import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage-angular';

@Injectable({
  providedIn: 'root'
})
export class BdLocalService {

  private _storage: Storage | null = null;
  constructor(private storage: Storage) { }
}