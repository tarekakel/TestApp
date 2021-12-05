import { SignalR, SignalRConnection } from 'ng2-signalr';
import { Injectable } from '@angular/core';
import { LoadingService } from '../shared/service/LoadingService';

@Injectable()
export class ConnectionResolver {
  constructor(
    private _signalR: SignalR,
    private loadingService: LoadingService
  ) {
    this.loadingService.Start();
  }

  resolve() {
    this.loadingService.End();
    return this._signalR.connect();
  }
}
