import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AdocoesPage } from './adocoes.page';

describe('AdocoesPage', () => {
  let component: AdocoesPage;
  let fixture: ComponentFixture<AdocoesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdocoesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AdocoesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
