function fibs(input) {
  if (input <= 0) return [];
  if (input === 1) return [0];

  let result = [0, 1];
  for (let i = 1; i < input - 1; i++) {
    result.push(result[i] + result[i - 1]);
  }
  return result;
}

function fibsRec(input) {
  if (input == 0) return [0];
  if (input == 1) return [0, 1];
  const result = fibsRec(input - 1);
  return [...result, result[input - 1] + result[input - 2]];
}

console.log(fibs(8));
console.log(fibsRec(8));
