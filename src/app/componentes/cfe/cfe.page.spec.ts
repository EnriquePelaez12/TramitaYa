import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CFEPage } from './cfe.page';

describe('CFEPage', () => {
  let component: CFEPage;
  let fixture: ComponentFixture<CFEPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CFEPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CFEPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
