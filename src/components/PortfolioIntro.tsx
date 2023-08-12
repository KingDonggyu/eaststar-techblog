import { useRef } from 'react';
import Image from 'next/image';
import myPhoto from 'public/me.jpg';
import useImageScrollScale from 'hooks/useImageScrollScale';
import useScrollDownFadeOut from 'hooks/useScrollDownFadeOut';
import useScrollDownFadeIn from 'hooks/useScrollDownFadeIn';
import { PortfolioLinks } from './PortfolioLinks';
import { ArrowDownIcon } from './Icons';

export function PortfolioIntro() {
  const backgroundRef = useRef<HTMLDivElement>(null);
  const coverImageRef = useImageScrollScale(scale => {
    if (backgroundRef.current) {
      backgroundRef.current.style.opacity = String(0.3 + scale / 5);
    }
  });

  const firstContentRef = useScrollDownFadeOut<HTMLDivElement>({ endScrollY: 1000 });
  const secondContentRef = useScrollDownFadeIn<HTMLDivElement>({ startScrollY: 1100, endScrollY: 1500 });
  const wrapperRef = useScrollDownFadeOut({ startScrollY: 2000, endScrollY: 4000 });

  return (
    <section ref={wrapperRef} className="relative text-white h-[3000px] animate-opacity duration-1000">
      <Image
        ref={coverImageRef}
        src={myPhoto}
        alt="김동규의 사진"
        className={`fixed top-0 left-0 w-full h-[100vh] object-cover`}
      />
      <div ref={backgroundRef} className="fixed top-0 left-0 w-full h-[100vh] bg-black opacity-40" />
      <div ref={firstContentRef}>
        <h1 className="fixed top-24 whitespace-pre font-bold text-9xl animate-leftSlide lg:text-7xl sm:!text-5xl">
          KIM DONGGYU
        </h1>
        <h2 className="fixed top-64 whitespace-pre font-bold text-7xl animate-rightSlide lg:text-5xl sm:!text-3xl lg:top-52 sm:!top-44">
          FRONT-END DEVELOPER
        </h2>
        <div className="link-wrapper fixed top-[35rem] animate-fadeIn">
          <PortfolioLinks large />
        </div>
        <span className="fixed bottom-5 left-[47%] animate-pulse delay-[2s]">
          <ArrowDownIcon className="w-14 animate-bounce delay-[2s]" />
        </span>
      </div>
      <div ref={secondContentRef} className="absolute top-[1700px] left-0 w-full opacity-0 transition-opacity">
        <Introduce />
      </div>
    </section>
  );
}

function Introduce() {
  return (
    <div className="font-bold text-3xl text-center !leading-loose w-[900px] m-auto xl:w-full">
      <p>
        반갑습니다, 저는 김동규입니다.
        <br />
        &apos;재미&apos;라는 이유 하나로 웹 프론트엔드를 탐구하고 있습니다.
        <br />
        사람과 기술 그 중간에서 가치를 만들어내는 것에 큰 흥미를 느낍니다.
      </p>
      <br />
      <p>
        시간 가는 줄 모르고 빠져드는 몰입의 즐거움.
        <br />
        기술의 변화와 발전에 따른 지속적인 학습.
        <br />
        빠르게 실패할 수 있는 용기.
      </p>
      <br />
      <p>
        이 세 가지 가치를 바탕으로,
        <br />
        비즈니스를 넘어 사회에 기여하는 개발자가 되고자 합니다.
      </p>
    </div>
  );
}
