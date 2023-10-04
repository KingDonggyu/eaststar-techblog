import { allPosts } from 'contentlayer/generated';

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
