import { Injectable } from '@angular/core';

import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConnectivityService {

  constructor() { 
    this.addConnectivityListeners();
  }

public isOnline: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(navigator.onLine);
public networkHandler: any;

  addConnectivityListeners(): void {
      window.addEventListener('online', () => {
        this.isOnline.next(true);
      }, false);

      window.addEventListener('offline', () => {
        this.isOnline.next(false);
      }, false);

  }
}

