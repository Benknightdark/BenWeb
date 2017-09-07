import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillmanageComponent } from './skillmanage.component';

describe('SkillmanageComponent', () => {
  let component: SkillmanageComponent;
  let fixture: ComponentFixture<SkillmanageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SkillmanageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SkillmanageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
