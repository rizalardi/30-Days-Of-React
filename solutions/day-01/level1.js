// Exercise 1

// No. 1, 2, 5, 6
const arr1 = Array();
const arr2 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const mixedDataTypes = ['One', 2, true, null, undefined, arr2];
const iCompanies = ["Facebook", "Google", "Apple", "Microsoft", "IBM", "Oracle", "Amazon"];

// No 3, 4
let lengthOfArr2 = iCompanies.length;
let firstItem = iCompanies[0];
let middleItem = iCompanies[Math.floor(lengthOfArr2/2)];
let lastItem = iCompanies[lengthOfArr2 - 1];

// No 7, 8, 9
console.log(mixedDataTypes);
console.log(iCompanies);
console.log("Number of iCompanies : ", lengthOfArr2)
console.log("First Item of Array2 : ", firstItem);
console.log("Middle Item of Array2 : ", middleItem);
console.log("Last item of Array2 : ", lastItem);

// No 10 & 11
iCompanies.forEach((items) => console.log(items.toUpperCase()));

// No 12
let joinArray = iCompanies.join(', ');
console.log(joinArray, " are big IT compaies");

// No 13
let company = iCompanies.indexOf("Sony");
if(company != -1){
    console.log(iCompanies[company]);
}else{
    console.log("Company not found");
}

// No 14
const noDoubleOs = [];
for(let i = 0; i < iCompanies.length; i++){
    if((iCompanies[i].match(/o/g) || []).length < 2){
        noDoubleOs.push(iCompanies[i]);
    }
}
console.log(noDoubleOs);

// NO 15, 16
iCompanies.sort();
iCompanies.reverse();
console.log(iCompanies);

// No 17
console.log(iCompanies.slice(0,3));
console.log(iCompanies.slice(iCompanies.length-3));
console.log(iCompanies.slice(Math.floor(lengthOfArr2/2)));

