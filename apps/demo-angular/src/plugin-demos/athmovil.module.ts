import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptCommonModule, NativeScriptRouterModule } from '@nativescript/angular';
import { AthmovilComponent } from './athmovil.component';

@NgModule({
	imports: [NativeScriptCommonModule, NativeScriptRouterModule.forChild([{ path: '', component: AthmovilComponent }])],
  declarations: [AthmovilComponent],
  schemas: [ NO_ERRORS_SCHEMA]
})
export class AthmovilModule {}
