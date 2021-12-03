import { Observable } from '@nativescript/core';

export class AthmovilCommon extends Observable {
}
  
  export enum AMButtonStyle {
    original,
    light,
    dark
  }
  
  export enum AMLanguage {
    english,
    spanish
  }
  
  export class AMPaymentItem {
    name: string;
    description: string;
    quantity: number;
    price: number;
    metadata: string;
  
    constructor(name: string,
      description: string,
      quantity: number,
      price: number,
      metadata: string) {
      this.name = name;
      this.description = description;
      this.quantity = quantity;
      this.price = price;
      this.metadata = metadata;
    }
  
  }
  
  export class AMPayment {
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
      items: AMPaymentItem[]) {
      this.total = total;
      this.subtotal = subtotal;
      this.tax = tax;
      this.metadata1 = metadata1;
      this.metadata2 = metadata2;
      this.items = items;
    }
  
  }
  
  export interface AMTransactionListener {
  
    onCompletePayment(referenceNumber: string): void;
    onCancelledPayment(referenceNumber: string): void;
    onExpiredPayment(referenceNumber: string): void;
    onPaymentException(error: string, description: string): void;
  
  }