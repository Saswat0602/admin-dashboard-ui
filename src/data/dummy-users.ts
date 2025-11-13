import { faker } from '@faker-js/faker';
import { User, UserRole, Status } from '@/types';

function generateUser(index: number): User {
  const roles: UserRole[] = ['admin', 'user', 'moderator', 'editor'];
  const statuses: Status[] = ['active', 'inactive', 'pending', 'suspended'];

  return {
    id: `user_${index + 1}`,
    name: faker.person.fullName(),
    email: faker.internet.email().toLowerCase(),
    avatar: faker.image.avatar(),
    role: faker.helpers.arrayElement(roles),
    status: faker.helpers.arrayElement(statuses),
    phone: faker.phone.number(),
    createdAt: faker.date.past({ years: 2 }).toISOString(),
    updatedAt: faker.date.recent({ days: 30 }).toISOString(),
    lastLogin: faker.date.recent({ days: 7 }).toISOString(),
    address: {
      street: faker.location.streetAddress(),
      city: faker.location.city(),
      state: faker.location.state(),
      zip: faker.location.zipCode(),
      country: faker.location.country(),
    },
    preferences: {
      theme: faker.helpers.arrayElement(['light', 'dark', 'system'] as const),
      notifications: faker.datatype.boolean(),
      emailUpdates: faker.datatype.boolean(),
      language: 'en',
    },
    stats: {
      totalOrders: faker.number.int({ min: 0, max: 100 }),
      totalSpent: faker.number.float({ min: 0, max: 10000, multipleOf: 0.01 }),
      averageOrderValue: faker.number.float({ min: 0, max: 500, multipleOf: 0.01 }),
      lastOrderDate: faker.date.recent({ days: 60 }).toISOString(),
    },
    bio: faker.person.bio(),
    company: faker.company.name(),
    website: faker.internet.url(),
  };
}

export const dummyUsers: User[] = Array.from({ length: 150 }, (_, i) => generateUser(i));

// Helper to get user by ID
export function getUserById(id: string): User | undefined {
  return dummyUsers.find((user) => user.id === id);
}

// Helper to get users by role
export function getUsersByRole(role: UserRole): User[] {
  return dummyUsers.filter((user) => user.role === role);
}

// Helper to get users by status
export function getUsersByStatus(status: Status): User[] {
  return dummyUsers.filter((user) => user.status === status);
}
