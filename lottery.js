var winningNums = {
  winFive: [],
  winBall: 0,
};

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

function secretNums(winningNums){
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
  winningNums.winBall = lucky;
  numbers = sort_array(numbers);
  document.getElementById("sortedNums").innerHTML = numbers;
  winningNums.winFive = numbers;
}

function extractInts(str){
  var ints = str.split(" ");
  for (var i = 0; i < ints.length; i++){
    ints[i] = Math.floor(ints[i]);
  }
  return ints;
}

function countEqual(array1, array2){
  console.log("in count array");
  var count = 0;
  if (array1.length != array2.length){
    return false;
  }
  for (var i = 0; i < array1.length; i++){
      if (array1[i] == array2[i]){
        count++;
      }
  }
  console.log("count is " + count);
  return count;
}

function playLottery(winningNums){
  console.log(winningNums.winBall);
  var fivePick = document.getElementById('userFiveNums').value;
  fivePick = extractInts(fivePick);
  fivePick = sort_array(fivePick);
  var luckyPick = document.getElementById('userLucky').value;

  var numEqual = countEqual(fivePick, winningNums.winFive);
  var luckyEqual = (luckyPick == winningNums.winBall);
  var result;
  switch (numEqual) {
    case 5:
      if (luckyEqual){
        result = "$7,000 a WEEK for LIFE!";
      } else{
        result = "$25,000 a YEAR for LIFE!";
      }
      break;
    case 4:
      if (luckyEqual){
        result = "$5,000";
      } else{
        result = "$200";
      }
      break;
    case 3:
      if (luckyEqual){
        result = "$150";
      } else {
        result = "$20";
      }
      break;
    case 2:
      if (luckyEqual){
        result = "$25";
      } else {
        result = "$3";
      }
      break;
    case 1:
      if (luckyEqual){
        result = "$6";
      } else {
        result = "You lost.";
      }
      break;
    case 0:
      if (luckyEqual){
        result = "$4";
      } else {
        result = "You lost.";
      }
      break;
    default:
      result = "You lost";
  }
  document.getElementById("resultDisplay").innerHTML = result;
}
