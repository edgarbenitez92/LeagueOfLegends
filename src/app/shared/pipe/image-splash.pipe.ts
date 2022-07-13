import { Pipe, PipeTransform } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Champion } from '../interfaces/champions';

@Pipe({
  name: 'imageSplash',
})
export class ImageSplashPipe implements PipeTransform {
  transform({ id }: Champion): string {
    return `${environment.apiBaseUrl}/img/champion/loading/${id}_0.jpg`;
  }
}
