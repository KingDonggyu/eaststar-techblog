import { Post } from 'contentlayer/generated';
import { ClockIcon } from './Icons';
import { TagItem } from './TagFilter';

export function PostHeader({ title, createdAt, tags }: Post) {
  return (
    <header className="border-b border-primary pb-10 mb-14">
      <div>
        {tags.map(tag => (
          <TagItem key={tag} tag={tag} />
        ))}
      </div>
      <h1>{title}</h1>
      <div className="text-date">
        <ClockIcon className="w-5 inline-block align-middle mr-1" />
        <span className="align-middle">{createdAt}</span>
      </div>
    </header>
  );
}
