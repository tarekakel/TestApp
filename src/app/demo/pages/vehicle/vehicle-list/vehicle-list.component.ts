import {
  Component,
  OnInit,
  AfterViewInit,
  ElementRef,
  ViewChild,
} from '@angular/core';
import { BaseComponent } from 'src/app/demo/framework/core/base-component';
import { PagedResult } from 'src/app/demo/framework/view-models/grid/paged-result';
import { SearchCriteria } from 'src/app/demo/framework/view-models/grid/search-criteria';
import { BusOwnerMaster } from 'src/app/demo/shared/view-models/BusOwnerMaster';
import { BrandMaster } from 'src/app/demo/_models/BrandMaster';
import { DeviceModel } from 'src/app/demo/_models/DeviceModel';
import { FuelType } from 'src/app/demo/_models/FuelType';
import { GroupMaster } from 'src/app/demo/_models/GroupMaster';
import { ManufacturerMaster } from 'src/app/demo/_models/ManufacturerMaster';
import { Vehicle } from 'src/app/demo/_models/Vehicle';
import { VehicleBrandMaster } from 'src/app/demo/_models/VehicleBrandMaster';
import { VehicleDto, VehicleSummary } from 'src/app/demo/_models/VehicleDto';
import { VehicleFilter } from 'src/app/demo/_models/VehicleFilter';
import { VehicleModel } from 'src/app/demo/_models/VehicleModel';
import { VehicleType } from 'src/app/demo/_models/VehicleType';
import { BusBrandService } from 'src/app/demo/_services/BusBrandService';
import { FuelTypeService } from 'src/app/demo/_services/FuelTypeService';
import { GroupMasterService } from 'src/app/demo/_services/GroupMasterService';
import { ManufacturerService } from 'src/app/demo/_services/ManufacturerService';
import { VehicleBrandMasterService } from 'src/app/demo/_services/VehicleBrandMasterService';
import { VehicleModelService } from 'src/app/demo/_services/VehicleModelService';
import { VehicleService } from 'src/app/demo/_services/VehicleService';
import { VehicleTypeService } from 'src/app/demo/_services/VehicleTypeService';
import { LazyLoadEvent, MessageService } from 'primeng/api';
import { ExportService } from 'src/app/demo/_services/export.service';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-vehicle-list',
  templateUrl: './vehicle-list.component.html',
  styleUrls: ['./vehicle-list.component.scss'],
})
export class VehicleListComponent extends BaseComponent implements OnInit {
  @ViewChild('videoPlayer') videoElementRef: ElementRef | undefined;
  @ViewChild('videoContainer') videoContainerRef: ElementRef | undefined;
  videoElement: HTMLVideoElement | undefined;
  videoContainerElement: HTMLDivElement | undefined;
  player: any;
  searchCriteria: SearchCriteria<any>;
  pagedResult: PagedResult<Vehicle>;
  displayVehicleForm: boolean = false;
  model: any = {};
  newVehicle: Vehicle;
  dtOptions: any = {};
  tableVehiclesInfo: VehicleSummary = new VehicleSummary();
  vehiclesInfo: VehicleDto[] = [];
  vehiclesStatsInfo: VehicleDto;
  manufacturerInfo: ManufacturerMaster[] = [];
  modelInfo: DeviceModel[] = [];
  brandInfo: VehicleBrandMaster[] = [];
  vehicleModel: VehicleModel[] = [];
  current_month: string | undefined;
  keys = Object.keys;
  math = Math;
  public selectedValue: any;

  month!: Date;
  showStatistics: boolean = false;
  showNotAvailable: boolean = false;
  pie_data: any;
  noData!: string;
  vehicleCodes: number[];
  vehicleTypeList: VehicleType[] = [];
  fuelTypeList: FuelType[] = [];
  entityId!: string;
  displayVehicleaddForm: boolean = false;
  displayTitleFlag: boolean = false;
  selectedItems: BrandMaster[] = [];
  groupSeletedItems: GroupMaster[] = [];
  eventSeletedItems: BusOwnerMaster[] = [];
  busGroup: any[] = [];
  busBrandList: any[] = [];
  groupCode: number[];
  brandCode: number[];
  busCode: string[];
  busMaster: Vehicle[];
  shaka: any;
  loading = true;
  totalRecords = 0;
  items: MenuItem[] = [];

  constructor(
    private vehicleService: VehicleService,
    private manufacturerService: ManufacturerService,
    private brandService: VehicleBrandMasterService,
    private modelService: VehicleModelService,
    private vehicleTypeService: VehicleTypeService,
    private fuelTypeService: FuelTypeService,
    private groupMasterService: GroupMasterService,
    private busBrandService: BusBrandService,
    private messageService: MessageService,
    private exportService: ExportService
  ) {
    super();

    this.searchCriteria = new SearchCriteria<VehicleFilter>();
    this.searchCriteria.filters = new VehicleFilter();
    this.pagedResult = new PagedResult<Vehicle>();
    this.pagedResult.collection = new Array<Vehicle>();
    this.newVehicle = new Vehicle();
    this.vehicleCodes = new Array();
    this.vehiclesStatsInfo = new VehicleDto();
    this.groupCode = new Array();
    this.brandCode = new Array();
    this.busCode = new Array();
    this.busMaster = new Array();
  }

  override ngOnInit(): void {
    // this.getAllGroup();
    // this.getAllBusBrand();
    // this.searchVehicles();
    //  this.searchVehicleTYpe();
    //  this.searchFueltype();
    // this.vehicleService.getAllVehicles().subscribe((res) => {
    //   console.log(res);
    //   this.tableVehiclesInfo = res;
    //   this.vehiclesInfo = res.vehicles;
    // });
    // this.vehicleService.getTreeVehicles().subscribe((res) => {});

    this.items = [
      {
        label: 'Excel',
        icon: 'pi pi-file-excel',
        command: () => {
          this.exportExcel();
        },
      },
      { separator: true },
      {
        label: 'PDF',
        icon: 'pi pi-file-pdf',
        command: () => {
          this.exportPdf();
        },
      },
    ];
  }

  searchManufacturer() {
    // this.manufacturerService.getAllManufacturer().subscribe(
    //   (res) => {
    //     this.manufacturerInfo = res;
    //   },
    //   (error) => {}
    // );
  }
  onManufacturerSelected(code: string) {
    // this.manufacturerService.getAllModel(code).subscribe(
    //   (res) => {
    //     this.modelInfo = res;
    //   },
    //   (error) => {}
    // );
  }

  searchVehicleTYpe() {
    // this.vehicleTypeService.getVehicleType().subscribe((res) => {
    //   this.vehicleTypeList = res;
    // });
  }
  searchFueltype() {
    // this.fuelTypeService.getFuelType().subscribe((res) => {
    //   this.fuelTypeList = res;
    // });
  }

  search() {
    // this.vehicleService.search(this.searchCriteria).subscribe(
    //   (res) => {
    //     if (res.length > 0) {
    //       let newArray: Vehicle[];
    //       newArray = this.pagedResult.collection.concat(res);
    //       // this.pagedResult = res;
    //       this.pagedResult.collection = newArray;
    //     } else {
    //       // this.pagedResult = res;
    //     }
    //   },
    //   (error) => {}
    // );
  }
  searchOnRegistrationChange() {
    // this.pagedResult = new PagedResult<Vehicle>();
    // this.searchCriteria.pageSize = this.gridRowsPerPageOptions[1]; // 10
    // this.searchCriteria.pageIndex = 1;
    // this.vehicleService.search(this.searchCriteria).subscribe(
    //   (res) => {
    //     //this.pagedResult = res;
    //   },
    //   (error) => {}
    // );
  }

  showMore() {
    this.searchCriteria.pageIndex! += 1;
    this.search();
  }
  openAddVehicle() {
    this.searchVehicleBrand();
    this.newVehicle = new Vehicle();
    this.displayVehicleForm = true;
  }
  searchVehicleBrand() {
    // this.brandService.getALL().subscribe(
    //   (res) => {
    //     this.brandInfo = res;
    //   },
    //   (error) => {}
    // );
  }
  onBrandSelected(code: string) {
    this.modelService.getVehicleModelByCode(code).subscribe(
      (res) => {
        this.vehicleModel = res;
      },
      (error) => {}
    );
  }
  onSubmit() {
    this.newVehicle.entityId = this.entityId;
    this.vehicleService.addVehicle(this.newVehicle).subscribe(
      (res) => {
        this.displayVehicleForm = false;
        // this.tableVehiclesInfo.push(res);
      },
      (error) => {}
    );
  }
  edit(item: Vehicle) {
    this.newVehicle = item;
    this.searchVehicleBrand();
    this.onBrandSelected(item.brandCode);
    this.displayTitleFlag = true;
    this.displayVehicleForm = true;
  }

  onGroupSelect(item: GroupMaster) {
    // console.log(item);
    this.groupCode.push(item.groupId);
  }
  onGroupSelectAll(items: GroupMaster[]) {
    this.groupCode.splice(0);
    items.forEach((c) => {
      this.groupCode.push(c.groupId);
    });
  }
  onGroupDeSelect(items: { groupId: number }) {
    const index = this.groupCode.indexOf(items.groupId);
    this.groupCode.splice(index, 1);
  }
  onGroupDeSelectAll() {
    this.groupCode.splice(0);
  }

  getAllGroup() {
    this.groupMasterService.getAll().subscribe(
      (res) => {
        this.busGroup = res;
      },
      (error) => {}
    );
  }
  getAllBusBrand() {
    this.busBrandService.getAll().subscribe(
      (res) => {
        this.busBrandList = res;
      },
      (error) => {}
    );
  }

  onBrandSelect(item: BrandMaster) {
    this.groupCode.push(item.id!);
  }
  onBrandSelectAll(items: BrandMaster[]) {
    this.groupCode.splice(0);
    items.forEach((c) => {
      this.groupCode.push(c.id!);
    });
  }
  onBrandDeSelect(items: { id: number }) {
    const index = this.groupCode.indexOf(items.id);
    this.groupCode.splice(index, 1);
  }
  onBrandDeSelectAll() {
    this.groupCode.splice(0);
  }

  onAssetSelect(item: Vehicle) {
    this.busCode.push(item.carLicense);
  }
  onAssetSelectAll(items: Vehicle[]) {
    this.busCode.splice(0);
    items.forEach((c) => {
      this.busCode.push(c.carLicense);
    });
  }
  onAssetDeSelect(items: { carLicense: string }) {
    const index = this.busCode.indexOf(items.carLicense);
    this.busCode.splice(index, 1);
  }
  onAssetDeSelectAll() {
    this.busCode.splice(0);
  }
  loadVehicles(event: LazyLoadEvent): void {
    this.loading = true;
    event.filters = this.searchCriteria.filters;
    this.vehicleService.search(event).subscribe((res) => {
      this.vehiclesInfo = res.vehicles;
      console.log(res);
      this.tableVehiclesInfo = res;
      this.loading = false;
      this.totalRecords = res.totalVehicles;
    });
  }

  downlaodExcelTemplate() {
    this.exportService.exportExcel(
      [
        {
          CarLicense: 0,
          VehicleType: '',
          DeviceId: '',
          Sim_IP_Address: '',
          PlateCode: '',
          Installation_Date: '',
          Callibration: '',
          PlateNumber: '',
          GruoupId: 0,
        },
      ],
      'Vehicle Template Excel'
    );
  }

  exportExcel(): void {
    this.vehicleService.exportAllVehicles().subscribe((data: any) => {
      console.log(data);
      this.exportService.exportExcel(data, 'Vehicles Details');
    });
  }
  exportPdf(): void {
    const exportData: any[][] = [];
    this.vehicleService.exportAllVehicles().subscribe((data: any[]) => {
      data.forEach((element) => {
        exportData.push(Object.values(element));
      });
      this.exportService.exportPdf(Object.keys(data[0]), exportData);
    });
  }
  save(): void {}
  uploadExcel(
    event: { files: (string | Blob)[] },
    form: { clear: () => void }
  ): void {
    const formData = new FormData();
    formData.append('Name', event.files[0]);
    this.vehicleService.uploadExcel(formData).subscribe(
      (data: any) =>
        this.messageService.add({
          severity: 'success',
          summary: 'Add Done',
          detail: data,
        }),
      (error: any) =>
        this.messageService.add({
          severity: 'error',
          summary: 'Error Inseret Data',
          detail: error,
        })
    );
    form.clear();
  }
}
