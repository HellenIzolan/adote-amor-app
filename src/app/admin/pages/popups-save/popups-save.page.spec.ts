import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PopupsSavePage } from './popups-save.page';

describe('PopupsSavePage', () => {
  let component: PopupsSavePage;
  let fixture: ComponentFixture<PopupsSavePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PopupsSavePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PopupsSavePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
