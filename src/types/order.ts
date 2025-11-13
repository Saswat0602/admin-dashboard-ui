import { BaseEntity, Address } from './common';
import { Product } from './product';

export type OrderStatus = 'pending' | 'processing' | 'shipped' | 'delivered' | 'cancelled' | 'refunded';
export type PaymentStatus = 'pending' | 'paid' | 'failed' | 'refunded';
export type PaymentMethod = 'credit_card' | 'debit_card' | 'paypal' | 'bank_transfer' | 'cash';

export interface OrderItem {
  id: string;
  productId: string;
  product?: Product;
  quantity: number;
  price: number;
  total: number;
}

export interface Order extends BaseEntity {
  orderNumber: string;
  userId: string;
  userName: string;
  userEmail: string;
  items: OrderItem[];
  subtotal: number;
  tax: number;
  shipping: number;
  discount: number;
  total: number;
  status: OrderStatus;
  paymentStatus: PaymentStatus;
  paymentMethod: PaymentMethod;
  shippingAddress: Address;
  billingAddress?: Address;
  trackingNumber?: string;
  notes?: string;
  cancelledAt?: string;
  shippedAt?: string;
  deliveredAt?: string;
}

export interface OrderTimeline {
  id: string;
  orderId: string;
  status: OrderStatus;
  description: string;
  createdAt: string;
  createdBy?: string;
}
