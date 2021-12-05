import { BaseService } from "../../framework/core/base-service.service";
import { environment } from "../../../environments/environment";
import { Injectable } from '@angular/core';

@Injectable()
export class LoadingService extends BaseService {

    public loading: boolean = false;
    constructor() {
        super();
    }
    Start() {
        this.loading = true;
    }

    End() {
        this.loading = false;
    }




}
