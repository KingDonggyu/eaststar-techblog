export function PortfolioExperience() {
  return (
    <section className="sticky-container mt-[300px] w-full h-[3000px] font-bold">
      {experiences.map(({ title, contents }) => (
        <div key={title} className="sticky top-24 flex flex-col h-[40rem] xl:mb-44">
          <div className="w-[21rem] sm:w-full">
            <h3 className="text-5xl">{title}.</h3>
            <ul>
              {contents.map(({ title, info, date }) => (
                <li key={title} className="flex flex-col gap-2 mt-14">
                  <span className="text-xl">{title}</span>
                  <span className="text-xl">{info}</span>
                  <span className="text-sm">{date}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </section>
  );
}

const experiences = [
  {
    title: 'EDUCATION',
    contents: [
      {
        title: '경북대학교',
        info: '컴퓨터학부 학사 졸업',
        date: '2017.03 ~ 2023.02',
      },
    ],
  },
  {
    title: 'EXPERIENCES',
    contents: [
      {
        title: '원티드',
        info: '프리온보딩 프론트엔드 인턴십',
        date: '2023.06.26 ~ 2023.07.21',
      },
      {
        title: '네이버 커넥트재단',
        info: '부스트캠프 웹·모바일 7기',
        date: '2022.07.18 ~ 2022.12.16',
      },
      {
        title: 'LG Soft India',
        info: 'WebOS 인턴십',
        date: '2021.07.05 ~ 2021.08.06',
      },
    ],
  },
  {
    title: 'AWARDS',
    contents: [
      {
        title: '산림 공공 빅데이터 활용 창업 경진대회',
        info: '장려상',
        date: '2021.09.09',
      },
      {
        title: 'LG Soft India WebOS 해커톤',
        info: '2nd Place',
        date: '2021.08.13',
      },
    ],
  },
];
