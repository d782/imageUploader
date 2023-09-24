import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageUploaderDragComponent } from './image-uploader-drag.component';

describe('ImageUploaderDragComponent', () => {
  let component: ImageUploaderDragComponent;
  let fixture: ComponentFixture<ImageUploaderDragComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImageUploaderDragComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ImageUploaderDragComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
