import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { AlertMessageType } from '../view-models/enums';

@Injectable()
export class AlertService {
    
    constructor(
        private toastr: ToastrService
               ) { }

    showAlertMessage(title: string, message: any, alertMessageType: AlertMessageType) {
        
        var options = {
            timeOut: 6000,
            closeButton: true
        }

        switch (alertMessageType) {

            case AlertMessageType.Success:

                this.toastr.success(message, title, options);
                break;

            case AlertMessageType.Error:

                this.toastr.error(message, title, options);
                break;

            case AlertMessageType.Warning:

                this.toastr.warning(message, title, options);
                break;
        }        
    }
}