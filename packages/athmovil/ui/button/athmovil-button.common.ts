import { AMButton as ButtonDefinition } from "./athmovil-button";

import { View, Style, Property, CssProperty, isIOS } from "@nativescript/core";

export const textProperty = new Property<AMButtonBase, string>({ name: "text", defaultValue: "", affectsLayout: isIOS });

// using myOpacity instead of opacity as it will override the one defined in `@nativescript/core`
export const myOpacityProperty = new CssProperty<Style, number>({
    name: "myOpacity", cssName: "my-opacity", defaultValue: 1, valueConverter: (v) => {
        const x = parseFloat(v);
        if (x < 0 || x > 1) {
            throw new Error(`opacity accepts values in the range [0, 1]. Value: ${v}`);
        }

        return x;
    }
});
export abstract class AMButtonBase extends View implements ButtonDefinition {
    public static tapEvent = "tap";
    text: string;

    // Exposing myOpacity style property through MyButton.
    // This is all optional. If not exposed users will have to set it
    // through style: <control:MyButton style.myOpacity='0.4' />.
    get myOpacity(): number {
        return this.style.myOpacity;
    }
    set myOpacity(value: number) {
        this.style.myOpacity = value;
    }
}

// Augmenting Style definition so it includes our myOpacity property
declare module "@nativescript/core/ui/styling/style" {
    interface Style {
        myOpacity: number;
    }
}

// Defines 'text' property on MyButtonBase class.
textProperty.register(AMButtonBase);

// Defines 'myOpacity' property on Style class.
myOpacityProperty.register(Style);

// If set to true - nativeView will be kept in memory and reused when some other instance 
// of type MyButtonBase needs nativeView. Set to true only if you are sure that you can reset the
// nativeView to its initial state. When true will improve application performance. 
AMButtonBase.prototype.recycleNativeView = "auto"; 