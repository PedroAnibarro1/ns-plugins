import { AMPaymentItem, AMPayment, AMTransactionListener } from './index.common';
import { AthmovilCommon } from './index.common';

export * from './index.common';

export class Athmovil extends AthmovilCommon {
  private static INSTANCE: Athmovil = null;
  public delegate: AMTransactionListener;

  public static getInstance(): Athmovil {
    if (this.INSTANCE === null) {
      this.INSTANCE = new Athmovil();
    }
    return this.INSTANCE;
  }

  private constructor() {
    super();
  }

  static handleIncomingURL(url: NSURL): void {
    ATHMPaymentSession.shared.url = url;
  }

  static checkout(publicToken: string, urlScheme: string, payment: AMPayment) {

    const businessAccount = new ATHMBusinessAccount({
      token: publicToken,
    });

    const scheme = new ATHMURLScheme({
      urlScheme: urlScheme,
    });

    const amPayment = new ATHMPayment({
      total: payment.total,
    });

    amPayment.subtotal = payment.subtotal;
    amPayment.tax = payment.tax;
    amPayment.metadata1 = payment.metadata1;
    amPayment.metadata2 = payment.metadata2;
    amPayment.items = this.getNativeItemsFrom(payment.items);
    
    const handler = ATHMPaymentHandler.alloc().initOnCompletedOnExpiredOnCancelledOnException(
      (response: ATHMPaymentResponse) => {
        this.getInstance().delegate.onCompletePayment(response.status.referenceNumber);
      },
      (response: ATHMPaymentResponse) => {
        this.getInstance().delegate.onCancelledPayment(response.status.referenceNumber);
      },
      (response: ATHMPaymentResponse) => {
        this.getInstance().delegate.onExpiredPayment(response.status.referenceNumber);
      },
      (error: ATHMPaymentError) => {
        this.getInstance().delegate.onPaymentException(error.errorDescription, error.failureReason);
      }
    );

    const request = new ATHMPaymentRequest({
      account: businessAccount,
      scheme: scheme,
      payment: amPayment,
    });

    console.log(request.description);

    request.payWithHandler(handler);
  }

  private static getNativeItemsFrom(items: AMPaymentItem[]): NSArray<ATHMPaymentItem> {
    let nativeItems: ATHMPaymentItem[] = [];
    items.forEach((item) => {
      const nativeItem = new ATHMPaymentItem({
        name: item.name,
        price: item.price,
        quantity: item.quantity,
      });
      nativeItem.desc = item.description;
      nativeItem.metadata = item.metadata;
      nativeItems.push(nativeItem);
    });

    const nativeArray: NSArray<any> = NSArray.alloc().initWithArray(nativeItems);    
    return nativeArray;
  }
}

export class AMTransactionSession {
  constructor(listener: AMTransactionListener) {
    Athmovil.getInstance().delegate = listener;
  }
}
