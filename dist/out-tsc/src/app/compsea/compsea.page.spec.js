import { async, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { CompseaPage } from './compsea.page';
describe('CompseaPage', () => {
    let component;
    let fixture;
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [CompseaPage],
            imports: [IonicModule.forRoot()]
        }).compileComponents();
        fixture = TestBed.createComponent(CompseaPage);
        component = fixture.componentInstance;
        fixture.detectChanges();
    }));
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=compsea.page.spec.js.map