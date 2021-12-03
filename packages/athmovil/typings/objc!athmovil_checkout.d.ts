
declare class ATHMBusinessAccount extends NSObject {

	static alloc(): ATHMBusinessAccount; // inherited from NSObject

	static new(): ATHMBusinessAccount; // inherited from NSObject

	constructor(o: { dictionary: NSDictionary<any, any>; });

	constructor(o: { token: string; });

	initWithDictionary(dictionary: NSDictionary<any, any>): this;

	initWithToken(token: string): this;
}

declare class ATHMButton extends UIButton {

	static alloc(): ATHMButton; // inherited from NSObject

	static appearance(): ATHMButton; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): ATHMButton; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): ATHMButton; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject> | typeof NSObject[]): ATHMButton; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): ATHMButton; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject> | typeof NSObject[]): ATHMButton; // inherited from UIAppearance

	static buttonWithConfigurationPrimaryAction(configuration: UIButtonConfiguration, primaryAction: UIAction): ATHMButton; // inherited from UIButton

	static buttonWithType(buttonType: UIButtonType): ATHMButton; // inherited from UIButton

	static buttonWithTypePrimaryAction(buttonType: UIButtonType, primaryAction: UIAction): ATHMButton; // inherited from UIButton

	static new(): ATHMButton; // inherited from NSObject

	static systemButtonWithImageTargetAction(image: UIImage, target: any, action: string): ATHMButton; // inherited from UIButton

	static systemButtonWithPrimaryAction(primaryAction: UIAction): ATHMButton; // inherited from UIButton
}

declare class ATHMCustomer extends NSObject {

	static alloc(): ATHMCustomer; // inherited from NSObject

	static new(): ATHMCustomer; // inherited from NSObject

	readonly email: string;

	readonly name: string;

	readonly phoneNumber: string;
}

declare class ATHMPayment extends NSObject {

	static alloc(): ATHMPayment; // inherited from NSObject

	static new(): ATHMPayment; // inherited from NSObject

	fee: number;

	items: NSArray<ATHMPaymentItem>;

	metadata1: string;

	metadata2: string;

	netAmount: number;

	subtotal: number;

	tax: number;

	readonly total: number;

	constructor(o: { dictionary: NSDictionary<any, any>; });

	constructor(o: { total: number; });

	initWithDictionary(dictionary: NSDictionary<any, any>): this;

	initWithTotal(total: number): this;
}

declare class ATHMPaymentError extends NSObject {

	static alloc(): ATHMPaymentError; // inherited from NSObject

	static new(): ATHMPaymentError; // inherited from NSObject

	readonly errorDescription: string;

	readonly failureReason: string;

	readonly isRequestError: boolean;
}

declare class ATHMPaymentHandler extends NSObject {

	static alloc(): ATHMPaymentHandler; // inherited from NSObject

	static new(): ATHMPaymentHandler; // inherited from NSObject

	constructor(o: { onCompleted: (p1: ATHMPaymentResponse) => void; onExpired: (p1: ATHMPaymentResponse) => void; onCancelled: (p1: ATHMPaymentResponse) => void; onException: (p1: ATHMPaymentError) => void; });

	initOnCompletedOnExpiredOnCancelledOnException(onCompleted: (p1: ATHMPaymentResponse) => void, onExpired: (p1: ATHMPaymentResponse) => void, onCancelled: (p1: ATHMPaymentResponse) => void, onException: (p1: ATHMPaymentError) => void): this;
}

declare class ATHMPaymentHandlerDictionary extends NSObject {

	static alloc(): ATHMPaymentHandlerDictionary; // inherited from NSObject

	static new(): ATHMPaymentHandlerDictionary; // inherited from NSObject

	constructor(o: { onCompleted: (p1: NSDictionary<any, any>) => void; onExpired: (p1: NSDictionary<any, any>) => void; onCancelled: (p1: NSDictionary<any, any>) => void; onException: (p1: ATHMPaymentError) => void; });

	initOnCompletedOnExpiredOnCancelledOnException(onCompleted: (p1: NSDictionary<any, any>) => void, onExpired: (p1: NSDictionary<any, any>) => void, onCancelled: (p1: NSDictionary<any, any>) => void, onException: (p1: ATHMPaymentError) => void): this;
}

declare class ATHMPaymentItem extends NSObject {

	static alloc(): ATHMPaymentItem; // inherited from NSObject

	static new(): ATHMPaymentItem; // inherited from NSObject

	desc: string;

	metadata: string;

	readonly name: string;

	readonly price: number;

	readonly quantity: number;

	constructor(o: { dictionary: NSDictionary<any, any>; });

	constructor(o: { name: string; price: number; quantity: number; });

	initWithDictionary(dictionary: NSDictionary<any, any>): this;

	initWithNamePriceQuantity(name: string, price: number, quantity: number): this;
}

declare class ATHMPaymentRequest extends NSObject {

	static alloc(): ATHMPaymentRequest; // inherited from NSObject

	static new(): ATHMPaymentRequest; // inherited from NSObject

	timeout: number;

	constructor(o: { account: ATHMBusinessAccount; scheme: ATHMURLScheme; payment: ATHMPayment; });

	initWithAccountSchemePayment(account: ATHMBusinessAccount, scheme: ATHMURLScheme, payment: ATHMPayment): this;

	payWithDictionaryHandler(handler: ATHMPaymentHandlerDictionary): void;

	payWithHandler(handler: ATHMPaymentHandler): void;
}

declare class ATHMPaymentResponse extends NSObject {

	static alloc(): ATHMPaymentResponse; // inherited from NSObject

	static new(): ATHMPaymentResponse; // inherited from NSObject

	readonly customer: ATHMCustomer;

	readonly payment: ATHMPayment;

	readonly status: ATHMPaymentStatus;
}

declare class ATHMPaymentSession extends NSObject {

	static alloc(): ATHMPaymentSession; // inherited from NSObject

	static new(): ATHMPaymentSession; // inherited from NSObject

	url: NSURL;

	static readonly shared: ATHMPaymentSession;
}

declare class ATHMPaymentStatus extends NSObject {

	static alloc(): ATHMPaymentStatus; // inherited from NSObject

	static new(): ATHMPaymentStatus; // inherited from NSObject

	readonly dailyTransactionID: number;

	readonly date: Date;

	readonly referenceNumber: string;

	readonly statusPayment: string;
}

interface ATHMPaymentTheme {

	background: UIColor;

	image: UIImage;

	tintColor: UIColor;
}
declare var ATHMPaymentTheme: {

	prototype: ATHMPaymentTheme;
};

declare class ATHMURLScheme extends NSObject {

	static alloc(): ATHMURLScheme; // inherited from NSObject

	static new(): ATHMURLScheme; // inherited from NSObject

	constructor(o: { dictionary: NSDictionary<any, any>; });

	constructor(o: { urlScheme: string; });

	initWithDictionary(dictionary: NSDictionary<any, any>): this;

	initWithUrlScheme(urlScheme: string): this;
}

declare class ATHThemeClassic extends NSObject implements ATHMPaymentTheme {

	static alloc(): ATHThemeClassic; // inherited from NSObject

	static new(): ATHThemeClassic; // inherited from NSObject

	readonly background: UIColor; // inherited from ATHMPaymentTheme

	readonly image: UIImage; // inherited from ATHMPaymentTheme

	readonly tintColor: UIColor; // inherited from ATHMPaymentTheme
}

declare class ATHThemeLight extends NSObject implements ATHMPaymentTheme {

	static alloc(): ATHThemeLight; // inherited from NSObject

	static new(): ATHThemeLight; // inherited from NSObject

	readonly background: UIColor; // inherited from ATHMPaymentTheme

	readonly image: UIImage; // inherited from ATHMPaymentTheme

	readonly tintColor: UIColor; // inherited from ATHMPaymentTheme
}

declare class ATHThemeNight extends NSObject implements ATHMPaymentTheme {

	static alloc(): ATHThemeNight; // inherited from NSObject

	static new(): ATHThemeNight; // inherited from NSObject

	readonly background: UIColor; // inherited from ATHMPaymentTheme

	readonly image: UIImage; // inherited from ATHMPaymentTheme

	readonly tintColor: UIColor; // inherited from ATHMPaymentTheme
}

declare var athmovil_checkoutVersionNumber: number;

declare var athmovil_checkoutVersionString: interop.Reference<number>;
