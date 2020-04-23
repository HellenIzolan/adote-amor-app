import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DadosItemComponent } from './dados-item.component';

describe('DadosItemComponent', () => {
  let component: DadosItemComponent;
  let fixture: ComponentFixture<DadosItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DadosItemComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DadosItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
