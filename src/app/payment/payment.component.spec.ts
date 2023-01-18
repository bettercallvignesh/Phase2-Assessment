import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { PaymentComponent } from './payment.component';

describe('PaymentComponent', () => {
  let component: PaymentComponent;
  let fixture: ComponentFixture<PaymentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaymentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaymentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should check name', () => {
 
    const el=fixture.debugElement.query(By.css('#fname'));
    expect(el.nativeElement.getAttribute('type')).toEqual('text');
  });
  it('should check email', () => {
 
    const el=fixture.debugElement.query(By.css('#email'));
    expect(el.nativeElement.getAttribute('type')).toEqual('text');
  });
  it('should check address', () => {
 
    const el=fixture.debugElement.query(By.css('#adr'));
    expect(el.nativeElement.getAttribute('type')).toEqual('text');
  });
  it('should check city', () => {
 
    const el=fixture.debugElement.query(By.css('#city'));
    expect(el.nativeElement.getAttribute('type')).toEqual('text');
  });
});
