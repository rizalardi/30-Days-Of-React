function sumAllNums() {
    let sum = 0
    for (let i = 0; i < arguments.length; i++) {
      sum += arguments[i]
    }
    return sum
  }
  
  console.log(sumAllNums(1, 2, 3, 4)) // 10
  console.log(sumAllNums(10, 20, 13, 40, 10))  // 93
  console.log(sumAllNums(15, 20, 30, 25, 10, 33, 40))  // 173

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

  let c = factorOfC(5);
  let x = c.pop()
  console.log(x) 