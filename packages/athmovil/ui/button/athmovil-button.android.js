import { AMButtonBase } from "./athmovil-button.common";
export * from "./athmovil-button.common";
let clickListener;
function initializeClickListener() {
    if (clickListener) {
        return;
    }
    let ClickListener = class ClickListener extends java.lang.Object {
        constructor() {
            super();
            return global.__native(this);
        }
        onClick(v) {
            const owner = v.owner;
            if (owner) {
                owner.notify({ eventName: AMButtonBase.tapEvent, object: owner });
            }
        }
    };
    ClickListener = __decorate([
        Interfaces([android.view.View.OnClickListener]),
        __metadata("design:paramtypes", [])
    ], ClickListener);
    clickListener = new ClickListener();
}
export class AMButton extends AMButtonBase {
    createNativeView() {
        initializeClickListener();
        const button = new com.evertecinc.athmovil.sdk.checkout.PayButton(this._context);
        button.setLanguage(com.evertecinc.athmovil.sdk.checkout.PayButton.ButtonLanguage.EN);
        button.setTheme(com.evertecinc.athmovil.sdk.checkout.PayButton.ButtonTheme.ORIGINAL);
        button.setOnClickListener(clickListener);
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
//# sourceMappingURL=athmovil-button.android.js.map