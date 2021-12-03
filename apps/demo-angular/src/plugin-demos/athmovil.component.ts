import { Component, NgZone } from '@angular/core';
import { DemoSharedAthmovil } from '@demo/shared';
import { } from '@emstudio/athmovil';

@Component({
	selector: 'demo-athmovil',
	templateUrl: 'athmovil.component.html',
})
export class AthmovilComponent {
  
  demoShared: DemoSharedAthmovil;
  
	constructor(private _ngZone: NgZone) {}

  ngOnInit() {
    this.demoShared = new DemoSharedAthmovil();
  }

}