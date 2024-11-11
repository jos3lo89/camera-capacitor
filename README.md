## Usar camara en ionic con capacitor
### Paso 1. Instalar dependencias
- ir a la pagina de capacitor [camera capacitor](https://capacitorjs.com/docs/apis/camera)
- `npm  install @capacitor/camera`
- ir al sitio de pwa elements [pwa elements](https://capacitorjs.com/docs/web/pwa-elements)
- `npm  install @ionic/pwa-elements`
- buscamos la opción para angular
```ts
import { defineCustomElements } from '@ionic/pwa-elements/loader';
// Call the element loader before the bootstrapModule/bootstrapApplication call
defineCustomElements(window);
if (environment.production) {
  enableProdMode();
}
```
- Crear un  servicio con `ionic g service services/camera`
- crear un metodo para usar la camara
```ts
import { Camera, CameraResultType } from '@capacitor/camera';

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
