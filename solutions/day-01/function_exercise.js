function sumAllNums() {
    let sum = 0
    for (let i = 0; i < arguments.length; i++) {
      sum += arguments[i]
    }
    return sum
  }
  
  function fullName(firstName, lastName){
    return firstName + ' ' + lastName;
  }

  function addNumber(x, y){
    return x + y;
  }

  function _areaOfCirce(radius, pi = 3.14){
    return pi * radius * radius;
  }

  function convertCelsiusToFahrenheit(oC){
    return ((oC * 9/5) + 32);
  }

  function checkBmi(weight, height){
    let bmi = weight/(height**2);
    switch(true){
        case bmi < 18.5:
            return 'Underweight';
            break;
        case bmi >= 18.5 && bmi < 25:
            return 'Normal';
            break;
        case bmi >= 25 && bmi < 30:
            return 'Overweight';
            break;
        case bmi >= 30:
            return 'Obese'
    }
  }

  function checkSeason(month){
    
    let autumnMonths = ["september", "october", "oovember"];
    let winterMonths = ["december", "january", "february"];
    let springMonths = ["march", "april", "may"];
    let summerMonths = ["july", "june", "august"];

    switch (true) {
        case (autumnMonths.includes(month.toLowerCase())):
            return month.toUpperCase() + " is in Autumn Season";
            break
        case (winterMonths.includes(month.toLowerCase())):
            return month.toUpperCase() + " is in Winter Season";
            break
        case (springMonths.includes(month.toLowerCase())):
            return month.toUpperCase() + " is in Spring Season";
            break
        case (summerMonths.includes(month.toLowerCase())):
            return month.toUpperCase() + " is in Summer Season";
            break
        default:
            return month + " is not a Month"
    }
  }

  function solveQuadratic(a, b, c){
    let discriminant = (b**2) - (4*a*c);
    if(discriminant > 0){
        let root1 = (-b + Math.sqrt(discriminant)) / (2 * a);
        let root2 = (-b - Math.sqrt(discriminant)) / (2 * a);
        return "The roots are real and different : [" + root1 + ", " + root2 + "]";
    }else if(discriminant === 0){
        let root = -b / (2 * a);
        return "The roots are real and equal : ["+root+"]";
    }else{
        let real = -b / (2 * a);
        let imaginary = Math.sqrt(-discriminant) / (2 * a);
        return "The roots are imaginary : [" + real + ", " + imaginary + "]"; 
    }
  }

  function factorOfC(c) {
    let limit = [c, (c - (2*c))];
    limit.sort();
    let factor = [];
    for(i = limit[0]; i<=limit[1]; i++){
        for(j = limit[0]; j <= limit[1]; j++){
            if(i*j === c){
                factor.push([i, j]);
            }
        }
    }
    return factor;
  }

  function printArray(arr) {
    for(const item of arr){
        console.log(item);
    }
  }

  function showDateTime(){
    const date = new Date();
    console.log(date.getDate(),'/',date.getMonth(),'/',date.getFullYear())
  }

  function sumNumbers(){
    let sum = 0;
    for(let i = 0; i < arguments.length; i++){
      sum += arguments[i];
    }
    return sum;
  }

  function userIdGenerator(length){
    const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"
    let result = '';
    for(let i = 0; i < length; i++){
      result += characters.charAt(Math.floor(Math.random() * characters.length));
    }

    return result;
  }
  
  function generateColor(colorType, number=1){
    let arr = []
    if(colorType.toLowerCase() === 'rgb'){
      for(let i = 0; i < number; i++){
        let r = Math.floor(Math.random() * 256);
        let g = Math.floor(Math.random() * 256);
        let b = Math.floor(Math.random() * 256);

        let rgb = "rgb("+r+","+g+","+b+")";
        arr.push(rgb)
      } 
    }else{
      for(let i = 0; i < number; i++){
        let randomColor = "#" + Math.floor(Math.random()* 0xFFFFFF).toString(16);
        arr.push(randomColor);
      }
    }

    return arr;
  }

  function factorial(number){
    if(number <= 1){
      return number
    }else{
      return number*factorial(number-1);
    }
  }

  console.log(factorial(5))