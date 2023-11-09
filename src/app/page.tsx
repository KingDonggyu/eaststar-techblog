import PostGrid from 'components/post/grid';
import { TagFilter } from 'components/tag-filter';
import { Post } from 'contentlayer/generated';
import { getAllTagList, getSortedPosts } from 'lib/contentlayer/utils';

export default function Home({ posts }: { posts?: Post[] }) {
  const sortedPosts = getSortedPosts(posts);
  const tagList = getAllTagList();

  return (
    <>
      <TagFilter tagList={tagList} className="pt-5 pb-10" />
      <PostGrid posts={sortedPosts} />
    </>
  );
}
