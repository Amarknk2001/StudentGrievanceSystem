import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AddcompPage } from './addcomp.page';

describe('AddcompPage', () => {
  let component: AddcompPage;
  let fixture: ComponentFixture<AddcompPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddcompPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AddcompPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
