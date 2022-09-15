import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FrontEndProjectsComponent } from './front-end-projects.component';

describe('FrontEndProjectsComponent', () => {
  let component: FrontEndProjectsComponent;
  let fixture: ComponentFixture<FrontEndProjectsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FrontEndProjectsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FrontEndProjectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
