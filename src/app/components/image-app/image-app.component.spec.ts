import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageAppComponent } from './image-app.component';

describe('ImageAppComponent', () => {
  let component: ImageAppComponent;
  let fixture: ComponentFixture<ImageAppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImageAppComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ImageAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
