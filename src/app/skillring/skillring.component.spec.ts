import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillringComponent } from './skillring.component';

describe('SkillringComponent', () => {
  let component: SkillringComponent;
  let fixture: ComponentFixture<SkillringComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SkillringComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SkillringComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
