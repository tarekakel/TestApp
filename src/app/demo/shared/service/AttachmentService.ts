import { BaseService } from "../../framework/core/base-service.service";
import { Injectable } from '@angular/core';
import { Urls } from "../common/Api-Urls";

@Injectable()
export class AttachmentService extends BaseService {

    constructor() {

        super();
    }

    uploadTicketAttachment(formData: FormData, ticketId: string) {

        return this.apiHelper.post<any, any>(Urls.uploadTicketAttachmentUrl + '/' + ticketId, formData);
    }
    uploadHistoryAttachment(formData: FormData, ticketId: string, historyId: string) {
        return this.apiHelper.post<any, any>(Urls.uploadHistoryAttachmentUrl + '/' + ticketId + '/' + historyId, formData);
    }
    uploadHistoryAttachmentClient(formData: FormData, ticketId: string, historyId: string) {
        return this.apiHelper.post<any, any>(Urls.uploadHistoryAttachmentClientUrl + '/' + ticketId + '/' + historyId, formData);
    }

    
    getTicketAttachmentsById(ticketId: string) {
        return this.apiHelper.get<any>(Urls.getTicketAttachmentsByIdUrl + '/' + ticketId);
    }

    getHistoryAttachmentsByHistoryId(historyId: string) {
        return this.apiHelper.get<any>(Urls.getHistoryAttachmentsByIdUrl + '/' + historyId);
    }
    getApplciationHistoryAttachmentsByHistoryId(historyId: string) {
        return this.apiHelper.get<any>(Urls.getApplicationTicketHistoryAttachmentsByIdUrl + '/' + historyId);
    }
    
}
