import { AMButtonBase } from "./athmovil-button.common";
export * from "./athmovil-button.common";
export declare class AMButton extends AMButtonBase {
    nativeView: android.widget.Button;
    createNativeView(): Object;
    initNativeView(): void;
    disposeNativeView(): void;
}
