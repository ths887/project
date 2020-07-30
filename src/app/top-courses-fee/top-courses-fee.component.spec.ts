import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TopCoursesFeeComponent } from './top-courses-fee.component';

describe('TopCoursesFeeComponent', () => {
  let component: TopCoursesFeeComponent;
  let fixture: ComponentFixture<TopCoursesFeeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TopCoursesFeeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopCoursesFeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
