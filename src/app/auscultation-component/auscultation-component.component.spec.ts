import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AuscultationComponentComponent } from './auscultation-component.component';

describe('AuscultationComponentComponent', () => {
  let component: AuscultationComponentComponent;
  let fixture: ComponentFixture<AuscultationComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AuscultationComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuscultationComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
