import 'styles/posts.css';
import { ResumeSection } from 'components/ResumeSection';
import { ResumeIntroduce } from 'components/ResumeIntroduce';
import { ResumeProject } from 'components/ResumeProject';
import { ResumeExperience } from 'components/ResumeExperience';
import { PortfolioLinks } from 'components/PortfolioLinks';
import projects from './data/projects';
import { activities, awards, educations } from './data/experiences';

export default function Resume() {
  return (
    <>
      <h1>
        반갑습니다, 저는 <strong>김동규</strong>입니다
      </h1>
      <ResumeIntroduce />
      <PortfolioLinks />
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
    </>
  );
}
