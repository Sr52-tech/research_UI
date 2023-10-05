import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DisPlacesPage } from './dis-places.page';

describe('DisPlacesPage', () => {
  let component: DisPlacesPage;
  let fixture: ComponentFixture<DisPlacesPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(DisPlacesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
