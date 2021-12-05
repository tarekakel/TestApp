import { BaseService } from "../../framework/core/base-service.service";
import { Injectable } from '@angular/core';
import { Rating } from "../view-models/Rating";
import { Urls } from "../common/Api-Urls";

@Injectable()
export class RatingService extends BaseService {

  constructor() {
    super();
  }

  addRate(rating: Rating) {

    return this.apiHelper.post<Rating, any>(Urls.ratingAddUrl, rating);
  }

}

