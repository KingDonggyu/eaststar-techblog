'use client';

import { useEffect, useState } from 'react';
import { ThemeToggle } from 'components/theme-toggle';
import { PortfolioIntro } from 'components/portfolio/intro';
import { PortfolioExperience } from 'components/portfolio/experiences';
import { PortfolioSkill } from 'components/portfolio/skills';
import { PortfolioProject } from 'components/portfolio/projects';
import { Footer } from 'components/layout/footer';

export default function Portfolio() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsMounted(true);
      window.scrollTo(0, 0);
    }, 300);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <>
      <div id="portfolio" className="px-28 py-[90px] max-w-[1440px] m-auto sm:px-[30px]">
        <ThemeToggle className="fixed top-7 right-8" />
        <PortfolioIntro />
        <div className="relative">
          <PortfolioExperience />
          <Divider />
          <PortfolioSkill />
          <Divider />
          <PortfolioProject />
        </div>
      </div>
      <Footer />
    </>
  );
}

function Divider() {
  return <div className="mt-20" />;
}
