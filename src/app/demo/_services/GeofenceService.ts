import { Injectable } from '@angular/core';
import { BaseService } from '../framework/core/base-service.service';
import { Geofence } from '../_models/Geofence';

@Injectable()
export class GeofenceService extends BaseService {
  constructor() {
    super();
  }
  postGeofence(geofence: Geofence) {
    return this.apiHelper.post<Geofence, Geofence>(
      '/geofence/add-Geofence',
      geofence
    );
  }
  postAssignVehicle(geofence: Geofence) {
    return this.apiHelper.post<Geofence, Geofence>(
      '/geofence/assign-vehicles',
      geofence
    );
  }
  getAllGeofence() {
    return this.apiHelper.get<Geofence[]>('/geofence/geofence-List');
  }
  deleteGeofence(geofence: Geofence) {
    return this.apiHelper.post<Geofence, Geofence>(
      '/geofence/delete-Geofence',
      geofence
    );
  }
}
