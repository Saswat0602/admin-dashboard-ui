import { BaseEntity } from './common';

export type PostStatus = 'draft' | 'published' | 'scheduled' | 'archived';
export type PostFormat = 'standard' | 'video' | 'audio' | 'gallery';

export interface PostAuthor {
  id: string;
  name: string;
  avatar?: string;
}

export interface PostCategory {
  id: string;
  name: string;
  slug: string;
}

export interface Post extends BaseEntity {
  title: string;
  slug: string;
  content: string;
  excerpt: string;
  featuredImage?: string;
  author: PostAuthor;
  categories: PostCategory[];
  tags: string[];
  status: PostStatus;
  format: PostFormat;
  publishedAt?: string;
  scheduledFor?: string;
  views: number;
  likes: number;
  comments: number;
  seo: {
    title: string;
    description: string;
    keywords: string[];
  };
}

export interface CreatePostInput {
  title: string;
  content: string;
  excerpt?: string;
  featuredImage?: string;
  categories: string[];
  tags: string[];
  status: PostStatus;
}

export interface UpdatePostInput extends Partial<CreatePostInput> {
  publishedAt?: string;
}
