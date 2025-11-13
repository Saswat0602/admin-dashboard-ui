import { z } from 'zod';

// User schemas
export const userSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Invalid email address'),
  role: z.enum(['admin', 'user', 'moderator', 'editor']),
  phone: z.string().optional(),
  address: z.object({
    street: z.string(),
    city: z.string(),
    state: z.string(),
    zip: z.string(),
    country: z.string(),
  }).optional(),
});

export const createUserSchema = userSchema;
export const updateUserSchema = userSchema.partial();

// Product schemas
export const productSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  description: z.string().min(10, 'Description must be at least 10 characters'),
  price: z.number().positive('Price must be positive'),
  sku: z.string().min(1, 'SKU is required'),
  quantity: z.number().int().min(0, 'Quantity must be 0 or greater'),
  category: z.enum(['electronics', 'clothing', 'food', 'books', 'toys', 'sports', 'home', 'other']),
  tags: z.array(z.string()).optional(),
});

export const createProductSchema = productSchema;
export const updateProductSchema = productSchema.partial();

// Post schemas
export const postSchema = z.object({
  title: z.string().min(3, 'Title must be at least 3 characters'),
  content: z.string().min(10, 'Content must be at least 10 characters'),
  excerpt: z.string().optional(),
  featuredImage: z.string().url().optional(),
  categories: z.array(z.string()).min(1, 'Select at least one category'),
  tags: z.array(z.string()).optional(),
  status: z.enum(['draft', 'published', 'scheduled', 'archived']),
});

export const createPostSchema = postSchema;
export const updatePostSchema = postSchema.partial();

// Settings schemas
export const generalSettingsSchema = z.object({
  siteName: z.string().min(1, 'Site name is required'),
  siteUrl: z.string().url('Invalid URL'),
  adminEmail: z.string().email('Invalid email'),
  timezone: z.string(),
  dateFormat: z.string(),
  currency: z.string(),
  language: z.string(),
});

export const appearanceSettingsSchema = z.object({
  theme: z.enum(['light', 'dark', 'system']),
  accentColor: z.string(),
  fontSize: z.enum(['sm', 'md', 'lg']),
  sidebarCollapsed: z.boolean(),
  compactMode: z.boolean(),
});

// Login schema
export const loginSchema = z.object({
  email: z.string().email('Invalid email address'),
  password: z.string().min(6, 'Password must be at least 6 characters'),
});

// Search schema
export const searchSchema = z.object({
  query: z.string().min(1),
  filters: z.record(z.unknown()).optional(),
});

export type UserInput = z.infer<typeof userSchema>;
export type ProductInput = z.infer<typeof productSchema>;
export type PostInput = z.infer<typeof postSchema>;
