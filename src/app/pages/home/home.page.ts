import { Component, inject, OnInit } from '@angular/core';
import { CameraSource } from '@capacitor/camera';
import { CameraServiceService } from 'src/app/services/camera-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  private _cameraService = inject(CameraServiceService);

  constructor() {}

  ngOnInit() {}

  cameraSoruce = CameraSource;

  async takePicture(type: CameraSource) {
    try {
      const image = this._cameraService.takePicture(type);
    } catch (error) {
      console.log(error);
    }
  }
}
