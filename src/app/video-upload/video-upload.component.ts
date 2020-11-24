import { Component, OnInit } from '@angular/core';


import { HttpClient } from '@angular/common/http'
import {VideoService} from 'src/app/video.service'
import { from } from 'rxjs';
import { FormGroup, FormControl } from "@angular/forms";

@Component({
  selector: 'app-video-upload',
  templateUrl: './video-upload.component.html',
  styleUrls: ['./video-upload.component.css']
})
export class VideoUploadComponent implements OnInit {
  form: FormGroup;
  profile: VideoService;
  videoData: string;
  constructor(private VideoService: VideoService) {}

  ngOnInit(): void {
    this.form = new FormGroup({
      name: new FormControl(null),
      video: new FormControl(null),
    });
  }
  onFileSelect(event: Event) {
    const file = (event.target as HTMLInputElement).files[0];
    this.form.patchValue({ video: file });
    const allowedMimeTypes = ['video/mp4', 'video/mpeg ', 'video/3gpp'];
    if (file && allowedMimeTypes.includes(file.type)) {
      const reader = new FileReader();
      reader.onload = () => {
        this.videoData = reader.result as string;
      };
      reader.readAsDataURL(file);
    }
  }

  onSubmit() {
    this.VideoService.addProfile(this.form.value.name, this.form.value.video);
    this.form.reset();
    this.videoData = null;
  }

}
