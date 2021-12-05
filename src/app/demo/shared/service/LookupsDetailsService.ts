import { BaseService } from "../../framework/core/base-service.service";
import { Injectable } from '@angular/core';
import { Lookup } from "../view-models/enums";
import { LookupDetails } from "../view-models/lookupDetails";
import { Urls } from "../common/Api-Urls";

@Injectable()
export class LookupsDetailsService extends BaseService {

  constructor() {

    super();
  }

  getLookupDetials(lookup: Lookup) {

    return this.apiHelper.get<LookupDetails[]>(Urls.lookupDetailsUrl +"/"+ lookup );
  }


  getAllTicketLookupDetials() {

      return this.apiHelper.get<any>(Urls.allTicketLookupsDetailsUrl);
  }
}
