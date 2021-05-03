import { async, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { AddcompPage } from './addcomp.page';
describe('AddcompPage', () => {
    let component;
    let fixture;
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [AddcompPage],
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
//# sourceMappingURL=addcomp.page.spec.js.map