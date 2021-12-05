import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { IDropdownSettings } from 'ng-multiselect-dropdown';
import { BaseComponent } from 'src/app/demo/framework/core/base-component';
import { AuthService } from 'src/app/demo/framework/helpers/auth.service';
import { SearchCriteria } from 'src/app/demo/framework/view-models/grid/search-criteria';
import { Driver } from 'src/app/demo/_models/Driver';
import { EventDto } from 'src/app/demo/_models/EventDto';
import { EventFilter } from 'src/app/demo/_models/EventFilter';
import { EventLog } from 'src/app/demo/_models/EventLog';
import { EventMedia } from 'src/app/demo/_models/EventMedia';
import { EventReclassification } from 'src/app/demo/_models/EventReclassification';
import { ProgressStatus } from 'src/app/demo/_models/progress-status.model';
import { VehicleDto, VehicleSummary } from 'src/app/demo/_models/VehicleDto';
import { ViolationSummary } from 'src/app/demo/_models/ViolationSummary';
import { EventService } from 'src/app/demo/_services/EventService';
import { UploadDownloadService } from 'src/app/demo/_services/upload-download.service';
import { VehicleService } from 'src/app/demo/_services/VehicleService';
import { GroupMaster } from './../../../_models/GroupMaster';
import { finalize } from 'rxjs/operators';
import { LazyLoadEvent, MenuItem, MessageService } from 'primeng/api';
import { NodeService } from '../../live-streaming/nodeservice';
import { ExportService } from 'src/app/demo/_services/export.service';

declare var require: any;

@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.scss'],
})
export class EventListComponent extends BaseComponent implements OnInit {
  display = false;
  searchCriteria: SearchCriteria<any>;
  eventTypes: any[] = [];
  eventDto: EventDto;
  eventReclassification: EventReclassification;
  summary: ViolationSummary;
  math = Math;
  image: any;
  allEvents: any[] = [];
  debugTypes: any[] = [];
  eventList: EventDto[] = [];
  tableDriversInfo: Driver[] = [];
  assets: VehicleDto[] = [];
  oneAtATime = true;
  eventLogData: EventLog;
  selectedItems: VehicleDto[] = [];
  groupSeletedItems: GroupMaster[] = [];
  eventSeletedItems: any[] = [];
  vehicleCode: string[];
  groupCode: number[];
  eventTypeCode: number[];
  currentYear!: number;
  currentMonth!: number;
  imageUrl!: string;
  downloadOptions = '';
  dtOptions: any = {};
  button = ['copy', 'excel', 'csv', 'pdf', 'print'];
  totalViolation = 0;
  stopArmViolation = 0;
  safeZoneAlarm = 0;
  validationStatus = 0;
  processedStatus = 0;
  mapCenter = [-122.4194, 37.7749];
  basemapType = 'satellite';
  mapZoomLevel = 12;
  tableVehiclesInfo: VehicleSummary = new VehicleSummary();
  vehiclesInfo: VehicleDto[] = [];
  groupList: any[] = [];
  loading: boolean | undefined;
  dropdownSettings: IDropdownSettings = {};
  dropdownGroupSettings: IDropdownSettings = {};
  dropdownEventTypeSettings: IDropdownSettings = {};
  @Output() public downloadStatus: EventEmitter<ProgressStatus>;
  @Input()
  public disabled: boolean = false;
  @Input()
  public fileName!: string;
  totalRecords = 0;
  items: MenuItem[] = [];
  constructor(
    private eventService: EventService,
    private sanitized: DomSanitizer,
    public authService: AuthService,
    private vehicleService: VehicleService,
    private service: UploadDownloadService,
    private nodeService: NodeService,
    private messageService: MessageService,
    private exportService: ExportService
  ) {
    super();
    this.searchCriteria = new SearchCriteria<EventFilter>();
    this.searchCriteria.filters = new EventFilter();
    this.eventDto = new EventDto();
    this.summary = new ViolationSummary();
    this.eventDto.medias = new Array<EventMedia>();
    this.eventReclassification = new EventReclassification();
    this.eventLogData = new EventLog();
    this.vehicleCode = new Array();
    this.groupCode = new Array();
    this.eventTypeCode = new Array();
    this.downloadStatus = new EventEmitter<ProgressStatus>();
  }

  override ngOnInit(): void {
    this.loading = true;
    const role = this.authService.getRoles();
    if (role[0] === 'Admin') {
      this.downloadOptions = 'nodownload';
    }

    this.eventService.getEventtypes().subscribe(
      (res) => {
        this.eventTypes = res;
      },
      (error) => {}
    );
    this.vehicleService.getAllVehicles().subscribe((res) => {
      this.tableVehiclesInfo = res;
      this.vehiclesInfo = res.vehicles;
    });
    this.eventService.getDebugCodestypes().subscribe(
      (res) => {
        this.debugTypes = res;
      },
      (error) => {}
    );
    this.eventService.getGroupMaster().subscribe(
      (res) => {
        this.groupList = res;
      },
      (error) => {}
    );
    this.dropdownSettings = {
      singleSelection: false,
      idField: 'plateNumber',
      textField: 'registration',
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      itemsShowLimit: 3,
      allowSearchFilter: true,
    };

    this.dropdownEventTypeSettings = {
      singleSelection: false,
      idField: 'code',
      textField: 'description',
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

  // tslint:disable-next-line: use-lifecycle-interface
  ngOnDestroy(): void {
    // Do not forget to unsubscribe the event
  }
  mapLoadedEvent(status: boolean): void {
    console.log('The map loaded: ' + status);
  }

  openModal(pic: string): void {
    document!.getElementById('imgModal')!.style.display = 'block';
    this.imageUrl = pic;
  }

  // tslint:disable-next-line: typedef
  closeModal() {
    document.getElementById('imgModal')!.style.display = 'none';
  }

  cleanURL(oldURL: string): SafeResourceUrl {
    return this.sanitized.bypassSecurityTrustResourceUrl(oldURL);
  }
  cleanImageURL(url: string): SafeResourceUrl {
    return this.sanitized.bypassSecurityTrustResourceUrl(url);
  }
  transform(image: string): SafeResourceUrl {
    return this.sanitized.bypassSecurityTrustResourceUrl(image);
  }

  // adding multiple busses start
  onItemSelect(item: VehicleDto): void {
    // console.log(item);
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
  // adding multiple busses end

  onEventSelect(item: any): void {
    this.eventTypeCode.push(item.code);
  }
  onEventSelectAll(items: any[]): void {
    this.eventTypeCode.splice(0);
    items.forEach((c) => {
      this.eventTypeCode.push(c.code);
    });
  }
  onEventDeSelect(items: { code: number }): void {
    const index = this.eventTypeCode.indexOf(items.code);
    this.eventTypeCode.splice(index, 1);
  }
  onEventDeSelectAll(): void {
    this.eventTypeCode.splice(0);
  }

  // for multiple group start
  onGroupSelect(item: GroupMaster): void {
    if (this.vehiclesInfo.length === 0) {
      this.vehiclesInfo = this.tableVehiclesInfo.vehicles;
    }
    // console.log(item);
    this.groupCode.push(item.groupId);
    this.vehiclesInfo = this.vehiclesInfo.filter(
      (c) => c.groupName === item.groupName
    );
  }
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

  searchEvents(): void {
    this.searchCriteria.filters.plateNumbers = this.vehicleCode;
    this.searchCriteria.filters.eventTypeCodes = this.eventTypeCode;
    this.searchCriteria.filters.groupCode = this.groupCode;
    this.loading = true;
    this.eventService
      .searchEventsForPage(this.searchCriteria)
      .subscribe(
        (res: { violationList: EventDto[]; totalViolation: number }) => {
          this.eventList = res.violationList;
          this.loading = false;
          this.totalViolation = res.totalViolation;
          this.totalRecords = res.totalViolation;
          console.log(this.eventList);
        }
      );
  }
  download(item: EventDto): void {
    this.eventService.downloadViolation(item.evidenceID).subscribe(
      (res) => {
        console.log(res);
        const FileSaver = require('file-saver');
        FileSaver.saveAs(res, 'image.zip');
      },
      (error) => {
        console.log(error);
      }
    );
  }
  nodeSelect(event: { node: { label: any } }): void {
    this.messageService.add({
      severity: 'info',
      summary: 'Node Selected',
      detail: event.node.label,
    });
  }

  nodeUnselect(event: { node: { label: any } }): void {
    this.messageService.add({
      severity: 'info',
      summary: 'Node Unselected',
      detail: event.node.label,
    });
  }
  loadEvent(event: LazyLoadEvent): void {
    this.loading = true;
    event.filters = this.searchCriteria.filters;
    this.eventService
      .searchEventsForPage(event)
      .subscribe(
        (res: { violationList: EventDto[]; totalViolation: number }) => {
          this.eventList = res.violationList;
          this.loading = false;
          this.totalViolation = res.totalViolation;
          this.totalRecords = res.totalViolation;
          console.log(this.totalViolation);
        }
      );
  }

  exportExcel(): void {
    this.eventService.export(this.searchCriteria).subscribe((data) => {
      this.exportService.exportExcel(data, 'Events Details');
    });
  }
  exportPdf(): void {
    const exportData: any[][] = [];
    this.eventService.export(this.searchCriteria).subscribe((data) => {
      data.forEach((element: { [s: string]: any } | ArrayLike<any>) => {
        exportData.push(Object.values(element));
      });
      this.exportService.exportPdf(Object.keys(data[0]), exportData);
    });
  }
  save(): void {}
}
