import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ActaNacimientoPage } from './acta-nacimiento.page';

describe('ActaNacimientoPage', () => {
  let component: ActaNacimientoPage;
  let fixture: ComponentFixture<ActaNacimientoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActaNacimientoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ActaNacimientoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
