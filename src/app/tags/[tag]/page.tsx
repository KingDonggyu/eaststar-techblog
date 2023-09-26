import Home from 'app/page';
import { allPosts } from 'contentlayer/generated';

export default function Tag({ params }: { params: { tag: string } }) {
  const isAll = params.tag === 'all';

  const posts = isAll
    ? allPosts
    : allPosts.filter(({ tags }) => {
        const matchingTags = tags.filter(tag => tag.toLowerCase() === params.tag);
        return Boolean(matchingTags.length);
      });

  return (
    <>
      <Home posts={posts} />
    </>
  );
}
