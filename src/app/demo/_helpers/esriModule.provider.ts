import { Injectable } from '@angular/core';
import { loadModules, ILoadScriptOptions } from 'esri-loader';

@Injectable()
export class EsriModuleProvider {
  private scriptOptiosn: ILoadScriptOptions = {
    url: 'https://js.arcgis.com/4.8/',
  };

  constructor() {}

  public require(moduleNames: string[]): Promise<any[]> {
    return loadModules(moduleNames, this.scriptOptiosn);
  }
}
