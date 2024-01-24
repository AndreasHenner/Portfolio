import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyWorkTitleComponent } from './my-work-title.component';

describe('MyWorkTitleComponent', () => {
  let component: MyWorkTitleComponent;
  let fixture: ComponentFixture<MyWorkTitleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MyWorkTitleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MyWorkTitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
