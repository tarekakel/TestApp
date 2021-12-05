import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { IDropdownSettings } from 'ng-multiselect-dropdown';
import { LazyLoadEvent, MenuItem } from 'primeng/api';
import { Subject } from 'rxjs';
import { AuthService } from 'src/app/demo/framework/helpers/auth.service';
import { DownloadRequestStatus } from 'src/app/demo/framework/view-models/enums';
import { SearchCriteria } from 'src/app/demo/framework/view-models/grid/search-criteria';
import { GroupMaster } from 'src/app/demo/_models/GroupMaster';
import { MediDownloadRequest } from 'src/app/demo/_models/MediaDownloadRequest';
import { MediaDownloadRequestDto } from 'src/app/demo/_models/MediadRequestDownloadDto';
import { MediaRequestDownloadFilter } from 'src/app/demo/_models/MediaRequestDownloadFilter';
import { VehicleDto, VehicleSummary } from 'src/app/demo/_models/VehicleDto';
import { EventService } from 'src/app/demo/_services/EventService';
import { ExportService } from 'src/app/demo/_services/export.service';
import { MediaRequestDownloadService } from 'src/app/demo/_services/media-request-download.service';
import { VehicleService } from 'src/app/demo/_services/VehicleService';

@Component({
  selector: 'app-download-streaming',
  templateUrl: './download-streaming.component.html',
  styleUrls: ['./download-streaming.component.scss'],
})
export class DownloadStreamingComponent implements OnInit {
  searchCriteria!: SearchCriteria<any>;
  mediaRequestData = new MediaDownloadRequestDto();
  groupList!: any[];
  groupSeletedItems!: GroupMaster[];
  dropdownGroupSettings: IDropdownSettings = {};
  dropdownSettings: IDropdownSettings = {};
  vehiclesInfo!: VehicleDto[];
  groupCode: number[] = [];
  tableVehiclesInfo!: VehicleSummary;
  selectedItems!: VehicleDto[];
  vehicleCode: string[] = [];
  downloadRequestList: any;
  dtOptions: any = {};
  dtTrigger: Subject<any> = new Subject<any>();
  downloadRequestStatus = DownloadRequestStatus;
  newMediDownloadRequest = new MediDownloadRequest();
  loading = false;
  totalRecords = 0;
  items!: MenuItem[];

  ngOnInit(): void {
    this.searchCriteria = new SearchCriteria<MediaRequestDownloadFilter>();
    this.searchCriteria.filters = new MediaRequestDownloadFilter();
    this.searchCriteria.filters.endDate = new Date();
    this.searchCriteria.filters.startDate = new Date(2021, 1, 1);
    this.groupCode = new Array();
    this.vehicleCode = new Array();
    this.dropdownSettings = {
      singleSelection: true,
      idField: 'registration',
      textField: 'registration',
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      itemsShowLimit: 3,
      allowSearchFilter: true,
    };
    this.dropdownGroupSettings = {
      singleSelection: true,
      idField: 'groupId',
      textField: 'groupName',
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      itemsShowLimit: 3,
      allowSearchFilter: true,
    };
    this.loading = true;
    this.initAllData();
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

  onGroupSelect(item: any): void {
    this.vehicleService
      .getVehiclesByGroupId(item.groupId)
      .subscribe((res: VehicleDto[]) => (this.vehiclesInfo = res));
  }

  constructor(
    private eventService: EventService,
    private vehicleService: VehicleService,
    private mediaRequestDownloadService: MediaRequestDownloadService,
    private authService: AuthService,
    private exportService: ExportService
  ) {}
  onGroupSelectAll(items: GroupMaster[]): void {
    this.groupCode.splice(0);
    items.forEach((c) => {
      this.groupCode.push(c.groupId);
    });
  }
  onGroupDeSelect(items: { groupId: number }): void {
    this.vehiclesInfo = this.tableVehiclesInfo.vehicles;
    const index = this.groupCode.indexOf(items.groupId);
    this.groupCode.splice(index, 1);
  }
  onGroupDeSelectAll(): void {
    this.vehiclesInfo = this.tableVehiclesInfo.vehicles;
    this.groupCode.splice(0);
  }
  onItemSelect(item: VehicleDto): void {
    this.vehicleCode.push(item.registration);
  }
  onSelectAll(items: VehicleDto[]): void {
    this.vehicleCode.splice(0);
    items.forEach((c) => {
      this.vehicleCode.push(c.registration);
    });
  }
  onDeSelect(items: { registration: string }): void {
    const index = this.vehicleCode.indexOf(items.registration);
    this.vehicleCode.splice(index, 1);
  }
  onDeSelectAll(): void {
    this.vehicleCode.splice(0);
  }
  initAllData(): void {
    this.eventService.getGroupMaster().subscribe(
      (res) => {
        this.groupList = res;
      },
      (error) => {}
    );
  }
  AddToDownloadList(): void {
    this.newMediDownloadRequest.UserId = this.authService.getUsername();
    this.mediaRequestDownloadService
      .addNewDownloadRequest(this.newMediDownloadRequest)
      .subscribe(console.log);
  }
  onAssetSelect(v: { registration: string }): void {
    this.newMediDownloadRequest.CarLicense = v.registration;
  }

  loadDownloadRequestList(event: LazyLoadEvent): void {
    this.loading = true;
    event.filters = this.searchCriteria.filters;
    this.mediaRequestDownloadService.getAll(event).subscribe((res) => {
      this.downloadRequestList = res.mediaDownloadRequestList;
      this.loading = false;
      this.totalRecords = res.totalRequests;
      this.mediaRequestData = res;
    });
  }
  exportExcel(): void {
    this.mediaRequestDownloadService
      .exportAll(this.searchCriteria)
      .subscribe((data: any) => {
        this.exportService.exportExcel(data, 'Media Request Data Details');
      });
  }
  exportPdf(): void {
    const exportData: any[][] = [];
    this.mediaRequestDownloadService
      .exportAll(this.searchCriteria)
      .subscribe((data: any[]) => {
        data.forEach((element) => {
          exportData.push(Object.values(element));
        });

        this.exportService.exportPdf(Object.keys(data[0]), exportData);
      });
  }
  save(): void {}
}
