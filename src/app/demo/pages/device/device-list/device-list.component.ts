import { Component, ElementRef, OnInit } from '@angular/core';
import { PagedResult } from 'src/app/demo/framework/view-models/grid/paged-result';
import { SearchCriteria } from 'src/app/demo/framework/view-models/grid/search-criteria';
import { DeviceDto } from 'src/app/demo/_models/DeviceDto';
import { DeviceFilter } from 'src/app/demo/_models/DeviceFilter';
import { DeviceModel } from 'src/app/demo/_models/DeviceModel';
import { DeviceService } from 'src/app/demo/_services/DeviceServices';
import { DomSanitizer } from '@angular/platform-browser';
import flvjs from 'flv.js';

@Component({
  selector: 'app-device-list',
  templateUrl: './device-list.component.html',
  styleUrls: ['./device-list.component.scss'],
})
export class DeviceListComponent implements OnInit {
  player: any;
  streamingUrl =
    'http://185.173.32.12:12062/live.flv?devid=0098FFFFFF&chl=15&st=0&audio=0';
  searchCriteria: SearchCriteria<any>;
  pagedResult: PagedResult<DeviceDto>;
  deviceList: DeviceDto = new DeviceDto();
  devices: DeviceModel[] = [];
  constructor(
    private deviceService: DeviceService,
    private elementRef: ElementRef,
    private sanitized: DomSanitizer
  ) {
    // super();

    this.searchCriteria = new SearchCriteria<DeviceFilter>();
    this.searchCriteria.filters = new DeviceFilter();
    this.pagedResult = new PagedResult<DeviceDto>();
    this.pagedResult.collection = new Array<DeviceDto>();
  }

  ngOnInit(): void {
    this.deviceService.getAllDevice().subscribe((res) => {
      console.log(res);
      this.deviceList = res;
      this.devices = this.deviceList.deviceList;
    });
    this.player = document.getElementById('videoElement');
    if (flvjs.isSupported()) {
      var flvPlayer = flvjs.createPlayer({
        type: 'flv',
        isLive: true, //<====== Add this
        url: 'http://185.173.32.12:12062/live.flv?devid=0098FFFFFF&chl=15&st=0&audio=0', //<=== self-modifying
      });
      flvPlayer.attachMediaElement(this.player);
      flvPlayer.load(); //Load
      this.flv_start();
    }
  }
  ngOnDestroy() {
    // destroy player
  }

  play() {
    this.player = document.getElementById('videoElement');
    if (flvjs.isSupported()) {
      var flvPlayer = flvjs.createPlayer({
        type: 'flv',
        isLive: true, //<====== Add this
        url: 'http://185.173.32.12:12062/live.flv?devid=0098FFFFFF&chl=15&st=0&audio=0', //<=== self-modifying
      });
      flvPlayer.attachMediaElement(this.player);
      flvPlayer.load(); //Load
      this.flv_start();
    }
  }
  flv_start() {
    this.player.play();
  }

  flv_pause() {
    this.player.pause();
  }

  flv_destroy() {
    this.player.pause();
    this.player.unload();
    this.player.detachMediaElement();
    this.player.destroy();
    this.player = null;
  }
}
