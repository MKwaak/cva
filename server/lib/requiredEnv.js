
const requiredEnv = (varsArray, cb) => {
  const unsetEnv = varsArray.filter((varName) => !(typeof process.env[varName] !== 'undefined'));
  let error;
  if (unsetEnv.length > 0) {
    error = "Required ENV variables are not set: [" + unsetEnv.join(', ') + "]";
  }
  cb(error);
  return !!error;
}

module.exports = { requiredEnv };
