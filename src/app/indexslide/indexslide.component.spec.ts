import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IndexslideComponent } from './indexslide.component';

describe('IndexslideComponent', () => {
  let component: IndexslideComponent;
  let fixture: ComponentFixture<IndexslideComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IndexslideComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IndexslideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
