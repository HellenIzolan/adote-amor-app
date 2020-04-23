import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TelefonesSavePage } from './telefones-save.page';

describe('TelefonesSavePage', () => {
  let component: TelefonesSavePage;
  let fixture: ComponentFixture<TelefonesSavePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TelefonesSavePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TelefonesSavePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
