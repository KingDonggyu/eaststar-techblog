import { Post } from 'contentlayer/generated';
import { TagItem } from './TagFilter';

export function PostHeader({ title, introduce, createdAt, tags, category }: Post) {
  return (
    <header className="border-b border-primary pb-10 mb-10">
      <div className="flex flex-wrap gap-3 items-center">
        {tags.map(tag => (
          <TagItem key={tag} tag={tag} />
        ))}
      </div>
      <h1 className="!my-5">{title}</h1>
      <p>{introduce}</p>
      <div className="text-date">
        <span>{category}</span>
        <span className="mx-1">•</span>
        <span>{createdAt}</span>
      </div>
    </header>
  );
}
