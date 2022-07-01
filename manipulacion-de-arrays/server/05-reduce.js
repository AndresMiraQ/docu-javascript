const totals = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let sum = 0;
for (let i = 0; i < totals.length; i++) {
  sum += totals[i];
}
console.log(sum);
const sum2 = totals.reduce((acc, curr) => acc + curr);

const items = [
  1, 1, 2, 2, 2, 3, 3, 4, 4, 4, 4, 4, 5, 5, 5, 6, 6, 6, 6, 6, 6, 6,
];
const uniqueItems = items.reduce((acc, curr) => {
  if (!acc[curr]) {
    acc[curr] = 1;
  } else {
    acc[curr]++;
  }
  return acc;
}, {}); // initial value {}
console.log(uniqueItems);

const levels = [
  {
    name: 'Cristian',
    Level: 'Hight',
  },
  {
    name: 'Yuriam',
    Level: 'Low',
  },
  {
    name: 'Simón',
    Level: 'Low',
  },
  {
    name: 'Ashley',
    Level: 'medium',
  },
  {
    name: 'Catalina',
    Level: 'Hight',
  },
  {
    name: 'Cheli',
    Level: 'Low',
  },
  {
    name: 'Simón',
    Level: 'Low',
  }
]

const levels2 = levels
.map(level => level.Level)
.reduce((acc, curr) => {
  if (!acc[curr]) {
    acc[curr] = 1;
  } else {
    acc[curr]++;
  }
  return acc;
}
, {});
console.log(levels2);

