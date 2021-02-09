/* eslint-disable react/no-danger */
import { FC } from 'react';
import Head from 'next/head';

interface Meta {
  siteTitle: string;
  siteDescription?: string;
  structuredData?: string;
}

const Meta: FC<Meta> = ({ siteTitle, siteDescription, structuredData }) => (
  <>
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta charSet="utf-8" />
      {siteTitle && <title>{siteTitle}</title>}
      <meta name="description" content={siteDescription} />
      <link rel="shortcut icon" type="image/x-icon" href="/favicon/favicon.ico" />
      {structuredData && (
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: structuredData }} />
      )}
    </Head>
    <style jsx global>
      {`
        @import url('https://fonts.googleapis.com/css?family=Quicksand:700,900|Lora:400,700&display=swap');
      `}
    </style>
  </>
);

export default Meta;
