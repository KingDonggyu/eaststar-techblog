import Link from 'next/link';
import { usePathname } from 'next/navigation';

export function TagFilter({ tagList, className }: { tagList: Array<[string, number]>; className?: string }) {
  const pathName = usePathname();
  const selectedTag = pathName.split('/').pop() || 'all';

  return (
    <div className={`${className} flex flex-wrap gap-3`}>
      {tagList.map(([tag, count]) => (
        <TagItem key={tag} tag={tag} count={count} isActive={selectedTag === tag.toLowerCase().replace(/\./g, '')} />
      ))}
    </div>
  );
}

export function TagItem({ tag, count, isActive }: { tag: string; count?: number; isActive?: boolean }) {
  return (
    <Link
      href={`/tags/${tag.toLowerCase().replace(/\./g, '')}`}
      className={`!no-underline border px-3 py-1 rounded-full text-sm hover:text-primary ${
        isActive && 'border-primary border font-bold text-primary'
      }`}
    >
      {tag.toUpperCase()} {count}
    </Link>
  );
}
