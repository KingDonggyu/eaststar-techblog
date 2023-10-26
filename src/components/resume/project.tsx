import { ReactNode } from 'react';
import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';
import { GitHubIcon, VideoIcon, WebIcon } from '../icons';

export interface ResumeProjectProps {
  title: string;
  github?: string;
  web?: string;
  demo?: string;
  image: string | StaticImageData;
  startDate: string;
  endDate: string;
  introduce: string | ReactNode;
  skills: string[];
  tasks: ProjectTaskProps[];
}

export function ResumeProject({
  title,
  github,
  web,
  demo,
  startDate,
  endDate,
  image,
  introduce,
  skills,
  tasks,
}: ResumeProjectProps) {
  return (
    <div className="flex gap-8 sm:flex-col sm:gap-0">
      <div className="sm:flex sm:justify-between sm:items-baseline">
        <Image src={image} alt={title} width={100} height={100} className="rounded-lg min-w-[100px]" />
        <div className="flex justify-evenly items-center mt-5 sm:gap-4">
          {github && (
            <Link href={github} target="_blank">
              <GitHubIcon className="w-6 h-6" />
            </Link>
          )}
          {web && (
            <Link href={web} target="_blank">
              <WebIcon className="w-7 h-7" />
            </Link>
          )}
          {demo && (
            <Link href={demo} target="_blank">
              <VideoIcon className="w-7 h-7" />
            </Link>
          )}
        </div>
      </div>
      <div className="flex-grow">
        <div className="flex justify-between items-baseline sm:flex-col">
          <h3 className="font-bold sm:my-2">{title}</h3>
          <span className="text-sm text-date">
            {startDate}~{endDate}
          </span>
        </div>
        <blockquote className="mb-4 sm:my-4">
          <p>{introduce}</p>
        </blockquote>
        <p className="text-sm font-bold">{skills.join(', ')}</p>
        <hr />
        {tasks.map((taskProps, index) => (
          <ProjectTask key={index} {...taskProps} />
        ))}
      </div>
    </div>
  );
}

interface ProjectTaskProps {
  title?: string;
  startDate?: string;
  endDate?: string;
  details: Array<{ content: string; web?: string }>;
}

function ProjectTask({ title, startDate, endDate, details }: ProjectTaskProps) {
  return (
    <div key={title} className="mb-5">
      {title && (
        <div className="flex justify-between items-baseline sm:flex-col sm:gap-2">
          <h4 className="text-lg font-bold">{title}</h4>
          <span className="text-sm text-date">
            {startDate} ~ {endDate}
          </span>
        </div>
      )}
      <ul className="list-disc">
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
