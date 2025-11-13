import { faker } from '@faker-js/faker';
import { Notification, NotificationType, NotificationCategory } from '@/types';

function generateNotification(index: number): Notification {
  const types: NotificationType[] = ['info', 'success', 'warning', 'error'];
  const categories: NotificationCategory[] = ['system', 'order', 'user', 'product', 'message'];

  const type = faker.helpers.arrayElement(types);
  const category = faker.helpers.arrayElement(categories);
  const isRead = faker.datatype.boolean({ probability: 0.6 });

  const createdDate = faker.date.recent({ days: 30 });

  return {
    id: `notif_${index + 1}`,
    type,
    category,
    title: faker.lorem.sentence({ min: 3, max: 6 }),
    message: faker.lorem.sentence({ min: 8, max: 15 }),
    read: isRead,
    readAt: isRead ? faker.date.between({ from: createdDate, to: new Date() }).toISOString() : undefined,
    actionUrl: faker.datatype.boolean({ probability: 0.5 })
      ? `/dashboard/${category}s`
      : undefined,
    actionText: faker.helpers.arrayElement(['View Details', 'Review', 'Take Action', 'Learn More']),
    createdAt: createdDate.toISOString(),
    updatedAt: faker.date.between({ from: createdDate, to: new Date() }).toISOString(),
  };
}

export const dummyNotifications: Notification[] = Array.from(
  { length: 100 },
  (_, i) => generateNotification(i)
);

export function getUnreadNotifications(): Notification[] {
  return dummyNotifications.filter((n) => !n.read);
}

export function getNotificationsByCategory(category: NotificationCategory): Notification[] {
  return dummyNotifications.filter((n) => n.category === category);
}
