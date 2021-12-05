// import { Injectable, ElementRef, EventEmitter } from '@angular/core';
// import { EsriModuleProvider } from '../_helpers/esriModule.provider';

// @Injectable()
// export class EsriMapService {
//   isLoaded = new EventEmitter();
//   map: __esri.Map;
//   view: __esri.View;

//   constructor(private esriModuleProvider: EsriModuleProvider) {}

//   public prepareViewProps(
//     mapViewProperties: __esri.ViewProperties,
//     mapEl: ElementRef,
//     map: __esri.Map
//   ) {
//     const newViewProps = this.extend({}, mapViewProperties);

//     if (!newViewProps.container) {
//       newViewProps.container = mapEl.nativeElement.id;
//     }
//     if (!newViewProps.map) {
//       newViewProps.map = map;
//     }

//     return newViewProps;
//   }

//   public async loadMap(
//     mapProperties: __esri.MapProperties,
//     viewProperties: __esri.ViewProperties,
//     mapEl: ElementRef,
//     viewType: string = 'MapView'
//   ) {
//     let response = await this.esriModuleProvider.require([
//       'esri/Map',
//       'esri/views/' + viewType,
//       'domReady!',
//     ]);
//     let mapCtor: __esri.MapConstructor = response[0];
//     let mapView: __esri.ViewConstructor = response[1];

//     // create map
//     const map = new mapCtor(mapProperties);

//     // prepare properties that should be set locally
//     // create a new object so as to not modify the provided object
//     const newViewProps = this.prepareViewProps(viewProperties, mapEl, map);

//     // create the MapView
//     const view = new mapView(newViewProps);

//     this.map = map;
//     this.view = view;

//     this.isLoaded.emit();

//     return {
//       map,
//       view,
//     };
//   }

//   public async loadWebMap(
//     webMapProperties: __esri.WebMapProperties,
//     viewProperties: __esri.ViewProperties,
//     mapEl: ElementRef,
//     viewType: string = 'MapView'
//   ) {
//     let response = await this.esriModuleProvider.require([
//       'esri/WebMap',
//       'esri/views/' + viewType,
//       'domReady!',
//     ]);
//     let webMap: __esri.WebMapConstructor = response[0];
//     let mapView: __esri.MapViewConstructor = response[1];

//     // create map
//     const map = new webMap(webMapProperties);

//     // prepare properties that should be set locally
//     // create a new object so as to not modify the provided object
//     const newViewProps = this.prepareViewProps(viewProperties, mapEl, map);

//     // create the MapView
//     const view = new mapView(newViewProps);

//     this.map = map;
//     this.view = view;

//     this.isLoaded.emit();

//     return {
//       map,
//       view,
//     };
//   }

//   public async addFeatureLayer(url: string) {
//     let response = await this.esriModuleProvider.require([
//       'esri/layers/FeatureLayer',
//       'domReady!',
//     ]);
//     let featureLayer: __esri.FeatureLayerConstructor = response[0];

//     let featureLayerProps: __esri.FeatureLayerProperties = {
//       url,
//     };
//     let layer = new featureLayer(featureLayerProps);

//     this.map.add(layer);
//   }

//   public addWidget(element: HTMLElement, position: string) {
//     this.view.ui.add(element, position);
//   }

//   private extend(obj: __esri.ViewProperties, src: __esri.ViewProperties) {
//     Object.keys(src).forEach((key) => {
//       obj[key] = src[key];
//     });
//     return obj;
//   }
// }
