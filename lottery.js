
function sort_array(array){
  for (var i = 0; i < array.length; i++){
    for (var j = i; j < array.length; j++){
      if (array[i] > array[j]){
        temp = array[i];
        array[i] = array[j];
        array[j] = temp;
      }
    }
  }
  return array;
}
function secretNums(){
  const LOTTERY_RANGE = 48;
  const LUCKY_RANGE = 18;
  let numbers = [];
  var lucky;
  for (var i = 0; i < 5; i++){
      var randomNum = Math.random();
      numbers.push(Math.round(randomNum * LOTTERY_RANGE));
  }
  document.getElementById("unsortedNums").innerHTML = numbers;
  lucky = Math.round(randomNum * LUCKY_RANGE);
  numbers = sort_array(numbers);
  document.getElementById("sortedNums").innerHTML = numbers;
  return numbers;
}
function extractInts(str){
  var ints = str.split(" ");
  for (var i = 0; i < ints.length; i++){
    ints[i] = Math.floor(ints[i]);
  }
  return ints;
}
function playLottery(){
  var fivePick = document.getElementById('userFiveNums').value;
  fivePick = extractInts(fivePick);
  fivePick = sort_array(fivePick);
  var luckyPick = document.getElementById('userLucky').value;
  
  if (fivePick == numbers){
    document.getElementById('resultDisplay').innerHTML = "Win";
  } else {
    document.getElementById('resultDisplay').innerHTML = "Lose";
  }
}
