import { useEffect } from 'react';
import { NextPage } from 'next';
import { useRouter } from 'next/router';
import Page from '../templates/Page';

const ErrorPage: NextPage = () => {
  const router = useRouter();

  useEffect(() => {
    window.dataLayer.push({
      event: 'error',
      errorType: '404 - page not found',
      path: router.pathname,
    });
  }, [router.pathname]);

  return (
    <Page title="Page not found (error code: 404)" siteTitle="Page not found" siteDescription="Creating Value Alliance" />
  );
};

export default ErrorPage;
