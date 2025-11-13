import { faker } from '@faker-js/faker';
import { Product, ProductCategory, Status } from '@/types';

function generateProduct(index: number): Product {
  const categories: ProductCategory[] = [
    'electronics',
    'clothing',
    'food',
    'books',
    'toys',
    'sports',
    'home',
    'other',
  ];
  const statuses: Status[] = ['active', 'inactive', 'pending', 'suspended'];

  const price = faker.number.float({ min: 9.99, max: 999.99, multipleOf: 0.01 });
  const compareAtPrice = faker.datatype.boolean()
    ? faker.number.float({ min: price, max: price * 1.5, multipleOf: 0.01 })
    : undefined;

  return {
    id: `product_${index + 1}`,
    name: faker.commerce.productName(),
    description: faker.commerce.productDescription(),
    price,
    compareAtPrice,
    cost: faker.number.float({ min: price * 0.3, max: price * 0.7, multipleOf: 0.01 }),
    sku: faker.string.alphanumeric(8).toUpperCase(),
    barcode: faker.string.numeric(13),
    quantity: faker.number.int({ min: 0, max: 500 }),
    category: faker.helpers.arrayElement(categories),
    tags: faker.helpers.arrayElements(
      ['new', 'sale', 'featured', 'limited', 'best-seller', 'eco-friendly'],
      { min: 0, max: 3 }
    ),
    images: Array.from({ length: faker.number.int({ min: 1, max: 4 }) }, (_, i) => ({
      id: `img_${index}_${i}`,
      url: faker.image.url(),
      alt: faker.commerce.productName(),
      isPrimary: i === 0,
    })),
    status: faker.helpers.arrayElement(statuses),
    featured: faker.datatype.boolean({ probability: 0.2 }),
    weight: faker.number.float({ min: 0.1, max: 50, multipleOf: 0.1 }),
    dimensions: {
      length: faker.number.float({ min: 1, max: 100, multipleOf: 0.1 }),
      width: faker.number.float({ min: 1, max: 100, multipleOf: 0.1 }),
      height: faker.number.float({ min: 1, max: 100, multipleOf: 0.1 }),
    },
    seo: {
      title: faker.commerce.productName(),
      description: faker.commerce.productDescription(),
      keywords: faker.helpers.arrayElements(
        ['quality', 'affordable', 'premium', 'best', 'top-rated'],
        { min: 2, max: 5 }
      ),
    },
    createdAt: faker.date.past({ years: 1 }).toISOString(),
    updatedAt: faker.date.recent({ days: 30 }).toISOString(),
  };
}

export const dummyProducts: Product[] = Array.from({ length: 150 }, (_, i) => generateProduct(i));

// Helper functions
export function getProductById(id: string): Product | undefined {
  return dummyProducts.find((product) => product.id === id);
}

export function getProductsByCategory(category: ProductCategory): Product[] {
  return dummyProducts.filter((product) => product.category === category);
}

export function getFeaturedProducts(): Product[] {
  return dummyProducts.filter((product) => product.featured);
}
