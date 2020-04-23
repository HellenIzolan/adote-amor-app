import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MarketingSavePage } from './marketing-save.page';

describe('MarketingSavePage', () => {
  let component: MarketingSavePage;
  let fixture: ComponentFixture<MarketingSavePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MarketingSavePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MarketingSavePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
