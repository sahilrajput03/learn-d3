let arr = [
  { name: 'John', contributions: 2 },
  { name: 'Mary', contributions: 4 },
  { name: 'John', contributions: 1 },
  { name: 'Mary', contributions: 1 },
];

// let output = arr.reduce(function (accumulator, cur) {
//   let found = accumulator.find((elem) => elem.name == cur.name);
//   if (found) found.contributions = found.contributions + cur.contributions;
//   else accumulator.push(cur);
//   return accumulator;
// }, []);

let output = arr.reduce(function (accumulator, cur) {
  let found = accumulator.find((elem) => elem.name == cur.name);
  if (found) found.contributions = found.contributions + cur.contributions;
  else accumulator.push(cur);
  return accumulator;
}, []);

console.log('output?', output);
