import { allPosts } from 'contentlayer/generated';

export function getAllTagList() {
  const tagInfo = new Map();
  let totalTagCount = 0;

  allPosts.forEach(({ tags }) => {
    tags.forEach(tag => {
      if (tagInfo.has(tag)) {
        tagInfo.set(tag, (tagInfo.get(tag) || 0) + 1);
        return;
      }
      tagInfo.set(tag, 1);
    });

    totalTagCount += tags.length;
  });

  const tagList = Array.from(tagInfo).sort((a, b) => (a[0] < b[0] ? -1 : 1));
  tagList.unshift(['all', totalTagCount]);

  return tagList;
}
