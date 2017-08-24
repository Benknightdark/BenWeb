import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillformComponent } from './skillform.component';

describe('SkillformComponent', () => {
  let component: SkillformComponent;
  let fixture: ComponentFixture<SkillformComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SkillformComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SkillformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
