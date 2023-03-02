import readline from "readline";

const calculate2 = (array1, array2) => {
  const [k, budget] = array1.trim().split(" ");
  let salary = array2.trim().split(" ");
  if (parseInt(budget) < 0 || parseInt(budget) > 3000) {
    console.log("input invalid");
    return;
  }
  if (parseInt(k) !== salary.length) {
    console.log("input invalid");
    return;
  }
  if (salary.find((item) => !parseInt(item) || parseInt(item) < 0)) {
    console.log("input invalid");
    return;
  }
  salary = salary.sort((a, b) => parseInt(a) - parseInt(b));
  let count = 0;
  let countSalary = 0;
  for (let i = 0; i < parseInt(k); i += 1) {
    countSalary += parseInt(salary[i]);
    if (countSalary <= parseInt(budget)) {
      count += 1;
    }
  }
  console.log(count);
};

const calculate = (array) => {
  const N = parseInt(array[0]);
  if (!N && N > 100) {
    console.log("input invalid");
    return;
  }
  if (array && array.length - 1 !== N * 2) {
    console.log("input invalid");
    return;
  }
  for (let i = 0; i < N; i += 1) {
    calculate2(array[i * 2 + 1], array[i * 2 + 2]);
  }
};

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const lines = [];

rl.on("line", (line) => {
  lines.push(line);
});

rl.on("close", () => {
  calculate(lines);
});
