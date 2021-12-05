import { Component, OnInit } from '@angular/core';
import { TreeDataService } from './TreeDataService';
import { TreeNode } from './TreeNode';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { VehicleService } from '../../_services/VehicleService';
import flvjs from 'flv.js';
import { TreeNodeSearchPipe } from './TreeNodeSearchPipe';
import { MessageService } from 'primeng/api';
import { NodeService } from './../live-streaming/nodeservice';
import { StreamingBucket } from '../../_models/StreamingBucket';

@Component({
  selector: 'app-tree',
  templateUrl: './tree.component.html',
  styleUrls: ['./tree.component.scss'],
  inputs: ['height', 'uiClassPrefix', 'url'],
})
export class TreeComponent implements OnInit {
  root: any;
  query: string = '';
  isChecked: Boolean = false;
  height: number;
  url: string;
  uiClassPrefix: string;
  store: any;
  player: any;

  files3: TreeNode[];
  selectedFile: TreeNode;
  selectedFiles1: TreeNode;
  selectedFiles2: TreeNode;
  selectCount: number = 0;
  selectedBus: StreamingBucket[];
  bucket: StreamingBucket;
  videoElement: boolean = false;
  videoElement2: boolean = false;
  videoElement3: boolean = false;
  videoElement4: boolean = false;
  videoElement5: boolean = false;
  videoElement6: boolean = false;
  videoElement7: boolean = false;
  videoElement8: boolean = false;
  videoElement9: boolean = false;
  frames: string;
  loading: boolean = false;

  constructor(
    private service: TreeDataService,
    private vehicleService: VehicleService,
    private treeSearch: TreeNodeSearchPipe,
    private nodeService: NodeService,
    private messageService: MessageService
  ) {
    this.root = new TreeNode('root', []);

    this.selectedBus = new Array();
  }

  ngOnInit() {
    console.log('init');
    debugger;
    this.vehicleService.getTreeVehicles().subscribe((res) => {
      //this.root.nodes.push(res.children);
      this.files3 = res.data;
    });

    // this.player = document.getElementById('videoElement');
    // if (flvjs.isSupported()) {
    //   var flvPlayer = flvjs.createPlayer({
    //     type: 'flv',
    //     "isLive": true,//<====== Add this
    //     url: 'http://185.173.32.12:12062/live.flv?devid=0098FFFFFF&chl=15&st=0&audio=0', //<=== self-modifying

    // });
    //     flvPlayer.attachMediaElement(this.player);
    //     flvPlayer.load(); //Load
    //     this.flv_start();
    // }
  }

  play(cameraUrl, frame) {
    this.player = document.getElementById(frame);
    if (flvjs.isSupported()) {
      var flvPlayer = flvjs.createPlayer({
        type: 'flv',
        isLive: true, //<====== Add this
        url: cameraUrl, //<=== self-modifying
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

  nodeSelect(event: any) {
    debugger;
    if (this.selectCount >= 9) {
      this.messageService.add({
        severity: 'error',
        summary: 'Error',
        detail: 'Can not add more than 9',
      });
      event.node.partialSelected = true;
    } else {
      var tt = this.selectedFiles2;
      this.bucket = new StreamingBucket();
      this.bucket.Car_License = event.node.label;
      this.bucket.BackUrl = event.node.backCameraUrl;
      this.bucket.ForntUrl = event.node.frontCameraUrl;
      this.bucket.SideUrl = event.node.sideCameraUrl;
      this.bucket.RearUrl = event.node.rearCameraUrl;

      switch (false) {
        case this.videoElement:
          this.frames = 'videoElement';
          this.bucket.FrameNumber = 'videoElement';
          this.selectedBus.push(this.bucket);
          this.play(event.node.frontCameraUrl, this.frames);
          this.videoElement = true;
          break;
        case this.videoElement2:
          this.frames = 'videoElement2';
          this.bucket.FrameNumber = 'videoElement2';
          this.selectedBus.push(this.bucket);
          this.play(event.node.frontCameraUrl, this.frames);
          this.videoElement2 = true;
          break;
        case this.videoElement3:
          this.frames = 'videoElement3';
          this.bucket.FrameNumber = 'videoElement3';
          this.selectedBus.push(this.bucket);
          this.play(event.node.frontCameraUrl, this.frames);
          this.videoElement3 = true;
          break;
        case this.videoElement4:
          this.frames = 'videoElement4';
          this.bucket.FrameNumber = 'videoElement4';
          this.selectedBus.push(this.bucket);
          this.play(event.node.frontCameraUrl, this.frames);
          this.videoElement4 = true;
          break;
        case this.videoElement5:
          this.frames = 'videoElement5';
          this.bucket.FrameNumber = 'videoElement5';
          this.selectedBus.push(this.bucket);
          this.play(event.node.frontCameraUrl, this.frames);
          this.videoElement5 = true;
          break;
        case this.videoElement6:
          this.frames = 'videoElement6';
          this.bucket.FrameNumber = 'videoElement6';
          this.selectedBus.push(this.bucket);
          this.play(event.node.frontCameraUrl, this.frames);
          this.videoElement6 = true;
          break;
        case this.videoElement7:
          this.frames = 'videoElement7';
          this.bucket.FrameNumber = 'videoElement7';
          this.selectedBus.push(this.bucket);
          this.play(event.node.frontCameraUrl, this.frames);
          this.videoElement7 = true;
          break;
        case this.videoElement8:
          this.frames = 'videoElement8';
          this.bucket.FrameNumber = 'videoElement8';
          this.selectedBus.push(this.bucket);
          this.play(event.node.frontCameraUrl, this.frames);
          this.videoElement8 = true;
          break;
        case this.videoElement9:
          this.frames = 'videoElement9';
          this.bucket.FrameNumber = 'videoElement9';
          this.selectedBus.push(this.bucket);
          this.play(event.node.frontCameraUrl, this.frames);
          this.videoElement8 = true;
          break;
        default:
          this.messageService.add({
            severity: 'error',
            summary: 'Error',
            detail: 'Can not add more than 12',
          });
          event.node.partialSelected = true;
      }

      this.selectCount += 1;
    }
    debugger;
  }

  nodeUnselect(event) {
    let eventTarget = <Element>event.target;
    this.selectCount -= 1;
    var index = this.selectedBus.findIndex(
      (x) => x.Car_License == event.node.label
    );
    var frame = this.selectedBus.find(
      (c) => c.Car_License == event.node.label
    ).FrameNumber;
    this.selectedBus.splice(index, 1);
    switch (frame) {
      case 'videoElement':
        this.videoElement = false;
        break;
      case 'videoElement2':
        this.videoElement2 = false;
        break;
      case 'videoElement3':
        this.videoElement3 = false;
        break;
      case 'videoElement4':
        this.videoElement4 = false;
        break;
      case 'videoElement5':
        this.videoElement5 = false;
        break;
      case 'videoElement6':
        this.videoElement6 = false;
        break;
      case 'videoElement7':
        this.videoElement7 = false;
        break;
      case 'videoElement8':
        this.videoElement8 = false;
        break;
      case 'videoElement9':
        this.videoElement9 = false;
        break;
      default:
        this.messageService.add({
          severity: 'info',
          summary: 'Node Selected',
          detail: event.node.label,
        });
    }
    this.messageService.add({
      severity: 'info',
      summary: 'Bus Unselected',
      detail: event.node.label,
    });
  }

  playFront(frame: string) {
    debugger;
    var front_url = this.selectedBus.find(
      (x) => x.FrameNumber == frame
    ).ForntUrl;
    this.play(front_url, frame);
  }
  playBack(frame: string) {
    var front_url = this.selectedBus.find(
      (x) => x.FrameNumber == frame
    ).BackUrl;
    this.play(front_url, frame);
  }
  playRear(frame: string) {
    var front_url = this.selectedBus.find(
      (x) => x.FrameNumber == frame
    ).RearUrl;
    this.play(front_url, frame);
  }
  playSide(frame: string) {
    var front_url = this.selectedBus.find(
      (x) => x.FrameNumber == frame
    ).SideUrl;
    this.play(front_url, frame);
  }
}
