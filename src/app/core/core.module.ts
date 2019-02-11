import { NgModule, CUSTOM_ELEMENTS_SCHEMA, SkipSelf, Optional } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ToasterService } from './services/';
import { EnsureModuleLoadedOnceGuard } from './ensureModuleLoadedOnceGuard';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
   ],
  declarations: [],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  exports :[],
  providers: [ToasterService]
})
export class CoreModule extends EnsureModuleLoadedOnceGuard {
  // Ensure that CoreModule is only loaded into AppModule
  constructor( @Optional() @SkipSelf() parentModule: CoreModule) {
    super(parentModule);
  }
}
