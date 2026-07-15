import { getCollection, type CollectionEntry } from 'astro:content';

type ContentCollection = 'blog' | 'projects';

const contentFiles = {
  blog: import.meta.glob('../content/blog/**/*.md'),
  projects: import.meta.glob('../content/projects/**/*.md'),
};

export async function getContentCollection<T extends ContentCollection>(
  collection: T,
): Promise<CollectionEntry<T>[]> {
  if (Object.keys(contentFiles[collection]).length === 0) {
    return [];
  }

  try {
    return await getCollection(collection);
  } catch (error) {
    if (error instanceof Error && error.message.includes('does not exist or is empty')) {
      return [];
    }

    throw error;
  }
}

export function formatMonthYear(date: Date) {
  return new Intl.DateTimeFormat('en-US', {
    month: 'long',
    year: 'numeric',
  }).format(date);
}

export function sortBlogPosts(posts: CollectionEntry<'blog'>[]) {
  return [...posts].sort(
    (left, right) => right.data.publishDate.valueOf() - left.data.publishDate.valueOf(),
  );
}

export function sortProjects(projects: CollectionEntry<'projects'>[]) {
  return [...projects].sort((left, right) => {
    const categoryOrder = left.data.category.localeCompare(right.data.category);

    if (categoryOrder !== 0) {
      return categoryOrder;
    }

    return left.data.order - right.data.order;
  });
}
