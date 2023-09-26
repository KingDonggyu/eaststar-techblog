import Link from 'next/link';
import { usePathname } from 'next/navigation';

export function TagFilter({ tagList, className }: { tagList: Array<[string, number]>; className?: string }) {
  const pathName = usePathname();
  const selectedTag = pathName.split('/').pop() || 'all';

  return (
    <div className={`${className} flex flex-wrap gap-3`}>
      {tagList.map(([tag, count]) => (
        <TagItem key={tag} tag={tag} count={count} isActive={selectedTag === tag.toLowerCase()} />
      ))}
    </div>
  );
}

export function TagItem({ tag, count, isActive }: { tag: string; count?: number; isActive?: boolean }) {
  return (
    <Link
      href={`/tags/${tag.toLowerCase()}`}
      className={`!no-underline border mr-3 px-3 py-2 rounded-full text-sm ${
        isActive && 'border-primary border font-bold'
      }`}
    >
      #{tag.toUpperCase()} {count}
    </Link>
  );
}
