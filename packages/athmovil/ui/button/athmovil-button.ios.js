import { AMButtonBase } from "./athmovil-button.common";
export * from "./athmovil-button.common";
import { Frame } from '@nativescript/core';
let TapHandler = class TapHandler extends NSObject {
    tap(nativeButton, nativeEvent) {
        const owner = nativeButton.owner;
        if (owner) {
            owner.notify({ eventName: AMButtonBase.tapEvent, object: owner });
        }
    }
};
TapHandler.ObjCExposedMethods = {
    "tap": { returns: interop.types.void, params: [interop.types.id, interop.types.id] }
};
TapHandler = __decorate([
    NativeClass()
], TapHandler);
const handler = TapHandler.new();
export class AMButton extends AMButtonBase {
    createNativeView() {
        const button = ATHMCheckout.shared.getCheckoutButtonWithTargetAction(Frame.topmost(), "tap");
        button.addTargetActionForControlEvents(handler, "tap", 64);
        return button;
    }
    initNativeView() {
        this.nativeView.owner = this;
        super.initNativeView();
    }
    disposeNativeView() {
        this.nativeView.owner = null;
        super.disposeNativeView();
    }
}
//# sourceMappingURL=athmovil-button.ios.js.map