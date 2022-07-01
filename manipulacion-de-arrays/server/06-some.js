const numbers = [1, 2, 3, 4];

let some = false;
for (let index = 0; index < numbers.length; index++) {
  if (numbers[index] === 3) {
    some = true;
    break;
  }
}

const some2 = numbers.some((number) => number === 3);

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

const ordersDeleveried = orders.some((order) => order.deliveried);

const dates = [
  {
    startDate: new Date(2021, 1, 1, 10),
    endDate: new Date(2021, 1, 1, 11),
    title: "Cita de trabajo",
  },
  {
    startDate: new Date(2021, 1, 1, 15),
    endDate: new Date(2021, 1, 1, 15, 30),
    title: "Cita con mi jefe",
  },
  {
    startDate: new Date(2021, 1, 1, 20),
    endDate: new Date(2021, 1, 1, 21),
    title: "Cena",
  },
];

const newAppointment = {
  startDate: new Date(2021, 1, 1, 8),
  endDate: new Date(2021, 1, 1, 9, 30),
};

const areIntervalsOverlapping = require("date-fns/areIntervalsOverlapping");

const isOverlapping = (newDate) => {
  return dates.some((date) =>{
    return areIntervalsOverlapping(
      {start: date.startDate, end: date.endDate},
      {start: newDate.startDate, end: newDate.endDate}
    );
  })
    
}


console.log("Is overlapping", isOverlapping(newAppointment));