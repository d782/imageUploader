import { Component,OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs';
import { ImageServiceService } from '../../services/image-service.service';
import { environment } from 'src/environments/environment';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-image-card',
  templateUrl: './image-card.component.html',
  styleUrls: ['./image-card.component.scss']
})
export class ImageCardComponent implements OnInit {
  linkToImage!:string;
  idImage!:string;
  srcImage!:SafeUrl;

  constructor(
    private router:Router,
    private activatedRoute:ActivatedRoute,
    private imageService:ImageServiceService,
    private sanitizer:DomSanitizer
    ){

  }

  ngOnInit(): void {
    this.activatedRoute.paramMap.pipe(
      switchMap((resp=>{
        this.idImage=resp.get('idfile') as string;
        
        this.linkToImage=window.location.href;
        
        
        return this.imageService.getImage(this.idImage)
      }))
      ).subscribe(resp=>{
        if(!resp.length) { return }
        this.srcImage=this.sanitizer.bypassSecurityTrustUrl(resp[0].path);
    })
  }


  copyLink():void{
    navigator.clipboard.writeText(this.linkToImage);
  }

  mainMenu():void{
    this.router.navigate([""])
  }
}
