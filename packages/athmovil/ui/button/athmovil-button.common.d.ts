import { AMButton as ButtonDefinition } from "./athmovil-button";
import { View } from "@nativescript/core";
export declare abstract class AMButtonBase extends View implements ButtonDefinition {
    static tapEvent: string;
    text: string;
}
