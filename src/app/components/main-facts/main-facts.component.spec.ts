import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainFactsComponent } from './main-facts.component';

describe('MainFactsComponent', () => {
  let component: MainFactsComponent;
  let fixture: ComponentFixture<MainFactsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainFactsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MainFactsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
