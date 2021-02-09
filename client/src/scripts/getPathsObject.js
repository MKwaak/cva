const fs = require('fs');
const path = require('path');

const removeFileExt = (dirname) => {
  const parsedPath = path.parse(dirname);
  if (parsedPath.dir) {
    return `${parsedPath.dir}/${parsedPath.name}`;
  }
  return parsedPath.name;
};

module.exports = () => {
  const fileObj = {};

  const walkSync = (dir) => {
    const files = fs.readdirSync(dir);
    files.forEach((file) => {
      const partialNextFile = /^_\w*/;
      const dynamicNextFile = /^\[(.*?)\]/;
      if (partialNextFile.test(file) || dynamicNextFile.test(file)) {
        return;
      }

      const fullPath = `${dir}${file}`;
      const fileStat = fs.statSync(fullPath);

      if (fileStat.isDirectory()) {
        walkSync(`${fullPath}/`);
      } else {
        const parsedPath = path.parse(fullPath);
        if (!parsedPath.ext) {
          // skip system files
          return;
        }

        const filePathAry = path.format(parsedPath).split(path.sep);
        filePathAry.splice(0, 3);

        const fileDir = filePathAry.join('/');
        const cleanPath = removeFileExt(fileDir);

        fileObj[`/${cleanPath}`] = {
          page: `/${cleanPath}`,
          lastModified: fileStat.mtime,
        };
      }
    });
  };

  walkSync('./src/pages/');
  walkSync('./src/posts/');

  return fileObj;
};
