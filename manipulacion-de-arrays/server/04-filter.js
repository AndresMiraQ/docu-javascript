const words = [
  "spray",
  "limit",
  "elite",
  "exuberant",
  "destruction",
  "present",
];

const newArray = [];
for (let i = 0; i < words.length; i++) {
  if (words[i].length > 6) {
    newArray.push(words[i]);
  }
}
console.log("New Array", newArray);
console.log("Original Array", words);

const newArray2 = words.filter((word) => word.length > 6);

console.log("New Array2", newArray2);
console.log("Original Array", words);

const orders = [
  {
    customerName: "Cristian",
    total: 100,
    deliveried: false,
  },
  {
    customerName: "Yuriam",
    total: 150,
    deliveried: false,
  },
  {
    customerName: "Ashley",
    total: 170,
    deliveried: true,
  },
  {
    customerName: "Simón",
    total: 200,
    deliveried: true,
  },
];

const newOrders = orders.filter((order) => order.deliveried);
console.log("New Orders", newOrders);

const search = (query) => {
  return orders.filter((order) => order.customerName.includes(query));
};
console.log("Search", search("Cristian"));