'use client';

import 'styles/portfolio.css';
import { useEffect, useState } from 'react';
import { ThemeToggle } from 'components/ThemeToggle';
import { PortfolioIntro } from 'components/PortfolioIntro';
import { PortfolioExperience } from 'components/PortfolioExperience';
import { PortfolioSkill } from 'components/PortfolioSkill';
import { PortfolioProject } from 'components/PortfolioProject';
import { Footer } from 'components/Footer';

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
