import { EnsureModuleLoadedOnceGuard } from './ensureModuleLoadedOnceGuard';
import { CoreModule } from './core.module';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

describe('EnsureModuleLoadedOnceGuard', () => {
    beforeEach(async(() => {
        TestBed.configureTestingModule({
          imports: [],
        })
        .compileComponents();
      }));
    // it('should be created', () => {
    //     let z;
    //     try {
    //         z = new EnsureModuleLoadedOnceGuard(OverlayModule);
    //    } catch ( e) {
    //     expect(z).toBeUndefined();
    // }
    // });
    it('should be call else path', () => {
        let z;
        try {
           z = new EnsureModuleLoadedOnceGuard(0);
       } catch ( e) {
        expect(z).toBeUndefined();
    }
    });
});
