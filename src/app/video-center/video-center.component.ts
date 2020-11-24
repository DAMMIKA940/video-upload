import { Component, OnInit } from '@angular/core';


import { VideoService } from '../video.service';
import { Video } from './../video'


@Component({
  selector: 'app-video-center',
  templateUrl: './video-center.component.html',
  styleUrls: ['./video-center.component.css'],
  providers:[VideoService]
})
export class VideoCenterComponent implements OnInit {

  videos: Array<Video>;
selectedVideo : Video
  constructor(private _videoService :VideoService) { }

  ngOnInit(): void {
    this._videoService.getVideos().subscribe(data => this.videos = data);
     console.log("videos array", this.videos);
  }

  onSelectVideo(video:any){
    this.selectedVideo=video
    console.log(this.selectedVideo)
  }
}
