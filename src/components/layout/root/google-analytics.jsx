'use client';

import { useEffect, useRef } from 'react';
import { usePathname } from 'next/navigation';
import Script from 'next/script';

export function GA() {
  const pathname = usePathname();
  const savedPathNameRef = useRef(pathname);

  useEffect(() => {
    const handleRouteChange = url => {
      pageview(url);
    };

    if (savedPathNameRef.current !== pathname) {
      handleRouteChange();
      savedPathNameRef.current = pathname;
    }
  }, [pathname]);

  return (
    <>
      <Script strategy="afterInteractive" src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`} />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_TRACKING_ID}', {
              page_path: window.location.pathname,
            });
        `}
      </Script>
    </>
  );
}

const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GA_ID;

export const pageview = url => {
  window.gtag('config', GA_TRACKING_ID, {
    page_path: url,
  });
};
