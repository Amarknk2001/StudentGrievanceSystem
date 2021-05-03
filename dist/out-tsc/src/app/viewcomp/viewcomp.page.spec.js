import { async, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { ViewcompPage } from './viewcomp.page';
describe('ViewcompPage', () => {
    let component;
    let fixture;
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ViewcompPage],
            imports: [IonicModule.forRoot()]
        }).compileComponents();
        fixture = TestBed.createComponent(ViewcompPage);
        component = fixture.componentInstance;
        fixture.detectChanges();
    }));
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=viewcomp.page.spec.js.map