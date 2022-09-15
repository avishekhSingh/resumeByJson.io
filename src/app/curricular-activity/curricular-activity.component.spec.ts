import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurricularActivityComponent } from './curricular-activity.component';

describe('CurricularActivityComponent', () => {
  let component: CurricularActivityComponent;
  let fixture: ComponentFixture<CurricularActivityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CurricularActivityComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CurricularActivityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
