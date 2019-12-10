import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CURPPage } from './curp.page';

describe('CURPPage', () => {
  let component: CURPPage;
  let fixture: ComponentFixture<CURPPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CURPPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CURPPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
