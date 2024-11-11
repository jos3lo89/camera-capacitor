## Usar camara en ionic con capacitor

- ir a la pagina de capacitor [camera capacitor](https://capacitorjs.com/docs/apis/camera)
- `npm  install @capacitor/camera`
- ir al sitio de pwa elements [pwa elements](https://capacitorjs.com/docs/web/pwa-elements)
- `npm  install @ionic/pwa-elements`
- buscamos la opción para angular
```ts
import { defineCustomElements } from '@ionic/pwa-elements/loader';
// -----------------------------------------------------------
defineCustomElements(window);
```
- Crear un  servicio con `ionic g service services/camera`
- crear un metodo para usar la camara
```ts
import { Camera, CameraResultType } from '@capacitor/camera';
// ------------------------------------------------
async takePicture(source: CameraSource) {
    try {
      const image = await Camera.getPhoto({
        quality: 90,
        resultType: CameraResultType.DataUrl,
        source,
      });

      if (!image.dataUrl) return null;
      return image.dataUrl;
    } catch (error) {
      console.log(error);
      return null;
    }
  }
```
- injecta el servicio en un componente
```ts
import { CameraSource } from '@capacitor/camera';
// ------------------------------------------------
private _cameraService = inject(CameraService)
cameraSoruce = CameraSource;
imgPreview: string | null = null;

  async takePicture(type: CameraSource) {
    try {
      this.imgPreview = await this._cameraService.takePicture(type);
    } catch (error) {
      console.log(error);
    }
  }
```
- html 
```html
<ion-header [translucent]="true">
  <ion-toolbar>
    <ion-title>uso de la camara con capacitor</ion-title>
  </ion-toolbar>
</ion-header>

<ion-content [fullscreen]="true">
  <h1>btn camara</h1>
  <ion-button (click)="takePicture(cameraSoruce.Photos)">
    ir a galeria
  </ion-button>
  <ion-button (click)="takePicture(cameraSoruce.Camera)">
    tomar foto
  </ion-button>

  @if (imgPreview) {
  <img src="{{imgPreview}}" alt="foto subida" />
  }
</ion-content>
```
