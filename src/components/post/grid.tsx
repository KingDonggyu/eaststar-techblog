import Image from 'next/image';
import Link from 'next/link';
import { Post } from 'contentlayer/generated';
import { ClockIcon } from '../icons';

export function PostGrid({ posts }: { posts: Post[] }) {
  return (
    <section>
      <ul className="grid grid-cols-2 gap-12 mobile:grid-cols-1">
        {posts.map((post, i) => (
          <PostItem key={post._raw.flattenedPath} priority={i < 4} {...post} />
        ))}
      </ul>
    </section>
  );
}

export function PostItem({
  url,
  image,
  title,
  introduce,
  createdAt,
  category,
  priority,
}: Post & { priority?: boolean }) {
  return (
    <li className="shadow-default transition-all duration-300 rounded-lg dark:bg-[#2d333b] hover:shadow-hover hover:scale-105">
      <Link href={url} aria-label="" tabIndex={0}>
        {image ? (
          <Image
            src={image}
            priority={priority}
            width={300}
            height={100}
            alt="게시물 대표 이미지"
            className="object-cover rounded-t-lg w-full h-40 mobile:h-48"
          />
        ) : (
          <div className="rounded-t-lg w-full h-40 mobile:h-48 bg-primary" />
        )}
        <div className="w-full h-52 p-4 flex flex-col">
          <span className="text-sm text-date mb-4">{category}</span>
          <div>
            <h3 className="text-base mb-3 font-bold leading-snug transition-colors">{title}</h3>
            <p className="text-sm leading-relaxed">{introduce}</p>
          </div>
          <span className="text-sm text-date mt-auto">
            <ClockIcon className="w-5 inline-block align-middle mr-1" />
            <span className="align-middle">{createdAt}</span>
          </span>
        </div>
      </Link>
    </li>
  );
}

export default PostGrid;
