import { ResumeExperienceProps } from 'components/resume/experience';

type Experience = ResumeExperienceProps;

export const activities: Experience[] = [
  {
    title: '원티드 프리온보딩 프론트엔드 인턴십',
    web: 'https://www.wanted.co.kr/events/pre_ob_fe_11',
    startDate: '2023.06.26',
    endDate: '2023.07.21',
    details: [{ content: 'React 기반 웹 프론트엔드 학습 및 프로젝트 수행' }],
  },
  {
    title: '네이버 커넥트재단 부스트캠프 웹·모바일 7기',
    web: 'https://boostcamp.connect.or.kr/program_wm.html',
    startDate: '2022.07.18',
    endDate: '2022.12.16',
    details: [{ content: 'JavaScript 기반 웹 풀스택 미션·프로젝트를 진행하며 학습 및 협업 수행' }],
  },
  {
    title: '알고리즘 박살 스터디',
    web: 'https://github.com/woong-jae/Algorithm-Crash',
    startDate: '2022.04.11',
    endDate: '2022.10.23',
    details: [{ content: '알고리즘 문제 풀이 및 코드 리뷰 수행' }],
  },
  {
    title: 'LG Soft India webOS 인턴십',
    startDate: '2021.07.05',
    endDate: '2021.08.06',
    details: [{ content: 'LG webOS 기반 미션·프로젝트 진행 및 해커톤 참여' }],
  },
];

export const awards: Experience[] = [
  {
    title: '산림 공공 빅데이터 활용 창업경진대회 장려상',
    startDate: '2021.09.09',
    details: [
      {
        content: "등산 동행을 구할 수 있는 웹 서비스 'SANTA' 프로젝트 참여",
        web: 'https://github.com/woong-jae/SANTA',
      },
    ],
  },
  {
    title: 'LG webOS 해커톤 Gold Prize (Second Place)',
    startDate: '2021.08.13',
    details: [
      {
        content: "시각장애인을 인식하고 광고를 읽어주는 시스템 'Smart Digital Signage' 프로젝트 참여",
        web: 'https://github.com/Backseungchan/LG_SoftIndia_Hackathon',
      },
    ],
  },
];

export const educations: Experience[] = [
  {
    title: '경북대학교 컴퓨터학부 학사 졸업',
    startDate: '2017.03',
    endDate: '2023.02',
    details: [
      {
        content: "'STT(Speech to Text) 서비스간 성능 비교 웹서비스' 프로젝트 참여",
        web: 'https://github.com/woong-jae/STT-Evaluation',
      },
      {
        content: "대구시 주택 단지별 탄소 배출량 및 탄소 포인트를 예측 및 시각화하는 'Carbon Tracker' 프로젝트 참여",
        web: 'https://github.com/Go-Jaecheol/Carbon-Tracker',
      },
    ],
  },
];
