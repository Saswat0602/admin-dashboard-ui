import { BaseEntity, Status } from './common';

export type ProductCategory = 'electronics' | 'clothing' | 'food' | 'books' | 'toys' | 'sports' | 'home' | 'other';

export interface ProductVariant {
  id: string;
  name: string;
  price: number;
  sku: string;
  stock: number;
  attributes: Record<string, string>;
}

export interface ProductImage {
  id: string;
  url: string;
  alt: string;
  isPrimary: boolean;
}

export interface Product extends BaseEntity {
  name: string;
  description: string;
  price: number;
  compareAtPrice?: number;
  cost?: number;
  sku: string;
  barcode?: string;
  quantity: number;
  category: ProductCategory;
  tags: string[];
  images: ProductImage[];
  variants?: ProductVariant[];
  status: Status;
  featured: boolean;
  weight?: number;
  dimensions?: {
    length: number;
    width: number;
    height: number;
  };
  seo?: {
    title: string;
    description: string;
    keywords: string[];
  };
}

export interface CreateProductInput {
  name: string;
  description: string;
  price: number;
  sku: string;
  quantity: number;
  category: ProductCategory;
  tags?: string[];
}

export interface UpdateProductInput extends Partial<CreateProductInput> {
  status?: Status;
  featured?: boolean;
}
