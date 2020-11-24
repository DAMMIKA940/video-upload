import { Component, OnInit,EventEmitter } from '@angular/core';
import { Video } from '../Video'
@Component({
  selector: 'video-list',
  templateUrl: './video-list.component.html',
  styleUrls: ['./video-list.component.css'],
  inputs:['videos'],
  outputs:['SelectVideo']
})
export class VideoListComponent implements OnInit {
videos :[];
video;
public SelectVideo = new EventEmitter();
  constructor() { }

  ngOnInit(): void {


  }

  onSelect(vid :Video){
    this.SelectVideo.emit(vid)

  }
}
