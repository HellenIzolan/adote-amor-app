import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AdocoesSavePage } from './adocoes-save.page';

describe('AdocoesSavePage', () => {
  let component: AdocoesSavePage;
  let fixture: ComponentFixture<AdocoesSavePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdocoesSavePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AdocoesSavePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
