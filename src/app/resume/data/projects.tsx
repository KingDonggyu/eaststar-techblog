import sejulbook from 'assets/logo-sejulbook.png';
import fitory from 'assets/logo-fitory.png';
import { ResumeProjectProps } from 'components/ResumeProject';

type Project = ResumeProjectProps;

const projects: Project[] = [
  {
    title: '세 줄 독후감',
    github: 'https://github.com/KingDonggyu/sejulbook',
    web: 'https://www.sejulbook.com',
    image: sejulbook,
    startDate: '2023.02',
    endDate: '현재',
    introduce: (
      <>
        <strong>&quot;독후감을 작성하고 공유할 수 있는 웹 서비스&quot;</strong> (회원 39명 확보)
        <br />
        1인 풀스택 개발 프로젝트이며 지속적인 유지보수 및 운영을 하고 있습니다.
      </>
    ),
    skills: ['Next.js', 'TypeScript', 'React-Query', 'Zustand', 'Emotion', 'AWS S3', 'Prisma', 'MySQL'],
    tasks: [
      {
        title: '대규모 리팩토링 진행',
        startDate: '2023.06',
        endDate: '2023.07',
        details: [
          {
            content:
              '부분별 클라이언트 사이드 렌더링 적용으로 서버 사이드 렌더링 속도 87% 개선 (HTML 응답 시간: 1.33s → 0.177s)',
            web: 'https://east-star.tistory.com/46',
          },
          {
            content: 'SQL raw query를 Prisma ORM으로 마이그레이션하여 유지 보수성 및 가독성 개선',
          },
          {
            content: '백엔드 여러 비즈니스 로직(Service 계층) 내 생성자 의존성 주입으로 결합도 최소화',
          },
          {
            content: '사용자 경험 향상을 위한 Skeleton UI Loading 적용',
          },
        ],
      },
      {
        title: '웹 서비스 개발',
        startDate: '2023.02',
        endDate: '2023.05',
        details: [
          {
            content:
              '서비스워커를 활용하여 불필요한 이미지를 자동 제거하는 가비지 컬렉션 Hook 구현으로 AWS S3 사용 용량 감축',
            web: 'https://east-star.tistory.com/41',
          },
          {
            content:
              'React-Query, Axios, LocalStorage 등 인터페이스를 구현하여 외부 요소에 대한 의존성 최소화 및 유지 보수성 개선',
            web: 'https://east-star.tistory.com/47',
          },
          {
            content: '아토믹 디자인을 활용한 디자인 시스템을 구축하여 컴포넌트 재사용성 및 확장성 증대',
            web: 'https://east-star.tistory.com/42',
          },
          {
            content: '커스텀 Hook을 적극 활용하여 컴포넌트 내 관심사 분리',
          },
          {
            content: '메타 태그 사용 및 sitemap 생성 자동화를 통한 검색 엔진 최적화',
          },
          {
            content: 'Intersection Observer API를 활용한 무한 스크롤 구현',
          },
        ],
      },
    ],
  },
  {
    title: 'Fitory',
    github: 'https://github.com/boostcampwm-2022/Web04-Fitory',
    demo: 'https://www.youtube.com/watch?v=Np4XKGe1IKU',
    image: fitory,
    startDate: '2022.11',
    endDate: '2022.12',
    introduce: (
      <>
        <strong>&quot;운동을 기록하고 파워리프팅 챌린지를 할 수 있는 웹 서비스&quot;</strong>
        <br />
        4인 개발 프로젝트이며 프론트엔드 개발자로 참여했습니다.
      </>
    ),
    skills: ['React', 'TypeScript', 'React-Query', 'Zustand', 'styled-components', 'Webpack'],
    tasks: [
      {
        details: [
          {
            content: '이미지 압축, 코드 스플리팅, 트리 쉐이킹으로 Speed Index 92%, Total Blocking Time 46% 개선',
            web: 'https://east-star.tistory.com/36',
          },
          {
            content: 'Chart.js를 이용한 데이터 시각화',
          },
          {
            content: 'Storybook을 통한 컴포넌트 검증 프로세스 간소화',
          },
          {
            content: 'Progressive Web App(PWA) 구축',
          },
          {
            content: 'Webpack과 Babel을 활용하여 React 개발 환경 구축',
          },
          {
            content: '데일리 스크럼, 코드 리뷰, 회고, 테크 세미나 등 협업 활동 수행',
            web: 'https://github.com/boostcampwm-2022/Web04-Fitory/wiki',
          },
        ],
      },
    ],
  },
];

export default projects;
