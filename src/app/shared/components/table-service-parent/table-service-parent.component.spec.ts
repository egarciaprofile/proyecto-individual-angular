import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableServiceParentComponent } from './table-service-parent.component';
import { TicketerUser } from '../../models/user/user.model';

describe('TableServiceParentComponent', () => {
  let component: TableServiceParentComponent<TicketerUser>;
  let fixture: ComponentFixture<TableServiceParentComponent<TicketerUser>>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableServiceParentComponent<TicketerUser> ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TableServiceParentComponent<TicketerUser>);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
