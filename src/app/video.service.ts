import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

import { map } from "rxjs/operators";
import { Upload } from "./models/upload";
import { Subject } from "rxjs";


@Injectable({
  providedIn: 'root'
})
export class VideoService {

  private upload: Upload[] = [];
  private upload$ = new Subject<Upload[]>();
  readonly url = "http://localhost:3000/api/upload";

  constructor(private http: HttpClient) {}

  getupload() {
    this.http
      .get<{ upload: Upload[] }>(this.url)
      .pipe(
        map((uploadData) => {
          return uploadData.upload;
        })
      )
      .subscribe((upload) => {
        this.upload = upload;
        this.upload$.next(this.upload);
      });
  }

  getUploadStream() {
    return this.upload$.asObservable();
  }

  addProfile(name: string, video: Blob): void {
    const uploadData = new FormData();
    uploadData.append("name", name);
    uploadData.append("video", video, name);
    this.http
      .post<{ upload: Upload }>(this.url, uploadData)
      .subscribe((uploadData) => {
        const upload: Upload = {
          _id: uploadData.upload._id,
          name: name,
          videoPath: uploadData.upload.videoPath,
        };
        this.upload.push(upload);
        this.upload$.next(this.upload);
      });
  }

  private _getUrl = 'http://localhost:3000/api/uploads/';



getVideos(){
  return this.http.get<any>(this._getUrl);
}
}
