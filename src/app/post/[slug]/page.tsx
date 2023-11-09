import 'styles/posts.css';
import { allPosts } from 'contentlayer/generated';
import { getMDXComponent } from 'next-contentlayer/hooks';
import { PostHeader } from 'components/post/header';
import { GiscusComment } from 'components/post/comment';

export default function Post({ params }: { params: { slug: string } }) {
  const post = getPost(params.slug);

  if (!post) {
    return null;
  }

  const Content = getMDXComponent(post.body.code);

  return (
    <>
      <article className="post content pt-5 pb-20">
        <PostHeader {...post} />
        <Content />
      </article>
      <GiscusComment />
    </>
  );
}

export async function generateStaticParams() {
  return allPosts.map(post => ({ slug: post._raw.flattenedPath }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const post = getPost(params.slug);

  if (post) {
    return { title: post.title };
  }
}

function getPost(slug: string) {
  return allPosts.find(({ _raw: { flattenedPath } }) => flattenedPath === slug);
}
