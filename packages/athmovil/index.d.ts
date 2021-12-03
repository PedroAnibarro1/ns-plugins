import { AthmovilCommon } from './index.common';

export declare class Athmovil extends AthmovilCommon {

  delegate: AMTransactionListener;

  static handleIncomingURL(url: NSURL): boolean
  static checkout(publicToken: string, urlScheme: string, payment: AMPayment): void;
  static getInstance(): Athmovil
    
}


export declare enum AMButtonStyle {
    original,
    light,
    dark
  }
  
  export declare enum AMLanguage {
    english,
    spanish
  }
  
  export declare class AMPaymentItem {
    name: string;
    description: string;
    quantity: number;
    price: number;
    metadata: string;
  
    constructor(name: string,
      description: string,
      quantity: number,
      price: number,
      metadata: string)
  
  }
  
  export declare class AMPayment {
    total: number;
    subtotal: number;
    tax: number;
    metadata1: string;
    metadata2: string;
    items: AMPaymentItem[];
  
    constructor(total: number,
      subtotal: number,
      tax: number,
      metadata1: string,
      metadata2: string,
      items: AMPaymentItem[])
  
  }
  
  export declare interface AMTransactionListener {
    onCompletePayment(referenceNumber: string): void;
    onCancelledPayment(referenceNumber: string): void;
    onExpiredPayment(referenceNumber: string): void;
    onPaymentException(error: string, description: string): void;
  }
  
  export class AMTransactionSession {
    private delegate: AMDelegate;
    constructor(listener: AMTransactionListener);
  }
  
  export class AMDelegateActivity extends androidx.appcompat.app.AppCompatActivity implements com.evertecinc.athmovil.sdk.checkout.interfaces.PaymentResponseListener, android.view.View.OnClickListener {
  
    private delegate: AMTransactionListener = Athmovil.getInstance().delegate;
  
    public onCompletedPayment(param0: string, param1: java.lang.Double, param2: java.lang.Double, param3: java.lang.Double, param4: string, param5: string, param6: java.util.ArrayList<com.evertecinc.athmovil.sdk.checkout.objects.Items>): void;
    public onCancelledPayment(param0: string, param1: java.lang.Double, param2: java.lang.Double, param3: java.lang.Double, param4: string, param5: string, param6: java.util.ArrayList<com.evertecinc.athmovil.sdk.checkout.objects.Items>): void;
    public onExpiredPayment(param0: string, param1: java.lang.Double, param2: java.lang.Double, param3: java.lang.Double, param4: string, param5: string, param6: java.util.ArrayList<com.evertecinc.athmovil.sdk.checkout.objects.Items>): void;
    public onClick(param0: globalAndroid.view.View): void;
  }