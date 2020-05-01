import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomePageDescriptionComponent } from './home-page-description.component';

describe('HomePageDescriptionComponent', () => {
  let component: HomePageDescriptionComponent;
  let fixture: ComponentFixture<HomePageDescriptionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomePageDescriptionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomePageDescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
