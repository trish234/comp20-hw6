function displayNums (){
  num1 = document.getElementById("num1").value;
  num2 = document.getElementById("num2").value;
  document.getElementById("displayNums").innerHTML = num1 + " " + num2;

 /* Test code for showFactors(array)
  var array = [ 5, 6 , 2, 4];
  showFactors(array);
  */
}
function isFactor(number, testNumber){
  if (number % testNumber == 0){
    return true;
  }
  return false;
}

/* Test code for isFactor(number, testNumber)
console.log(isFactor(45, 24));
console.log(isFactor(45, 5));
*/
function showFactors(array){
  for (var i = 0; i < array.length; i++){
    document.getElementById("arrayHere").innerHTML += " " + array[i];
  }
}

function addFactors(array){
  var sum = 0;
  for (var i = 0; i < array.length; i++){
    sum += array[i];
  }
  return sum;
}

/* Test code for addFactors(array)
console.log(addFactors([3, 2, 0]));
console.log(addFactors([-9, 5]));
*/

function getFactors(number){
  var factors = [];
  for (var i = 0; i < number; i++){
    if (number % i == 0){
      factors.push(i);
    }
  }
  return factors;
}
/* Test code for getFactors(number)
console.log(getFactors(15));
console.log(getFactors(0));
console.log(getFactors(100));
*/

function amicable(){
  num1 = document.getElementById("num1").value;
  num2 = document.getElementById("num2").value;
  var factors1 = getFactors(num1);
  var factors2 = getFactors(num2);
  if ((addFactors(factors1) == num2) && (addFactors(factors2) == num1)){
    document.getElementById("amicableHere").innerHTML = "Amicable";
  } else{
    document.getElementById("amicableHere").innerHTML = "Not amicable";
  }
}
