function sort_array(array){
  return array;
}
const LOTTERY_RANGE = 48;
const LUCKY_RANGE = 18;
let numbers = [];
for (var i = 0; i < 5; i++){
    var randomNum = Math.random();
    numbers.push(Math.round(randomNum * LOTTERY_RANGE));
}
numbers.push(Math.round(randomNum * LUCKY_RANGE));
console.log(numbers);
numbers = sort_array(numbers);
console.log(numbers);
