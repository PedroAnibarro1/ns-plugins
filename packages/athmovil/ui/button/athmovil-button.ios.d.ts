import { AMButtonBase } from "./athmovil-button.common";
export * from "./athmovil-button.common";
export declare class AMButton extends AMButtonBase {
    nativeView: UIButton;
    createNativeView(): Object;
    initNativeView(): void;
    disposeNativeView(): void;
}
