import Link from 'next/link';

export interface ResumeExperienceProps {
  title: string;
  web?: string;
  startDate: string;
  endDate?: string;
  details?: Array<{ content: string; web?: string }>;
}

export function ResumeExperience({ title, web, startDate, endDate, details = [] }: ResumeExperienceProps) {
  return (
    <div>
      <div className="flex justify-between items-baseline">
        <h3 className="text-lg font-bold m-0">
          {web ? (
            <Link href={web} target="_blank">
              {title}
            </Link>
          ) : (
            title
          )}
        </h3>
        <span className="text-sm text-date">
          {startDate} {Boolean(endDate) && `~ ${endDate}`}
        </span>
      </div>
      <ul>
        {details.map(({ content, web }) => (
          <li key={content}>
            {web ? (
              <Link href={web} target="_blank">
                {content}
              </Link>
            ) : (
              content
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
