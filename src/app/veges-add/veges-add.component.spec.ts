import { HttpClient, HttpHandler } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { VegesAddComponent } from './veges-add.component';
import { StoreModule } from '@ngrx/store';
import { By } from '@angular/platform-browser';

describe('VegesAddComponent', () => {
  let component: VegesAddComponent;
  let fixture: ComponentFixture<VegesAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        ReactiveFormsModule,
        FormsModule,HttpClientTestingModule,StoreModule.forRoot({})
  
      ],
      declarations: [ VegesAddComponent ]
      ,providers:[HttpClient,HttpHandler]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VegesAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it(`should have as title 'add'`, () => {
    const fixture = TestBed.createComponent(VegesAddComponent);
    const app = fixture.componentInstance;
    expect(app.title2).toEqual('add');
  });
});
