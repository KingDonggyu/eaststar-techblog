import Home from 'app/page';
import { allPosts } from 'contentlayer/generated';
import { getAllTagList } from 'utils/getAllTagList';

export default function Tag({ params }: { params: { tag: string } }) {
  const isAll = params.tag === 'all';

  const posts = isAll
    ? allPosts
    : allPosts.filter(({ tags }) => {
        const matchingTags = tags.filter(tag => tag.toLowerCase().replace(/\./g, '') === params.tag);
        return Boolean(matchingTags.length);
      });

  return <Home posts={posts} />;
}

export async function generateStaticParams() {
  return getAllTagList().map(([tag]) => ({ tag: tag.replace(/\./g, '') }));
}
