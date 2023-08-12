import Image from 'next/image';
import javascriptLogo from 'public/javascript.png';
import reactLogo from 'public/react.png';
import nextLogo from 'public/next.svg';

export function PortfolioSkill() {
  return (
    <section className="sticky-container h-[3000px] font-bold">
      {skills.map(({ logo, name, contents }, index) => (
        <div key={name} className="sticky top-24 flex flex-col h-[40rem] xl:mb-20">
          {index ? (
            <div className="text-6xl mb-20 opacity-0 xl:hidden">SKILLS.</div>
          ) : (
            <h3 className="text-6xl mb-20 opacity-100">SKILLS.</h3>
          )}
          <div className="w-[22rem] sm:w-full">
            <div className="flex items-center gap-4 mb-8">
              <Image src={logo} alt={`${name} 로고 이미지`} className="w-[40px] h-[40px] rounded-md object-contain" />
              <span className="text-4xl">{name}</span>
            </div>
            <ul className="list-disc pl-4 text-lg leading-relaxed">
              {contents.map(text => (
                <li key={text} className="mb-6">
                  {text}
                </li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </section>
  );
}

const skills = [
  {
    logo: javascriptLogo,
    name: 'JavaScript',
    contents: [
      'TypeScript에 능숙합니다.',
      '실행 컨텍스트를 근간으로 다양한 개념의 동작 원리를 이해하고 있습니다.',
      '다양한 자료구조 및 알고리즘을 구현할 수 있습니다.',
    ],
  },
  {
    logo: reactLogo,
    name: 'React',
    contents: [
      'Custom Hook을 적극 활용하여 컴포넌트 내 관심사를 분리합니다.',
      '다양한 상태 관리 라이브러리를 능숙하게 다룰 수 있습니다.',
      'Jest, Testing Library를 사용하여 테스트 코드를 작성할 수 있습니다.',
    ],
  },
  {
    logo: nextLogo,
    name: 'Next.js',
    contents: [
      'Server Side Rendering(SSR)과 Client Side Rendering(CSR)을 적절히 사용하여 성능을 최적화합니다.',
      '서버리스 아키텍처를 활용한 풀스택 개발에 능숙합니다.',
    ],
  },
];
