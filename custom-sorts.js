function ageSort(users) {
  return users.sort((a, b) => a.age - b.age);
}

function oddEvenSort(arr) {
  arr.sort((a, b) => {
    if (a % 2 !== b % 2) {
      return a % 2 ? -1 : 1;
    }
    return a - b;
  });
  return arr;
}

function validAnagrams(s, t) {
  const sSorted = s.split("").sort().join("");
  const tSorted = t.split("").sort().join("");
  return sSorted === tSorted;
}

function reverseBaseSort(arr) {
  function getBase(num) {
    return Math.floor(Math.log(num) / Math.log(10) + 1);
  }
  arr.sort((a, b) => {
    const baseA = getBase(a);
    const baseB = getBase(b);
    if (baseA !== baseB) {
      return baseB - baseA;
    } else {
      return a - b;
    }
  });
  return arr;
}

function frequencySort(arr) {
  const frequentCount = {};

  for (num of arr) {
    if (frequentCount[num] === undefined) {
      frequentCount[num] = 1;
    } else {
      frequentCount[num]++;
    }
  }
  arr.sort((a, b) => {
    const frequentDiff = frequentCount[a] - frequentCount[b];
    if (frequentDiff !== 0) {
      return frequentDiff;
    }
    return b - a;
  });
  return arr;
}

module.exports = [
  oddEvenSort,
  validAnagrams,
  reverseBaseSort,
  frequencySort,
  ageSort,
];
