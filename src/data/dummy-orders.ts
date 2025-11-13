import { faker } from '@faker-js/faker';
import { Order, OrderStatus, PaymentStatus, PaymentMethod } from '@/types';
import { dummyUsers } from './dummy-users';
import { dummyProducts } from './dummy-products';

function generateOrder(index: number): Order {
  const orderStatuses: OrderStatus[] = [
    'pending',
    'processing',
    'shipped',
    'delivered',
    'cancelled',
    'refunded',
  ];
  const paymentStatuses: PaymentStatus[] = ['pending', 'paid', 'failed', 'refunded'];
  const paymentMethods: PaymentMethod[] = [
    'credit_card',
    'debit_card',
    'paypal',
    'bank_transfer',
    'cash',
  ];

  const user = faker.helpers.arrayElement(dummyUsers);
  const itemCount = faker.number.int({ min: 1, max: 5 });
  const items = Array.from({ length: itemCount }, (_, i) => {
    const product = faker.helpers.arrayElement(dummyProducts);
    const quantity = faker.number.int({ min: 1, max: 3 });
    const price = product.price;
    return {
      id: `item_${index}_${i}`,
      productId: product.id,
      quantity,
      price,
      total: price * quantity,
    };
  });

  const subtotal = items.reduce((sum, item) => sum + item.total, 0);
  const tax = subtotal * 0.1;
  const shipping = faker.number.float({ min: 5, max: 25, multipleOf: 0.01 });
  const discount = faker.datatype.boolean({ probability: 0.3 })
    ? faker.number.float({ min: 5, max: subtotal * 0.2, multipleOf: 0.01 })
    : 0;
  const total = subtotal + tax + shipping - discount;

  const status = faker.helpers.arrayElement(orderStatuses);
  const createdDate = faker.date.past({ years: 1 });

  return {
    id: `order_${index + 1}`,
    orderNumber: `ORD-${faker.string.numeric(8)}`,
    userId: user.id,
    userName: user.name,
    userEmail: user.email,
    items,
    subtotal,
    tax,
    shipping,
    discount,
    total,
    status,
    paymentStatus: faker.helpers.arrayElement(paymentStatuses),
    paymentMethod: faker.helpers.arrayElement(paymentMethods),
    shippingAddress: user.address || {
      street: faker.location.streetAddress(),
      city: faker.location.city(),
      state: faker.location.state(),
      zip: faker.location.zipCode(),
      country: faker.location.country(),
    },
    trackingNumber:
      status === 'shipped' || status === 'delivered'
        ? `TRK${faker.string.alphanumeric(12).toUpperCase()}`
        : undefined,
    notes: faker.datatype.boolean({ probability: 0.3 }) ? faker.lorem.sentence() : undefined,
    cancelledAt: status === 'cancelled' ? faker.date.recent({ days: 30 }).toISOString() : undefined,
    shippedAt:
      status === 'shipped' || status === 'delivered'
        ? faker.date.recent({ days: 20 }).toISOString()
        : undefined,
    deliveredAt: status === 'delivered' ? faker.date.recent({ days: 10 }).toISOString() : undefined,
    createdAt: createdDate.toISOString(),
    updatedAt: faker.date.between({ from: createdDate, to: new Date() }).toISOString(),
  };
}

export const dummyOrders: Order[] = Array.from({ length: 200 }, (_, i) => generateOrder(i));

// Helper functions
export function getOrderById(id: string): Order | undefined {
  return dummyOrders.find((order) => order.id === id);
}

export function getOrdersByStatus(status: OrderStatus): Order[] {
  return dummyOrders.filter((order) => order.status === status);
}

export function getOrdersByUser(userId: string): Order[] {
  return dummyOrders.filter((order) => order.userId === userId);
}
