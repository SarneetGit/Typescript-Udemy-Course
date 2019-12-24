const carMakers: string[] = ['ford', 'toyota', 'chevy', 'honda'];

const dates: Date[] = [new Date(), new Date()];

const carsByMake = [['f150'], ['corolla'], ['camaro']];

const car = carMakers[0];
const myCar = carMakers.pop();

//prevent incompatible values

carMakers.map((car: string): string => {
  return car.toUpperCase();
});

// Flexible types

const importantDates: (string | Date)[] = [new Date(), '2030-10-10'];
importantDates.push('2030-10-10');
importantDates.push(new Date());
 
+