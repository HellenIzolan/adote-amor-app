import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DadosSavePage } from './dados-save.page';

describe('DadosSavePage', () => {
  let component: DadosSavePage;
  let fixture: ComponentFixture<DadosSavePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DadosSavePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DadosSavePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
