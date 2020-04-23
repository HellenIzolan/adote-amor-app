import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TelefonesPage } from './telefones.page';

describe('TelefonesPage', () => {
  let component: TelefonesPage;
  let fixture: ComponentFixture<TelefonesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TelefonesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TelefonesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
