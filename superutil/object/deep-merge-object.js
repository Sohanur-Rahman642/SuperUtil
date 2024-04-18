module.exports = function deepMerge(target, source) {
  for (const key in source) {
    if (
      target.hasOwnProperty(key) &&
      typeof target[key] === "object" &&
      typeof source[key] === "object"
    ) {
      deepMerge(target[key], source[key]);
    } else {
      target[key] = source[key];
    }
  }
  return target;
};
