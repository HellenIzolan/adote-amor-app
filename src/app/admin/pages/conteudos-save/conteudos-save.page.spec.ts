import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ConteudosSavePage } from './conteudos-save.page';

describe('ConteudosSavePage', () => {
  let component: ConteudosSavePage;
  let fixture: ComponentFixture<ConteudosSavePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConteudosSavePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ConteudosSavePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
