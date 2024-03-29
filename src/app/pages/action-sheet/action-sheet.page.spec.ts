import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { ActionSheetPage } from './action-sheet.page';

describe('ActionSheetPage', () => {
  let component: ActionSheetPage;
  let fixture: ComponentFixture<ActionSheetPage>;

  beforeEach(waitForAsync(() => {
    fixture = TestBed.createComponent(ActionSheetPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
