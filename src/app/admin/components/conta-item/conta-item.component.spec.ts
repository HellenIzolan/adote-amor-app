import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ContaItemComponent } from './conta-item.component';

describe('ContaItemComponent', () => {
  let component: ContaItemComponent;
  let fixture: ComponentFixture<ContaItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ContaItemComponent],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ContaItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
