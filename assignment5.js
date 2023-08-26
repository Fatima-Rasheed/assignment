"use strict";
// Question no 1
var sum = 0;
for (let i = 0; i <= 20; i++) {
    if (i % 2 == 0) {
        sum += i;
    }
}
console.log(sum);
// Question no 2
var array = [20, 56, 77, 89, 44];
for (let j = 0; j <= array.length; j++) {
    if (array[j] % 2 == 0) {
        array.splice(j, 1);
    }
}
console.log(array);
// Question n03 
var array = [21, 76, 93, 32, 51];
for (let j = 0; j <= array.length; j++) {
    if (array[j] % 2 == 0) {
        array.splice(j, 1);
        j--;
    }
}
console.log(array);
// Question no 4
function areaofcircle(radius) {
    var area = 3.14 * radius * radius;
    return area;
}
var radius = 54;
console.log(radius);
console.log(areaofcircle(radius));
