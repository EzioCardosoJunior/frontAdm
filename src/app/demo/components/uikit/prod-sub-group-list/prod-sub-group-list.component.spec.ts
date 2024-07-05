import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdSubGroupListComponent } from './prod-sub-group-list.component';

describe('ProdSubGroupListComponent', () => {
  let component: ProdSubGroupListComponent;
  let fixture: ComponentFixture<ProdSubGroupListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProdSubGroupListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProdSubGroupListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
