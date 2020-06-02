import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ContasSavePage } from './contas-save.page';

describe('ContasSavePage', () => {
  let component: ContasSavePage;
  let fixture: ComponentFixture<ContasSavePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContasSavePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ContasSavePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
