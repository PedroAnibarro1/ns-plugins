import { AMPaymentItem, AMPayment, AMTransactionListener } from './index.common';
import { AthmovilCommon } from './index.common';
import { Utils } from "@nativescript/core";

export * from "./index.common";

type ATHMItem = com.evertecinc.athmovil.sdk.checkout.objects.Items;

export class Athmovil extends AthmovilCommon {

    private athmPayment: com.evertecinc.athmovil.sdk.checkout.objects.ATHMPayment;
    private static INSTANCE: Athmovil = null;
 
    // other instance variables can be here
    public delegate: AMTransactionListener;
     
    private constructor() {
        super();
    };

    public static getInstance(): Athmovil {
        if (this.INSTANCE == null) {
            this.INSTANCE = new Athmovil();
        }
        return this.INSTANCE;
    }

    static checkout(publicToken: string, urlScheme: string, payment: AMPayment, onCompleted: (referenceNumber: string) => {}, onCancelled: (referenceNumber: string) => {}, onExpired: (referenceNumber: string) => {}, onException: (error: string, description: string) => {}) {

        console.log("checkout in android")
        let instance = this.getInstance();

        instance.athmPayment = new com.evertecinc.athmovil.sdk.checkout.objects.ATHMPayment(Utils.ad.getApplicationContext());
        instance.athmPayment.setPublicToken(publicToken);
        instance.athmPayment.setCallbackSchema(urlScheme);

        instance.athmPayment.setTotal(payment.total);
        instance.athmPayment.setMetadata1(payment.metadata1);
        instance.athmPayment.setMetadata2(payment.metadata2);
        instance.athmPayment.setItems(this.getNativeItemsFrom(payment.items));
        instance.athmPayment.setBuildType("");

        com.evertecinc.athmovil.sdk.checkout.OpenATHM.validateData(instance.athmPayment, Utils.ad.getApplicationContext());    
    }   

    private static getNativeItemsFrom(items: AMPaymentItem[]): java.util.ArrayList<ATHMItem> {

        let nativeItems: java.util.ArrayList<ATHMItem> = new java.util.ArrayList<ATHMItem>();
        items.forEach(item => {
            let nativeItem = new com.evertecinc.athmovil.sdk.checkout.objects.Items(
                item.name,
                item.description,
                new java.lang.Double(item.price),
                new java.lang.Long(item.quantity),
                item.metadata
            )
            nativeItems.add(nativeItem);
        });

        return nativeItems;  

    }

}

export class AMTransactionSession {

    constructor(listener: AMTransactionListener) {
        Athmovil.getInstance().delegate = listener;
    }

}

export class AMDelegateActivity extends androidx.appcompat.app.AppCompatActivity implements com.evertecinc.athmovil.sdk.checkout.interfaces.PaymentResponseListener, android.view.View.OnClickListener {

    private delegate: AMTransactionListener = Athmovil.getInstance().delegate;

    public onCompletedPayment(param0: java.util.Date, param1: string, param2: string, param3: string, param4: string, param5: string, param6: java.lang.Double, param7: java.lang.Double, param8: java.lang.Double, param9: java.lang.Double, param10: java.lang.Double, param11: string, param12: string, param13: string, param14: java.util.ArrayList<com.evertecinc.athmovil.sdk.checkout.objects.Items>): void {
        this.delegate.onCompletePayment(param1);
    }
    public onCancelledPayment(param0: java.util.Date, param1: string, param2: string, param3: string, param4: string, param5: string, param6: java.lang.Double, param7: java.lang.Double, param8: java.lang.Double, param9: java.lang.Double, param10: java.lang.Double, param11: string, param12: string, param13: string, param14: java.util.ArrayList<com.evertecinc.athmovil.sdk.checkout.objects.Items>): void {
        this.delegate.onCancelledPayment(param1);
    }
    public onExpiredPayment(param0: java.util.Date, param1: string, param2: string, param3: string, param4: string, param5: string, param6: java.lang.Double, param7: java.lang.Double, param8: java.lang.Double, param9: java.lang.Double, param10: java.lang.Double, param11: string, param12: string, param13: string, param14: java.util.ArrayList<com.evertecinc.athmovil.sdk.checkout.objects.Items>): void {
        this.delegate.onExpiredPayment(param1);
    }
    public onPaymentException(param0: string, param1: string): void {
        this.delegate.onPaymentException(param0, param1);
    }    
    public onClick(param0: globalAndroid.view.View): void {
        // throw new Error("Method not implemented.");
        // Do nothing
    }
}