/// <reference path="android-declarations.d.ts"/>

declare module com {
	export module evertecinc {
		export module athmovil {
			export module sdk {
				export module checkout {
					export class BuildConfig {
						public static class: java.lang.Class<com.evertecinc.athmovil.sdk.checkout.BuildConfig>;
						public static DEBUG: boolean;
						public static LIBRARY_PACKAGE_NAME: string;
						public static BUILD_TYPE: string;
						public constructor();
					}
				}
			}
		}
	}
}

declare module com {
	export module evertecinc {
		export module athmovil {
			export module sdk {
				export module checkout {
					export class OpenATHM {
						public static class: java.lang.Class<com.evertecinc.athmovil.sdk.checkout.OpenATHM>;
						public static verifyPaymentStatus(param0: globalAndroid.content.Context): void;
						public constructor();
						public static validateData(param0: com.evertecinc.athmovil.sdk.checkout.objects.ATHMPayment, param1: globalAndroid.content.Context): void;
						public static defineResponse(param0: com.evertecinc.athmovil.sdk.checkout.objects.ATHMPayment): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module evertecinc {
		export module athmovil {
			export module sdk {
				export module checkout {
					export class PayButton {
						public static class: java.lang.Class<com.evertecinc.athmovil.sdk.checkout.PayButton>;
						public setLanguage(param0: com.evertecinc.athmovil.sdk.checkout.PayButton.ButtonLanguage): void;
						public constructor(param0: globalAndroid.content.Context);
						public onDraw(param0: globalAndroid.graphics.Canvas): void;
						public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number);
						public setTheme(param0: com.evertecinc.athmovil.sdk.checkout.PayButton.ButtonTheme): void;
						public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
					}
					export module PayButton {
						export class ButtonLanguage {
							public static class: java.lang.Class<com.evertecinc.athmovil.sdk.checkout.PayButton.ButtonLanguage>;
							public static EN: com.evertecinc.athmovil.sdk.checkout.PayButton.ButtonLanguage;
							public static ES: com.evertecinc.athmovil.sdk.checkout.PayButton.ButtonLanguage;
							public static DEFAULT: com.evertecinc.athmovil.sdk.checkout.PayButton.ButtonLanguage;
							public static valueOf(param0: string): com.evertecinc.athmovil.sdk.checkout.PayButton.ButtonLanguage;
							public static values(): androidNative.Array<com.evertecinc.athmovil.sdk.checkout.PayButton.ButtonLanguage>;
						}
						export class ButtonTheme {
							public static class: java.lang.Class<com.evertecinc.athmovil.sdk.checkout.PayButton.ButtonTheme>;
							public static ORIGINAL: com.evertecinc.athmovil.sdk.checkout.PayButton.ButtonTheme;
							public static LIGHT: com.evertecinc.athmovil.sdk.checkout.PayButton.ButtonTheme;
							public static DARK: com.evertecinc.athmovil.sdk.checkout.PayButton.ButtonTheme;
							public static valueOf(param0: string): com.evertecinc.athmovil.sdk.checkout.PayButton.ButtonTheme;
							public static values(): androidNative.Array<com.evertecinc.athmovil.sdk.checkout.PayButton.ButtonTheme>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module evertecinc {
		export module athmovil {
			export module sdk {
				export module checkout {
					export class PaymentResponse {
						public static class: java.lang.Class<com.evertecinc.athmovil.sdk.checkout.PaymentResponse>;
						public constructor();
						public static validatePaymentResponse(param0: globalAndroid.content.Intent, param1: com.evertecinc.athmovil.sdk.checkout.interfaces.PaymentResponseListener): void;
						public static checkIfDummy(param0: string, param1: com.evertecinc.athmovil.sdk.checkout.interfaces.PaymentResponseListener): com.evertecinc.athmovil.sdk.checkout.objects.PaymentReturnedData;
					}
				}
			}
		}
	}
}

declare module com {
	export module evertecinc {
		export module athmovil {
			export module sdk {
				export module checkout {
					export module exceptions {
						export class InvalidPaymentRequestException {
							public static class: java.lang.Class<com.evertecinc.athmovil.sdk.checkout.exceptions.InvalidPaymentRequestException>;
							public constructor(param0: string);
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module evertecinc {
		export module athmovil {
			export module sdk {
				export module checkout {
					export module exceptions {
						export class JsonEncoderException {
							public static class: java.lang.Class<com.evertecinc.athmovil.sdk.checkout.exceptions.JsonEncoderException>;
							public constructor(param0: string);
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module evertecinc {
		export module athmovil {
			export module sdk {
				export module checkout {
					export module exceptions {
						export class NullATHMPaymentObjectException {
							public static class: java.lang.Class<com.evertecinc.athmovil.sdk.checkout.exceptions.NullATHMPaymentObjectException>;
							public constructor(param0: string);
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module evertecinc {
		export module athmovil {
			export module sdk {
				export module checkout {
					export module exceptions {
						export class NullApplicationContextException {
							public static class: java.lang.Class<com.evertecinc.athmovil.sdk.checkout.exceptions.NullApplicationContextException>;
							public constructor(param0: string);
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module evertecinc {
		export module athmovil {
			export module sdk {
				export module checkout {
					export module exceptions {
						export class VerifyPaymentException {
							public static class: java.lang.Class<com.evertecinc.athmovil.sdk.checkout.exceptions.VerifyPaymentException>;
							public constructor(param0: string);
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module evertecinc {
		export module athmovil {
			export module sdk {
				export module checkout {
					export module interfaces {
						export class PaymentResponseListener {
							public static class: java.lang.Class<com.evertecinc.athmovil.sdk.checkout.interfaces.PaymentResponseListener>;
							/**
							 * Constructs a new instance of the com.evertecinc.athmovil.sdk.checkout.interfaces.PaymentResponseListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								onCompletedPayment(param0: java.util.Date, param1: string, param2: string, param3: string, param4: string, param5: string, param6: java.lang.Double, param7: java.lang.Double, param8: java.lang.Double, param9: java.lang.Double, param10: java.lang.Double, param11: string, param12: string, param13: string, param14: java.util.ArrayList<com.evertecinc.athmovil.sdk.checkout.objects.Items>): void;
								onCancelledPayment(param0: java.util.Date, param1: string, param2: string, param3: string, param4: string, param5: string, param6: java.lang.Double, param7: java.lang.Double, param8: java.lang.Double, param9: java.lang.Double, param10: java.lang.Double, param11: string, param12: string, param13: string, param14: java.util.ArrayList<com.evertecinc.athmovil.sdk.checkout.objects.Items>): void;
								onExpiredPayment(param0: java.util.Date, param1: string, param2: string, param3: string, param4: string, param5: string, param6: java.lang.Double, param7: java.lang.Double, param8: java.lang.Double, param9: java.lang.Double, param10: java.lang.Double, param11: string, param12: string, param13: string, param14: java.util.ArrayList<com.evertecinc.athmovil.sdk.checkout.objects.Items>): void;
								onPaymentException(param0: string, param1: string): void;
							});
							public constructor();
							public onCompletedPayment(param0: java.util.Date, param1: string, param2: string, param3: string, param4: string, param5: string, param6: java.lang.Double, param7: java.lang.Double, param8: java.lang.Double, param9: java.lang.Double, param10: java.lang.Double, param11: string, param12: string, param13: string, param14: java.util.ArrayList<com.evertecinc.athmovil.sdk.checkout.objects.Items>): void;
							public onCancelledPayment(param0: java.util.Date, param1: string, param2: string, param3: string, param4: string, param5: string, param6: java.lang.Double, param7: java.lang.Double, param8: java.lang.Double, param9: java.lang.Double, param10: java.lang.Double, param11: string, param12: string, param13: string, param14: java.util.ArrayList<com.evertecinc.athmovil.sdk.checkout.objects.Items>): void;
							public onPaymentException(param0: string, param1: string): void;
							public onExpiredPayment(param0: java.util.Date, param1: string, param2: string, param3: string, param4: string, param5: string, param6: java.lang.Double, param7: java.lang.Double, param8: java.lang.Double, param9: java.lang.Double, param10: java.lang.Double, param11: string, param12: string, param13: string, param14: java.util.ArrayList<com.evertecinc.athmovil.sdk.checkout.objects.Items>): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module evertecinc {
		export module athmovil {
			export module sdk {
				export module checkout {
					export module interfaces {
						export class PostService {
							public static class: java.lang.Class<com.evertecinc.athmovil.sdk.checkout.interfaces.PostService>;
							/**
							 * Constructs a new instance of the com.evertecinc.athmovil.sdk.checkout.interfaces.PostService interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								sendPost(param0: com.google.gson.JsonObject): retrofit2.Call<com.google.gson.JsonObject>;
							});
							public constructor();
							public sendPost(param0: com.google.gson.JsonObject): retrofit2.Call<com.google.gson.JsonObject>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module evertecinc {
		export module athmovil {
			export module sdk {
				export module checkout {
					export module objects {
						export class ATHMPayment {
							public static class: java.lang.Class<com.evertecinc.athmovil.sdk.checkout.objects.ATHMPayment>;
							public getTimeout(): number;
							public setTax(param0: number): void;
							public setMetadata2(param0: string): void;
							public setPaymentId(): void;
							public getPublicToken(): string;
							public getContext(): globalAndroid.content.Context;
							public setMetadata1(param0: string): void;
							public getSubtotal(): number;
							public getMetadata1(): string;
							public getTotal(): number;
							public setBuildType(param0: string): void;
							public setSubtotal(param0: number): void;
							public getBuildType(): string;
							public setPublicToken(param0: string): void;
							public setTotal(param0: number): void;
							public getPaymentId(): string;
							public setTimeout(param0: number): void;
							public getItems(): java.util.ArrayList<com.evertecinc.athmovil.sdk.checkout.objects.Items>;
							public getMetadata2(): string;
							public getCallbackSchema(): string;
							public setCallbackSchema(param0: string): void;
							public constructor(param0: globalAndroid.content.Context);
							public getTax(): number;
							public setItems(param0: java.util.ArrayList<com.evertecinc.athmovil.sdk.checkout.objects.Items>): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module evertecinc {
		export module athmovil {
			export module sdk {
				export module checkout {
					export module objects {
						export class Items {
							public static class: java.lang.Class<com.evertecinc.athmovil.sdk.checkout.objects.Items>;
							public getQuantity(): java.lang.Long;
							public setMetadata(param0: string): void;
							public getName(): string;
							public getPrice(): java.lang.Double;
							public constructor(param0: string, param1: string, param2: java.lang.Double, param3: java.lang.Long, param4: string);
							public setDescription(param0: string): void;
							public setName(param0: string): void;
							public getDescription(): string;
							public getMetadata(): string;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module evertecinc {
		export module athmovil {
			export module sdk {
				export module checkout {
					export module objects {
						export class PaymentResultFlag {
							public static class: java.lang.Class<com.evertecinc.athmovil.sdk.checkout.objects.PaymentResultFlag>;
							public constructor();
							public onCreate(): void;
							public static getApplicationInstance(): com.evertecinc.athmovil.sdk.checkout.objects.PaymentResultFlag;
							public getPaymentRequest(): com.evertecinc.athmovil.sdk.checkout.objects.ATHMPayment;
							public setPaymentRequest(param0: com.evertecinc.athmovil.sdk.checkout.objects.ATHMPayment): void;
							public static setApplicationInstance(param0: com.evertecinc.athmovil.sdk.checkout.objects.PaymentResultFlag): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module evertecinc {
		export module athmovil {
			export module sdk {
				export module checkout {
					export module objects {
						export class PaymentReturnedData {
							public static class: java.lang.Class<com.evertecinc.athmovil.sdk.checkout.objects.PaymentReturnedData>;
							public setDate(param0: string): void;
							public setTax(param0: number): void;
							public setMetadata2(param0: string): void;
							public hashCode(): number;
							public setDailyTransactionID(param0: string): void;
							public getNetAmount(): number;
							public getMetadata1(): string;
							public setEmail(param0: string): void;
							public getPaymentId(): string;
							public getMetadata2(): string;
							public setNetAmount(param0: number): void;
							public constructor();
							public getDate(): string;
							public setMetadata1(param0: string): void;
							public setPaymentId(param0: string): void;
							public getDailyTransactionID(): string;
							public getPhoneNumber(): string;
							public getSubtotal(): number;
							public setName(param0: string): void;
							public getTotal(): number;
							public setSubtotal(param0: number): void;
							public getItemsSelectedList(): java.util.ArrayList<com.evertecinc.athmovil.sdk.checkout.objects.Items>;
							public setStatus(param0: string): void;
							public static trimLeadingZeros(param0: string): string;
							public getName(): string;
							public getEmail(): string;
							public setTotal(param0: number): void;
							public setPhoneNumber(param0: string): void;
							public setFee(param0: number): void;
							public setReferenceNumber(param0: string): void;
							public equals(param0: any): boolean;
							public getReferenceNumber(): string;
							public getFee(): number;
							public getStatus(): string;
							public setItems(param0: java.util.ArrayList<com.evertecinc.athmovil.sdk.checkout.objects.Items>): void;
							public getTax(): number;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module evertecinc {
		export module athmovil {
			export module sdk {
				export module checkout {
					export module utils {
						export class ConstantUtil {
							public static class: java.lang.Class<com.evertecinc.athmovil.sdk.checkout.utils.ConstantUtil>;
							public static COM_EVERTEC_ATHMOVIL_ANDROID: string;
							public static ATH_MOVIL_REQUIRED_VERSION_CODE: number;
							public static ATH_MOVIL_MARKET_URL: string;
							public static BUNDLE: string;
							public static JSON_DATA_KEY: string;
							public static REFERENCE_NUMBER_KEY: string;
							public static PAYMENT_DURATION_TIME_KEY: string;
							public static API_ROUTE: string;
							public static MAX_TIMEOUT_SECONDS: number;
							public static MIN_TIMEOUT_SECONDS: number;
							public static PAYMENT_JSON_PUBLIC_TOKEN_KEY: string;
							public static PAYMENT_JSON_SUBTOTAL__KEY: string;
							public static PAYMENT_JSON_TAX_KEY: string;
							public static PAYMENT_JSON_TOTAL_KEY: string;
							public static PAYMENT_JSON_SCHEMA_KEY: string;
							public static PAYMENT_JSON_METADATA_1: string;
							public static PAYMENT_JSON_METADATA_2: string;
							public static PAYMENT_JSON_PAYMENT_ID_KEY: string;
							public static PAYMENT_JSON_ITEM_NAME_KEY: string;
							public static PAYMENT_JSON_ITEM_PRICE_KEY: string;
							public static PAYMENT_JSON_ITEM_QUANTITY_KEY: string;
							public static PAYMENT_JASON_ITEM_METADATA_KEY: string;
							public static PAYMENT_JSON_ITEM_LIST_KEY: string;
							public static RETURNED_JSON_KEY: string;
							public static RETURNED_JSON_STATUS_KEY: string;
							public static RETURNED_JSON_TOTAL_KEY: string;
							public static RETURNED_JSON_SUBTOTAL_KEY: string;
							public static RETURNED_JSON_TAX_KEY: string;
							public static RETURNED_JSON_METADATA1_KEY: string;
							public static RETURNED_JSON_METADATA2_KEY: string;
							public static RETURNED_JSON_PAYMENT_ID_KEY: string;
							public static RETURNED_JSON_ITEM_DESCRIPTION_KEY: string;
							public static TOKEN_FOR_SUCCESS: string;
							public static TOKEN_FOR_FAILURE: string;
							public static STATUS_SUCCESS: string;
							public static STATUS_CANCELLED: string;
							public static REFERENCE_NUMBER: string;
							public static LOG_TAG: string;
							public static NULL_ATHMPAYMENT_LOG_MESSAGE: string;
							public static NULL_CONTEXT_LOG_MESSAGE: string;
							public static PAYMENT_VALIDATION_FAILED: string;
							public static NULL_PUBLICTOKEN_LOG_MESSAGE: string;
							public static TOTAL_ERROR_LOG_MESSAGE: string;
							public static SUBTOTAL_ERROR_LOG_MESSAGE: string;
							public static ITEM_TOTAL_ERROR_LOG_MESSAGE: string;
							public static ITEM_QUANTITY_ERROR_LOG_MESSAGE: string;
							public static ITEM_NAME_ERROR_LOG_MESSAGE: string;
							public static ITEM_DESC_ERROR_LOG_MESSAGE: string;
							public static METADATA_ERROR_MESSAGE: string;
							public static METADATA2_ERROR_MESSAGE: string;
							public static NULL_ITEM_METADATA_LOG_MESSAGE: string;
							public static ENCODE_JSON_LOG_MESSAGE: string;
							public static DECODE_JSON_LOG_MESSAGE: string;
							public static SCHEMA_ERROR_MESSAGE: string;
							public static RESPONSE_EXCEPTION_TITLE: string;
							public static REQUEST_EXCEPTION_TITLE: string;
							public static RESPONSE_NULL_EXCEPTION: string;
							public static TAX_NULL_LOG_MESSAGE: string;
							public static DATE_PATTERN: string;
							public static EXCEPTION: string;
							public static EXCEPTION_CAUSE: string;
							public static INTERNAL_TEST_URL: string;
							public static PRODUCTION_URL: string;
							public constructor();
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module evertecinc {
		export module athmovil {
			export module sdk {
				export module checkout {
					export module utils {
						export class ExceptionUtil {
							public static class: java.lang.Class<com.evertecinc.athmovil.sdk.checkout.utils.ExceptionUtil>;
							public constructor();
							public validateDataFields(param0: string): boolean;
							public validateRequest(param0: com.evertecinc.athmovil.sdk.checkout.objects.ATHMPayment): boolean;
							public validateItemName(param0: string): boolean;
							public setExceptionMessage(param0: string): void;
							public validateItems(param0: java.util.ArrayList<com.evertecinc.athmovil.sdk.checkout.objects.Items>): boolean;
							public validateMetadataFields(param0: string, param1: string): boolean;
							public validateTokenSchema(param0: string, param1: string): boolean;
							public validateItemPrice(param0: java.lang.Double): boolean;
							public validateItemQuantity(param0: java.lang.Long): boolean;
							public getExceptionMessage(): string;
							public validateAmountFields(param0: number, param1: number, param2: number): boolean;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module evertecinc {
		export module athmovil {
			export module sdk {
				export module checkout {
					export module utils {
						export class JsonUtil {
							public static class: java.lang.Class<com.evertecinc.athmovil.sdk.checkout.utils.JsonUtil>;
							public constructor();
							public static itemsToJson(param0: java.util.ArrayList<com.evertecinc.athmovil.sdk.checkout.objects.Items>): org.json.JSONArray;
							public static returnedJson(param0: com.evertecinc.athmovil.sdk.checkout.objects.PaymentReturnedData): string;
							public static toJson(param0: com.evertecinc.athmovil.sdk.checkout.objects.ATHMPayment): string;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module evertecinc {
		export module athmovil {
			export module sdk {
				export module checkout {
					export module utils {
						export class Util {
							public static class: java.lang.Class<com.evertecinc.athmovil.sdk.checkout.utils.Util>;
							public constructor();
							public static trimData(param0: com.evertecinc.athmovil.sdk.checkout.objects.ATHMPayment): com.evertecinc.athmovil.sdk.checkout.objects.ATHMPayment;
							public static getDateFormat(param0: string): java.util.Date;
						}
					}
				}
			}
		}
	}
}

//Generics information:

