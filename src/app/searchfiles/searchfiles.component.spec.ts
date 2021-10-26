import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchfilesComponent } from './searchfiles.component';

describe('SearchfilesComponent', () => {
  let component: SearchfilesComponent;
  let fixture: ComponentFixture<SearchfilesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchfilesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchfilesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
