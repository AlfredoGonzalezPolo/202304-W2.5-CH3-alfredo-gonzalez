export function fizzBuzzGame(start: number, end: number) {
  const numberList: any[] = [];
  for (let i = start; i <= end; i++) {
    numberList.push(i);

    if (i % 5 === 0) {
      numberList.pop();
      numberList.push("buzz");
    }

    if (i % 3 === 0) {
      numberList.pop();
      numberList.push("fizz");
    }

    if (i % 5 === 0 && i % 3 === 0) {
      numberList.pop();
      numberList.push("fizzBuzz");
    }
  }

  return numberList;
}

console.log(fizzBuzzGame(2, 20));
