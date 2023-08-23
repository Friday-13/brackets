module.exports = function check(str, bracketsConfig) {
  const stack = [];
  const isBracketsPair = (a, b) => {
    for (let pairInd = 0; pairInd < bracketsConfig.length; pairInd += 1) {
      if (bracketsConfig[pairInd][0] === a
        && bracketsConfig[pairInd][1] === b) {
        return true;
      }
    }
    return false;
  };
  const isOpenBracket = (symbol) => {
    for (let item = 0; item < bracketsConfig.length; item += 1) {
      if (symbol === bracketsConfig[item][0]) {
        return true;
      }
    }
    return false;
  };

  for (let symbol = 0; symbol < str.length; symbol += 1) {
    if (isBracketsPair(stack[stack.length - 1], str[symbol])) {
      stack.pop();
    } else if (isOpenBracket(str[symbol])) {
      stack.push(str[symbol]);
    } else {
      return false;
    }
  }

  if (stack.length > 0) return false;

  return true;
};
