import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagenotfoundpageComponent } from './pagenotfoundpage.component';

describe('PagenotfoundpageComponent', () => {
  let component: PagenotfoundpageComponent;
  let fixture: ComponentFixture<PagenotfoundpageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PagenotfoundpageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PagenotfoundpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
