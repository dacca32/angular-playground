import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NotificationsCreateComponent } from './notifications-create.component';

describe('NotificationsCreateComponent', () => {
  let component: NotificationsCreateComponent;
  let fixture: ComponentFixture<NotificationsCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NotificationsCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NotificationsCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
