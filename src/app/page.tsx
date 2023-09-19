import PostList from 'components/PostList';
import { allPosts } from 'contentlayer/generated';

export default function Home() {
  const posts = allPosts.sort((a, b) => b.createdAt.localeCompare(a.createdAt));

  return (
    <>
      <PostList posts={posts} />
    </>
  );
}
