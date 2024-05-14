import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableServiceParentComponent } from './table-service-parent.component';

describe('TableServiceParentComponent', () => {
  let component: TableServiceParentComponent;
  let fixture: ComponentFixture<TableServiceParentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TableServiceParentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TableServiceParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
