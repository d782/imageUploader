import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ImageServiceService } from '../../services/image-service.service';
import { switchMap } from 'rxjs';


@Component({
  selector: 'app-image-app',
  templateUrl: './image-app.component.html',
  styleUrls: ['./image-app.component.scss']
})
export class ImageAppComponent implements OnInit {
  file!: File[];
  loading!: boolean;
  error!:boolean;
  constructor(
    private router: Router,
    private imageService: ImageServiceService
  ) {

  }

  ngOnInit(): void {
    this.imageService.loadFile.pipe(
      switchMap((handleFile)=>{
        const {loading,file}=handleFile;
        this.loading=loading;
        this.error=false;
        return this.imageService.uploadImage(file[0])
      })
    )
    .subscribe((fileResponse) => {
      if(fileResponse.error){ 
        this.error=true;
        this.loading=false;
        return 
      }
      this.router.navigate(["uploaded/"+fileResponse.id_file])
    })
  }
}
