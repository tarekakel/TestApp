import { Component, ElementRef, Input, OnDestroy, 
  OnInit, ViewChild, ViewEncapsulation } from 
  '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import videojs from 'video.js';
import flvjs from 'flv.js';
import {TreeModule} from 'primeng/tree';
import {TreeNode,MessageService} from 'primeng/api';
import { NodeService } from './nodeservice';

@Component({
  selector: 'app-live-streaming',
  templateUrl: './live-streaming.component.html',
  styleUrls: ['./live-streaming.component.scss']
})
export class LiveStreamingComponent implements OnInit  {
  
  player : any;
  @Input() options: {
    fluid: boolean,
    aspectRatio: string,
    autoplay: boolean,
    sources: {
        src: string,
        type: string,
    }[],
};
url:any;
    files1: TreeNode[];

    files2: TreeNode[];

    files3: TreeNode[];

    selectedFile: TreeNode;

    selectedFiles1: TreeNode;

    selectedFiles2: TreeNode;

constructor(
  private elementRef: ElementRef,private route: ActivatedRoute,
  private nodeService: NodeService, private messageService: MessageService
) { }
 
 

  ngOnInit() {
    this.nodeService.getFiles().then(files => this.files1 = files);
    this.nodeService.getFiles().then(files => this.files2 = files);
    this.nodeService.getFiles().then(files => this.files3 = files);
    // instantiate Video.js
    
  }

  ngOnDestroy() {
    // destroy player
    if (this.player) {
      this.player.dispose();
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

nodeSelect(event) {
  this.messageService.add({severity: 'info', summary: 'Node Selected', detail: event.node.label});
}

nodeUnselect(event) {
  this.messageService.add({severity: 'info', summary: 'Node Unselected', detail: event.node.label});
}

}
