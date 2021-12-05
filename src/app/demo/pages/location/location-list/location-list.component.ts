import {
  Component,
  OnInit,
  ViewChild,
  ElementRef,
  Input,
  Output,
  EventEmitter,
} from '@angular/core';
import { loadModules } from 'esri-loader';
import { VehicleDto, VehicleSummary } from 'src/app/demo/_models/VehicleDto';
import { VehicleService } from 'src/app/demo/_services/VehicleService';
import esri = __esri;

@Component({
  selector: 'app-location-list',
  templateUrl: './location-list.component.html',
  styleUrls: ['./location-list.component.scss'],
})
export class LocationListComponent implements OnInit {
  tableVehiclesInfo: VehicleSummary;
  vehiclesInfo: VehicleDto[];
  @Output() mapLoaded = new EventEmitter<boolean>();
  @ViewChild('mapViewNode') private mapViewEl: ElementRef;

  /**
   * @private _zoom sets map zoom
   * @private _center sets map center
   * @private _basemap sets type of map
   */
  private _zoom: number = 10;
  private _center: Array<number> = [54.366669, 24.466667];
  private _basemap: string = 'streets-navigation-vector';

  @Input()
  set zoom(zoom: number) {
    this._zoom = zoom;
  }

  get zoom(): number {
    return this._zoom;
  }

  @Input()
  set center(center: Array<number>) {
    this._center = center;
  }

  get center(): Array<number> {
    return this._center;
  }

  @Input()
  set basemap(basemap: string) {
    this._basemap = basemap;
  }

  get basemap(): string {
    return this._basemap;
  }

  constructor(private vehicleService: VehicleService) {}

  async initializeMap() {
    try {
      const [
        esriConfig,
        EsriMap,
        FeatureLayer,
        GeoJSONLayer,
        EsriMapView,
        Legend,
        Expand,
        Locate,
        Track,
        Graphic,
        Home,
        GraphicsLayer,
        TableList,
        FeatureTable,
        Layer,
      ] = await loadModules([
        'esri/config',
        'esri/Map',
        'esri/layers/FeatureLayer',
        'esri/layers/GeoJSONLayer',
        'esri/views/MapView',
        'esri/widgets/Legend',
        'esri/widgets/Expand',
        'esri/widgets/Locate',
        'esri/widgets/Track',
        'esri/Graphic',
        'esri/widgets/Home',
        'esri/layers/GraphicsLayer',
        'esri/widgets/TableList',
        'esri/widgets/FeatureTable',
        'esri/layers/Layer',
      ]);
      // edit key for esri map when go there in ADP
      esriConfig.apiKey =
        'AAPK30050b5602f14037a8f7dc83b11ae0883ushn8PvXlhVLzvQW12CMOkLobntgnvIiLWDcrfZkxJlUQmTk3dwnmm-bIUskoq3';
      const clusterLabelThreshold = 1500;

      const haloColor = '#373837';
      const color = '#f0f0f0';

      // Set type of map
      const mapProperties: esri.MapProperties = {
        basemap: this._basemap,
      };

      const map: esri.Map = new EsriMap(mapProperties);

      // Set type of map view
      const mapViewProperties: esri.MapViewProperties = {
        container: this.mapViewEl.nativeElement,
        center: this._center,
        zoom: this._zoom,
        map: map,
      };

      const mapView: esri.MapView = new EsriMapView(mapViewProperties);

      const graphicsLayer = new GraphicsLayer();
      map.add(graphicsLayer);

      const clusterConfig = {
        type: 'cluster',
        popupTemplate: {
          title: 'Cluster summary',
          content: [
            {
              type: 'text',
              text: `
              This cluster represents <b>{cluster_count}</b> power plants with an average capacity of <b>{cluster_avg_capacity_mw} megawatts</b>.
               The power plants in this cluster produce a total of <b>{expression/total-mw} megawatts</b> of power.`,
            },
            {
              type: 'text',
              text: 'Most power plants in this cluster generate power from <b>{cluster_type_fuel1}</b>.',
            },
          ],
          fieldInfos: [
            {
              fieldName: 'cluster_count',
              format: {
                places: 0,
                digitSeparator: true,
              },
            },
            {
              fieldName: 'cluster_avg_capacity_mw',
              format: {
                places: 2,
                digitSeparator: true,
              },
            },
            {
              fieldName: 'expression/total-mw',
              format: {
                places: 0,
                digitSeparator: true,
              },
            },
          ],
          expressionInfos: [
            {
              name: 'total-mw',
              title: 'total megawatts',
              expression:
                '$feature.cluster_avg_capacity_mw * $feature.cluster_count',
            },
          ],
        },
        // larger radii look better with multiple label classes
        // smaller radii looks better visually
        clusterRadius: '120px',
        labelsVisible: true,
        labelingInfo: [
          {
            symbol: {
              type: 'text',
              haloColor,
              haloSize: '1px',
              color,
              font: {
                family: 'Noto Sans',
                size: '11px',
              },
              xoffset: 0,
              yoffset: '-15px',
            },
            labelPlacement: 'center-center',
            labelExpressionInfo: {
              expression: "Text($feature.cluster_count, '#,### plants')",
            },
            where: `cluster_avg_capacity_mw > ${clusterLabelThreshold}`,
          },
          {
            symbol: {
              type: 'text',
              haloColor,
              haloSize: '2px',
              color,
              font: {
                weight: 'bold',
                family: 'Noto Sans',
                size: '18px',
              },
              xoffset: 0,
              yoffset: 0,
            },
            labelPlacement: 'center-center',
            labelExpressionInfo: {
              expression: '$feature.cluster_type_fuel1',
            },
            where: `cluster_avg_capacity_mw > ${clusterLabelThreshold}`,
          },
          {
            symbol: {
              type: 'text',
              haloColor,
              haloSize: '1px',
              color,
              font: {
                weight: 'bold',
                family: 'Noto Sans',
                size: '12px',
              },
              xoffset: 0,
              yoffset: '15px',
            },
            deconflictionStrategy: 'none',
            labelPlacement: 'center-center',
            labelExpressionInfo: {
              expression: `
            var value = $feature.cluster_avg_capacity_mw;
            var num = Count(Text(Round(value)));

            Decode(num,
              4, Text(value / Pow(10, 3), "##.0k"),
              5, Text(value / Pow(10, 3), "##k"),
              6, Text(value / Pow(10, 3), "##k"),
              7, Text(value / Pow(10, 6), "##.0m"),
              Text(value, "#,###")
            );
            `,
            },
            where: `cluster_avg_capacity_mw > ${clusterLabelThreshold}`,
          },
          {
            symbol: {
              type: 'text',
              haloColor,
              haloSize: '1px',
              color,
              font: {
                family: 'Noto Sans',
                size: '11px',
              },
              xoffset: 0,
              yoffset: '-15px',
            },
            labelPlacement: 'above-right',
            labelExpressionInfo: {
              expression: "Text($feature.cluster_count, '#,### plants')",
            },
            where: `cluster_avg_capacity_mw <= ${clusterLabelThreshold}`,
          },
          {
            symbol: {
              type: 'text',
              haloColor,
              haloSize: '2px',
              color,
              font: {
                weight: 'bold',
                family: 'Noto Sans',
                size: '18px',
              },
            },
            labelPlacement: 'above-right',
            labelExpressionInfo: {
              expression: '$feature.cluster_type_fuel1',
            },
            where: `cluster_avg_capacity_mw <= ${clusterLabelThreshold}`,
          },
          {
            symbol: {
              type: 'text',
              haloColor,
              haloSize: '1px',
              color,
              font: {
                weight: 'bold',
                family: 'Noto Sans',
                size: '12px',
              },
              xoffset: 0,
              yoffset: 0,
            },
            labelPlacement: 'center-center',
            labelExpressionInfo: {
              expression: `
            var value = $feature.cluster_avg_capacity_mw;
            var num = Count(Text(Round(value)));

            Decode(num,
              4, Text(value / Pow(10, 3), "##.0k"),
              5, Text(value / Pow(10, 3), "##k"),
              6, Text(value / Pow(10, 3), "##k"),
              7, Text(value / Pow(10, 6), "##.0m"),
              Text(value, "#,###")
            );
            `,
            },
            where: `cluster_avg_capacity_mw <= ${clusterLabelThreshold}`,
          },
        ],
      };

      const layer = new FeatureLayer({
        portalItem: {
          id: 'eb54b44c65b846cca12914b87b315169',
        },
        featureReduction: clusterConfig,
        popupEnabled: true,
        labelsVisible: true,
        labelingInfo: [
          {
            symbol: {
              type: 'text',
              haloColor,
              haloSize: '1px',
              color,
              font: {
                family: 'Noto Sans',
                size: '11px',
              },
              xoffset: 0,
              yoffset: '-15px',
            },
            labelPlacement: 'center-center',
            labelExpressionInfo: {
              expression: '$feature.name',
            },
            where: `capacity_mw > ${clusterLabelThreshold}`,
          },
          {
            symbol: {
              type: 'text',
              haloColor,
              haloSize: '2px',
              color,
              font: {
                weight: 'bold',
                family: 'Noto Sans',
                size: '18px',
              },
              xoffset: 0,
              yoffset: 0,
            },
            labelPlacement: 'center-center',
            labelExpressionInfo: {
              expression: '$feature.fuel1',
            },
            where: `capacity_mw > ${clusterLabelThreshold}`,
          },
          {
            symbol: {
              type: 'text',
              haloColor,
              haloSize: '1px',
              color,
              font: {
                weight: 'bold',
                family: 'Noto Sans',
                size: '12px',
              },
              xoffset: 0,
              yoffset: '15px',
            },
            labelPlacement: 'center-center',
            labelExpressionInfo: {
              expression: `
            var value = $feature.capacity_mw;
            var num = Count(Text(Round(value)));

            Decode(num,
              4, Text(value / Pow(10, 3), "##.0k"),
              5, Text(value / Pow(10, 3), "##k"),
              6, Text(value / Pow(10, 3), "##k"),
              7, Text(value / Pow(10, 6), "##.0m"),
              Text(value, "#,###")
            );
            `,
            },
            where: `capacity_mw > ${clusterLabelThreshold}`,
          },
          {
            symbol: {
              type: 'text',
              haloColor,
              haloSize: '1px',
              color,
              font: {
                family: 'Noto Sans',
                size: '11px',
              },
              xoffset: 0,
              yoffset: '-15px',
            },
            labelPlacement: 'above-right',
            labelExpressionInfo: {
              expression: '$feature.name',
            },
            where: `capacity_mw <= ${clusterLabelThreshold}`,
          },
          {
            symbol: {
              type: 'text',
              haloColor,
              haloSize: '2px',
              color,
              font: {
                weight: 'bold',
                family: 'Noto Sans',
                size: '18px',
              },
            },
            labelPlacement: 'above-right',
            labelExpressionInfo: {
              expression: '$feature.fuel1',
            },
            where: `capacity_mw <= ${clusterLabelThreshold}`,
          },
          {
            symbol: {
              type: 'text',
              haloColor,
              haloSize: '1px',
              color,
              font: {
                weight: 'bold',
                family: 'Noto Sans',
                size: '12px',
              },
              xoffset: 0,
              yoffset: 0,
            },
            labelPlacement: 'center-center',
            labelExpressionInfo: {
              expression: `
            var value = $feature.cluster_avg_capacity_mw;
            var num = Count(Text(Round(value)));

            Decode(num,
              4, Text(value / Pow(10, 3), "##.0k"),
              5, Text(value / Pow(10, 3), "##k"),
              6, Text(value / Pow(10, 3), "##k"),
              7, Text(value / Pow(10, 6), "##.0m"),
              Text(value, "#,###")
            );
            `,
            },
            where: `cluster_avg_capacity_mw <= ${clusterLabelThreshold}`,
          },
        ],
      });

      const locate = new Locate({
        view: mapView,
        useHeadingEnabled: false,
        goToOverride: function (view, options) {
          options.target.scale = 1500;
          return view.goTo(options.target);
        },
      });
      mapView.ui.add(locate, 'top-left');

      const track = new Track({
        view: mapView,
        graphic: new Graphic({
          symbol: {
            type: 'simple-marker',
            size: '12px',
            color: 'green',
            outline: {
              color: '#efefef',
              width: '1.5px',
            },
          },
        }),
        useHeadingEnabled: false,
      });

      var locs = [
        '51.38254, -2.362804',
        '51.235249, -2.297804',
        '51.086126, -2.210767',
      ];

      mapView.ui.add(track, 'top-left');
      for (var i = 0; i < this.vehiclesInfo.length; i++) {
        //console.log(locs[i].split(",")[0]);
        // create a point
        if (
          this.vehiclesInfo[i].latitude != 0 &&
          this.vehiclesInfo[i].longitude != 0
        ) {
          var Point = {
            type: 'point',
            longitude: this.vehiclesInfo[i].longitude, //check if the point is longitude and change accordingly
            latitude: this.vehiclesInfo[i].latitude, //check if the point is latitude and change accordingly
          };
          if (this.vehiclesInfo[i].online) {
            var simpleMarkerSymbol = {
              type: 'simple-marker',
              color: [46, 204, 113], // Green
              outline: {
                color: [255, 255, 255], // white
                width: 1,
              },
            };
          } else {
            var simpleMarkerSymbol = {
              type: 'simple-marker',
              color: [255, 0, 0], // Red
              outline: {
                color: [255, 255, 255], // white
                width: 1,
              },
            };
          }

          //*** ADD ***//
          // Create attributes
          var attributes = {
            Name: this.vehiclesInfo[i].registration, // The name of the vehicle regisration
            Group: this.vehiclesInfo[i].groupName,
            Speed: this.vehiclesInfo[i].speed, // speed
            LastUpdate: this.vehiclesInfo[i].locationTIme, // last updated time
          };
          // Create popup template
          var popupTemplate = {
            title: '{Name}',
            content:
              'Group: <b>{Group}</b>.</br> Speed: {Speed}</br> LastUpdate: {LastUpdate}',
          };

          var pointGraphic = new Graphic({
            geometry: Point,
            symbol: simpleMarkerSymbol,
            //*** ADD ***//
            attributes: attributes,
            popupTemplate: popupTemplate,
          });

          graphicsLayer.add(pointGraphic);
        }
      }

      //   const point = { //Create a point
      //     type: "point",
      //     longitude: 54.5392450,
      //     latitude: 24.3469730
      //  };
      //  const simpleMarkerSymbol = {
      //     type: "simple-marker",
      //     color: [226, 119, 40],  // Orange
      //     outline: {
      //         color: [255, 255, 255], // White
      //         width: 1
      //     }
      //  };

      //  const pointGraphic = new Graphic({
      //     geometry: point,
      //     symbol: simpleMarkerSymbol
      //  });
      //  graphicsLayer.add(pointGraphic);

      // All resources in the MapView and the map have loaded.
      // Now execute additional processes
      mapView.when(() => {
        this.mapLoaded.emit(true);
      });
    } catch (error) {
      alert('We have an error: ' + error);
    }
  }

  ngOnInit() {
    this.vehicleService.getAllVehicles().subscribe((res) => {
      console.log(res);
      this.tableVehiclesInfo = res;
      this.vehiclesInfo = res.vehicles;
      console.log(
        this.ConvertToCSV(this.vehiclesInfo, [
          'name',
          'age',
          'average',
          'approved',
        ])
      );
      this.initializeMap();
    });
  }

  ConvertToCSV(objArray, headerList) {
    let array = typeof objArray != 'object' ? JSON.parse(objArray) : objArray;
    let str = '';
    let row = 'S.No,';
    for (let index in headerList) {
      row += headerList[index] + ',';
    }
    row = row.slice(0, -1);
    str += row + '\r\n';
    for (let i = 0; i < array.length; i++) {
      let line = i + 1 + '';
      for (let index in headerList) {
        let head = headerList[index];
        line += ',' + array[i][head];
      }
      str += line + '\r\n';
    }
    return str;
  }
}
