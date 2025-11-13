import { faker } from '@faker-js/faker';
import { Post, PostStatus, PostFormat } from '@/types';

function generatePost(index: number): Post {
  const statuses: PostStatus[] = ['draft', 'published', 'scheduled', 'archived'];
  const formats: PostFormat[] = ['standard', 'video', 'audio', 'gallery'];

  const status = faker.helpers.arrayElement(statuses);
  const createdDate = faker.date.past({ years: 1 });

  return {
    id: `post_${index + 1}`,
    title: faker.lorem.sentence({ min: 5, max: 10 }),
    slug: faker.helpers.slugify(faker.lorem.sentence({ min: 5, max: 10 })).toLowerCase(),
    content: faker.lorem.paragraphs({ min: 5, max: 10 }),
    excerpt: faker.lorem.paragraph(),
    featuredImage: faker.image.url(),
    author: {
      id: faker.string.uuid(),
      name: faker.person.fullName(),
      avatar: faker.image.avatar(),
    },
    categories: Array.from({ length: faker.number.int({ min: 1, max: 3 }) }, () => ({
      id: faker.string.uuid(),
      name: faker.lorem.word(),
      slug: faker.helpers.slugify(faker.lorem.word()).toLowerCase(),
    })),
    tags: faker.helpers.arrayElements(
      ['technology', 'business', 'design', 'development', 'marketing', 'seo', 'news'],
      { min: 1, max: 4 }
    ),
    status,
    format: faker.helpers.arrayElement(formats),
    publishedAt: status === 'published' ? createdDate.toISOString() : undefined,
    scheduledFor:
      status === 'scheduled' ? faker.date.future({ years: 0.1 }).toISOString() : undefined,
    views: faker.number.int({ min: 0, max: 10000 }),
    likes: faker.number.int({ min: 0, max: 1000 }),
    comments: faker.number.int({ min: 0, max: 200 }),
    seo: {
      title: faker.lorem.sentence({ min: 5, max: 10 }),
      description: faker.lorem.paragraph(),
      keywords: faker.helpers.arrayElements(
        ['seo', 'marketing', 'content', 'blog', 'article'],
        { min: 3, max: 6 }
      ),
    },
    createdAt: createdDate.toISOString(),
    updatedAt: faker.date.between({ from: createdDate, to: new Date() }).toISOString(),
  };
}

export const dummyPosts: Post[] = Array.from({ length: 80 }, (_, i) => generatePost(i));

export function getPostsByStatus(status: PostStatus): Post[] {
  return dummyPosts.filter((post) => post.status === status);
}

export function getPublishedPosts(): Post[] {
  return dummyPosts.filter((post) => post.status === 'published');
}
