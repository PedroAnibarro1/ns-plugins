import { Observable, EventData, Page } from '@nativescript/core';
import { DemoSharedAthmovil } from '@demo/shared';
import { } from '@emstudio/athmovil';

export function navigatingTo(args: EventData) {
	const page = <Page>args.object;
	page.bindingContext = new DemoModel();
}

export class DemoModel extends DemoSharedAthmovil {
	
}
