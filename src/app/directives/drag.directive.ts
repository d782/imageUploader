import { Directive, HostBinding, HostListener } from '@angular/core';
import { ImageServiceService } from '../services/image-service.service';




@Directive({
  selector: '[appDrag]'
})

export class DragDirective {

  constructor(private imageService:ImageServiceService){

  }

  @HostBinding("style.background") private background="#fff"
  
  @HostListener("dragover",["$event"])
  public onDragOver(event:DragEvent){
    event.preventDefault();
    event.stopPropagation();
    this.background="#fafafa";
  }

  @HostListener("dragleave",["$event"])
  public onDragLeave(event:DragEvent){
    event.preventDefault();
    event.stopPropagation();
    this.background="#fff";
  }

  @HostListener('drop', ['$event']) public onDrop(event: DragEvent) {
    event.preventDefault();
    event.stopPropagation();
    this.background = "#fafafa";
    let files: File[] = [];
    if(!event.dataTransfer?.files){ return }
    for (let i = 0; i < event.dataTransfer.files.length; i++) {
      const file = event .dataTransfer.files[i];
      files.push(file);
    }
    if (files.length > 0) {
      this.imageService.loadFile.next({
        file:files,
        loading:true
      })
    }
  }
}
