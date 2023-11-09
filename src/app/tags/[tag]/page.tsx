import Home from 'app/page';
import { allPosts } from 'contentlayer/generated';
import { getAllTagList, getTagMatchedPosts } from 'lib/contentlayer/utils';

export default function Tag({ params }: { params: { tag: string } }) {
  const posts = params.tag === 'all' ? allPosts : getTagMatchedPosts(params.tag);

  return <Home posts={posts} />;
}

export async function generateStaticParams() {
  return getAllTagList().map(([tag]) => ({ tag: tag.replace(/\./g, '') }));
}
