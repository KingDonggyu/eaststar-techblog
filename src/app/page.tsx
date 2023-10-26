import PostGrid from 'components/post/grid';
import { TagFilter } from 'components/tag-filter';
import { Post, allPosts } from 'contentlayer/generated';
import { getAllTagList } from 'utils/getAllTagList';

export default function Home({ posts }: { posts?: Post[] }) {
  const localeCompare = (a: Post, b: Post) => {
    return b.createdAt.localeCompare(a.createdAt);
  };

  const sortedPosts = posts ? posts.sort(localeCompare) : allPosts.sort(localeCompare);
  const tagList = getAllTagList();

  return (
    <>
      <TagFilter tagList={tagList} className="pt-5 pb-10" />
      <PostGrid posts={sortedPosts} />
    </>
  );
}
