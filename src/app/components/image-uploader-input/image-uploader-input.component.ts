import { Component} from '@angular/core';
import { ImageServiceService } from 'src/app/services/image-service.service';

@Component({
  selector: 'app-image-uploader-input',
  templateUrl: './image-uploader-input.component.html',
  styleUrls: ['./image-uploader-input.component.scss']
})
export class ImageUploaderInputComponent {

  constructor(private imageService:ImageServiceService) {}

  getFiles($event:Event|any):void{
    const file=Array.from<File>($event.target.files)
    this.imageService.loadFile.next({
      file,
      loading:true
    })
  }
}
