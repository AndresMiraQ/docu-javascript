const orders = [
  {
  customerName: 'Cristian',
  total: 100,
  deliveried: false,
  },
  {
  customerName: 'Yuriam',
  total: 150,
  deliveried: false,
  },
  {
  customerName: 'Ashley',
  total: 170,
  deliveried: true,
  },
  {
  customerName: 'Simón',
  total: 200,
  deliveried: true,
  },
]

console.log('Original', orders);
const newOrders = orders.map(order => order.total);
console.log(newOrders);

// const newOrders2 = orders.map((item) => {
//   item.tax = 0.19;
//   return item;
// });
// console.log("NewOrders2", newOrders);
// console.log("original", orders);

const newOrders3 = orders.map((item) => {
  return {
    ...item,
    tax: 0.19,
  };
});
console.log("NewOrders3", newOrders3);
console.log("original", orders);