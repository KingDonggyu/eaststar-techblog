'use client';

import Giscus from '@giscus/react';
import { THEME } from 'lib/constants';
import { useTheme } from 'next-themes';

export function GiscusComment() {
  const { theme } = useTheme();

  return (
    <Giscus
      repo="KingDonggyu/eaststar-techblog"
      repoId="R_kgDOJ-A0cQ"
      category="Comments"
      categoryId="DIC_kwDOJ-A0cc4Ca0Qi"
      mapping="pathname"
      strict="0"
      reactionsEnabled="1"
      emitMetadata="0"
      inputPosition="top"
      theme={theme === THEME.light ? 'light' : 'dark_dimmed'}
      lang="ko"
      loading="lazy"
    />
  );
}
