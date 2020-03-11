import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DadosOngPage } from './dados-ong.page';

describe('DadosOngPage', () => {
  let component: DadosOngPage;
  let fixture: ComponentFixture<DadosOngPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DadosOngPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DadosOngPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
