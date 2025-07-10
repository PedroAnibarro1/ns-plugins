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

  static handleIncomingURL(url: URL): void {
    ATHMPaymentSession.shared.url = url;
  }

  static checkout(publicToken: string, urlScheme: string, payment: AMPayment) {
    const businessAccount = ATHMBusinessAccount.alloc().initWithToken(publicToken);
    const scheme = ATHMURLScheme.alloc().initWithUrlScheme(urlScheme);

    const amPayment = ATHMPayment.alloc().initWithTotal(payment.total);
    amPayment.subtotal = payment.subtotal;
    amPayment.tax = payment.tax;
    amPayment.metadata1 = payment.metadata1;
    amPayment.metadata2 = payment.metadata2;
    
    if (payment.items && payment.items.length > 0) {
      amPayment.items = this.getNativeItemsFrom(payment.items);
    }

    const handler = ATHMPaymentHandler.alloc().initOnCompletedOnExpiredOnCancelledOnException(
      (response: ATHMPaymentResponse) => {
        // Pago completado
        const referenceNumber = response.status.referenceNumber;
        const dailyTransactionID = response.status.dailyTransactionID;
        const date = response.status.date;
        
        // Información del cliente
        const customerName = response.customer.name;
        const customerPhone = response.customer.phoneNumber;
        const customerEmail = response.customer.email;

        this.getInstance().delegate.onCompletePayment(referenceNumber);
      },
      (response: ATHMPaymentResponse) => {
        // Pago expirado
        this.getInstance().delegate.onExpiredPayment(response.status.referenceNumber);
      },
      (response: ATHMPaymentResponse) => {
        // Pago fallido
        this.getInstance().delegate.onCancelledPayment(response.status.referenceNumber);
      },
      (error: ATHMPaymentError) => {
        // Error en el pago
        const errorMessage = error.isRequestError ? 
          "Error en la solicitud de pago" : 
          "Error en la respuesta del pago";
        this.getInstance().delegate.onPaymentException(errorMessage, error.failureReason);
      }
    );

    const request = ATHMPaymentRequest.alloc().initWithAccountSchemePayment(
      businessAccount,
      scheme,
      amPayment
    );

    request.payWithHandler(handler);
  }

  private static getNativeItemsFrom(items: AMPaymentItem[]): Array<ATHMPaymentItem> {
    const nativeItems = items.map((item) => {
      const nativeItem = ATHMPaymentItem.alloc().initWithNamePriceQuantity(
        item.name,
        item.price,
        item.quantity
      );
      
      if (item.description) {
        nativeItem.desc = item.description;
      }
      
      if (item.metadata) {
        nativeItem.metadata = item.metadata;
      }
      
      return nativeItem;
    });

    return new Array<ATHMPaymentItem>(...nativeItems);
  }
}

export class AMTransactionSession {
  constructor(listener: AMTransactionListener) {
    Athmovil.getInstance().delegate = listener;
  }
}
