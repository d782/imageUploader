import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageUploaderInputComponent } from './image-uploader-input.component';

describe('ImageUploaderInputComponent', () => {
  let component: ImageUploaderInputComponent;
  let fixture: ComponentFixture<ImageUploaderInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImageUploaderInputComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ImageUploaderInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
