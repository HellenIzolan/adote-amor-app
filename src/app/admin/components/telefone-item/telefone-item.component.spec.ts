import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TelefoneItemComponent } from './telefone-item.component';

describe('TelefoneItemComponent', () => {
  let component: TelefoneItemComponent;
  let fixture: ComponentFixture<TelefoneItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TelefoneItemComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TelefoneItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
