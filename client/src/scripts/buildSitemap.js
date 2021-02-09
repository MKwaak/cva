const fs = require('fs-extra');
const getPathsObject = require('./getPathsObject');
const formatDate = require('./formatDate');

const url = 'https://creatingvalue.co';

// SITEMAP.XML
const pathsObj = getPathsObject();
const today = formatDate(new Date());
const sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"> 
  ${Object.keys(pathsObj).map((path) => `<url>
    <loc>${url}${path}</loc>
    <lastmod>${pathsObj[path].lastModified ? formatDate(new Date(pathsObj[path].lastModified)) : today}</lastmod>
  </url>`).join('')}
  <url>
    <loc>${url}/images/generic/cva_logo_web-color.png</loc>
    <lastmod>2020-06-17</lastmod>
  </url>
</urlset>`;

fs.writeFileSync('./src/public/sitemap.xml', sitemapXml);
console.log('sitemap_local.xml saved!');
