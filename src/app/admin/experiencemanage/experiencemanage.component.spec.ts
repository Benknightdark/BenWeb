import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExperiencemanageComponent } from './experiencemanage.component';

describe('ExperiencemanageComponent', () => {
  let component: ExperiencemanageComponent;
  let fixture: ComponentFixture<ExperiencemanageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExperiencemanageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExperiencemanageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
