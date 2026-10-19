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

    const onCompleted = (response: ATHMPaymentResponse) => {
      this.getInstance().delegate?.onCompletePayment(response?.status?.referenceNumber || '');
    };

    const onExpired = (response: ATHMPaymentResponse) => {
      this.getInstance().delegate?.onExpiredPayment(response?.status?.referenceNumber || '');
    };

    const onCancelled = (response: ATHMPaymentResponse) => {
      this.getInstance().delegate?.onCancelledPayment(response?.status?.referenceNumber || '');
    };

    // SDKs modernos exponen estado "failed" separado de "cancelled".
    // Lo mapeamos al callback de cancelación para mantener comportamiento del host app.
    const onFailed = (response: ATHMPaymentResponse) => {
      this.getInstance().delegate?.onCancelledPayment(response?.status?.referenceNumber || '');
    };

    const onException = (error: ATHMPaymentError) => {
      const errorMessage = error?.isRequestError
        ? 'Error en la solicitud de pago'
        : 'Error en la respuesta del pago';
      const description = error?.failureReason || error?.errorDescription || '';
      this.getInstance().delegate?.onPaymentException(errorMessage, description);
    };

    const nativeHandler = ATHMPaymentHandler.alloc() as any;
    const handler: ATHMPaymentHandler =
      typeof nativeHandler.initOnCompletedOnExpiredOnCancelledOnFailedOnException === 'function'
        ? nativeHandler.initOnCompletedOnExpiredOnCancelledOnFailedOnException(
            onCompleted,
            onExpired,
            onCancelled,
            onFailed,
            onException
          )
        : nativeHandler.initOnCompletedOnExpiredOnCancelledOnException(
            onCompleted,
            onExpired,
            onCancelled,
            onException
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
