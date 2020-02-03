String.prototype.toJadenCase = function() {
  const words = this.split(' ');
  const upperCaseWords = words.map(
    word => word.slice(0, 1).toUpperCase() + word.slice(1)
  );
  return upperCaseWords.join(' ');
};

var str = "How can mirrors be real if our eyes aren't real";
console.log(str.toJadenCase());
