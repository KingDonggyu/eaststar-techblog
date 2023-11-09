import { Post, allPosts } from 'contentlayer/generated';

export function getSortedPosts(posts?: Post[]) {
  const targetPosts = posts ? [...posts] : [...allPosts];
  return targetPosts.sort(localeCompare);
}

export function getTagMatchedPosts(selectedTag: string) {
  return allPosts.filter(({ tags }) => {
    const matchingTags = tags.filter(tag => tag.toLowerCase().replace(/\./g, '') === selectedTag);
    return Boolean(matchingTags.length);
  });
}

export function getAllTagList() {
  const tagInfo = new Map();

  allPosts.forEach(({ tags }) => {
    tags.forEach(tag => {
      const value = tag.toLowerCase();
      if (tagInfo.has(value)) {
        tagInfo.set(value, (tagInfo.get(value) || 0) + 1);
        return;
      }
      tagInfo.set(value, 1);
    });
  });

  const tagList = Array.from(tagInfo).sort((a, b) => (a[0] < b[0] ? -1 : 1));
  tagList.unshift(['all', allPosts.length]);

  return tagList;
}

function localeCompare(a: Post, b: Post) {
  return b.createdAt.localeCompare(a.createdAt);
}
