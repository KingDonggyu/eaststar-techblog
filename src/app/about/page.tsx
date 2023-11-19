import 'styles/posts.css';
import { Metadata } from 'next';
import { ResumeSection } from 'components/resume/section';
import { ResumeIntroduce } from 'components/resume/introduce';
import { ResumeProject } from 'components/resume/project';
import { ResumeExperience } from 'components/resume/experience';
import { PortfolioLinks } from 'components/portfolio/links';
import projects from './data/projects';
import { activities, awards, educations } from './data/experiences';

export const metadata: Metadata = {
  title: 'About - 개발자 동쪽별',
  description: '저를 소개합니다.',
};

export default function Resume() {
  return (
    <div className="post">
      <h1 className="ml-2">
        반갑습니다, 저는 <strong>김동규</strong>입니다
      </h1>
      <ResumeIntroduce />
      <PortfolioLinks hasPortfolioLink />
      <br />
      <ResumeSection title="Projects.">
        {projects.map(project => (
          <ResumeProject key={project.title} {...project} />
        ))}
      </ResumeSection>
      <br />
      <ResumeSection title="Experiences.">
        {activities.map(activity => (
          <ResumeExperience key={activity.title} {...activity} />
        ))}
      </ResumeSection>
      <br />
      <ResumeSection title="Awards.">
        {awards.map(award => (
          <ResumeExperience key={award.title} {...award} />
        ))}
      </ResumeSection>
      <br />
      <ResumeSection title="Education.">
        {educations.map(education => (
          <ResumeExperience key={education.title} {...education} />
        ))}
      </ResumeSection>
    </div>
  );
}
