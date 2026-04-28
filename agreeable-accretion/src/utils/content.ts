import type { CollectionEntry } from 'astro:content';

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
