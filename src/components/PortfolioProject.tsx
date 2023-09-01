import Link from 'next/link';
import Image, { StaticImageData } from 'next/image';
import sejulbookThumbnail from 'assets/thumbnail-sejulbook.png';
import fitoryThumbnail from 'assets/thumbnail-fitory.png';
import algongThumbnail from 'assets/thumbnail-algong.png';
import carbontrackerThumbnail from 'assets/thumbnail-carbontracker.png';
import sttEvaluationThumbnail from 'assets/thumbnail-stt.png';
import smartDigitalSignageThumbnail from 'assets/thumbnail-signage.png';
import { DesktopIcon, GitHubIcon } from './Icons';

export function PortfolioProject() {
  return (
    <section className="font-bold pb-20">
      <h3 className="text-6xl mb-20">PROJECTS.</h3>
      <div className="grid grid-cols-2 gap-10 xl:grid-cols-1">
        {projects.map(({ thumbnail, title, introduce, contribute, skills, github, web }) => (
          <div key={title} className="project-wrapper relative object-contain shadow-hover rounded-xl overflow-hidden">
            <Image
              src={thumbnail}
              alt={`${title} 프로젝트 섬네일 이미지`}
              className="rounded-xl w-full h-full brightness-75 object-cover transition-all"
            />
            <div className="absolute top-0 bottom-0 left-0 right-0 p-7 text-theme-dark">
              <span className="project-title text-4xl transition-all">{title}</span>
              <div className="project-detail relative h-full flex flex-col gap-5 mt-7 text-lg opacity-0 transition-opacity duration-500 sm:mt-5">
                <span>&quot;{introduce}&quot;</span>
                <span className="sm:hidden">{contribute}</span>
                <span className="text-base sm:hidden">{skills}</span>
                <nav className="absolute bottom-16 right-0 flex justify-end gap-7 sm:bottom-12">
                  <Link href={github} target="_blank" className="flex items-center gap-2">
                    <GitHubIcon className="w-7 sm:w-5" /> GitHub (README)
                  </Link>
                  {web && (
                    <Link href={web} target="_blank" className="flex items-center gap-1.5">
                      <DesktopIcon className="w-7 sm:w-5" /> Demo
                    </Link>
                  )}
                </nav>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

interface Project {
  thumbnail: StaticImageData;
  title: string;
  introduce: string;
  contribute: string;
  skills: string;
  github: string;
  web?: string;
}

const projects: Project[] = [
  {
    thumbnail: sejulbookThumbnail,
    title: '세 줄 독후감',
    introduce: '독후감을 작성하고 공유할 수 있는 웹 서비스',
    contribute: '1인 개발 프로젝트 - 서버리스 웹 풀스택 개발 및 운영',
    skills: 'Next.js, TypeScript, React-Query, Zustand, Emotion, AWS S3, Prisma, MySQL',
    github: 'https://github.com/KingDonggyu/sejulbook',
    web: 'https://www.sejulbook.com',
  },
  {
    thumbnail: fitoryThumbnail,
    title: 'Fitory',
    introduce: '운동을 기록하고 파워리프팅 챌린지를 할 수 있는 웹 서비스',
    contribute: '4인 개발 프로젝트 - 프론트엔드 개발 기여',
    skills: 'React, TypeScript, React-Query, Zustand, styled-components, Webpack, Storybook',
    github: 'https://github.com/boostcampwm-2022/Web04-Fitory',
    web: 'https://www.youtube.com/watch?v=Np4XKGe1IKU',
  },
  {
    thumbnail: algongThumbnail,
    title: '알공',
    introduce: 'GitHub와 연동하여 알고리즘 문제 풀이 스터디를 운영할 수 있는 웹 서비스',
    contribute: '4인 개발 프로젝트 - 프론트엔드 개발 기여',
    skills: 'React, TypeScript, React-Query, Material-UI',
    github: 'https://github.com/CodeVault-CV/Client',
  },
  {
    thumbnail: carbontrackerThumbnail,
    title: 'Carbon Tracker',
    introduce: '대구시 주택 단지별 탄소 배출량 및 탄소 포인트를 예측 및 시각화하는 웹 서비스',
    contribute: '4인 개발 프로젝트 - 프론트엔드 개발 기여',
    skills: 'React, JavaScript, Recoil, D3.js, styled-components',
    github: 'https://github.com/Go-Jaecheol/Carbon-Tracker',
    web: 'https://www.youtube.com/watch?v=vmxlkb18iG0',
  },
  {
    thumbnail: sttEvaluationThumbnail,
    title: 'STT Evaluation',
    introduce: 'STT(Speech To Text) API 서비스간 성능(인식률, 인식 시간)을 비교할 수 있는 웹 서비스',
    contribute: '4인 개발 프로젝트 - 프론트엔드 개발 기여',
    skills: 'React, JavaScript, styled-components',
    github: 'https://github.com/woong-jae/STT-Evaluation',
  },
  {
    thumbnail: smartDigitalSignageThumbnail,
    title: 'Smart Digital Signage',
    introduce: '시각 장애인을 흰지팡이로 인식해 광고판의 내용을 읽어주는 시스템',
    contribute: '4인 개발 프로젝트 - WebOS 및 관리자 페이지 프론트엔드 개발 기여',
    skills: 'React, Enact, JavaScript, Material-UI',
    github: 'https://github.com/Backseungchan/LG_SoftIndia_Hackathon',
  },
];
