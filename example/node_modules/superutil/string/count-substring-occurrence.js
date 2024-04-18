module.exports = function countSubstringOccurrences(string, substring) {
  let count = 0;
  let index = string.indexOf(substring);
  while (index !== -1) {
    count++;
    index = string.indexOf(substring, index + 1);
  }
  return count;
};
