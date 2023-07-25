import { ReactNode } from 'react';

interface ResumeSectionProps {
  title: string;
  children: ReactNode;
}

export function ResumeSection({ title, children }: ResumeSectionProps) {
  return (
    <section>
      <h2 className="font-bold">{title}</h2>
      <div className="flex flex-col gap-5">{children}</div>
    </section>
  );
}
