// Question no 1
var sum:number=0;
for(let i=0;i<=20;i++){
    if(i%2==0){
        sum+=i;
    }
}console.log(sum);
// Question no 2
var array:number[]=[20,56,77,89,44];
for(let j:number=0;j<=array.length;j++){
    if(array[j]%2==0){
array.splice(j ,1)

    }
}console.log(array)
// Question n03 
var array:number[]=[21,76,93,32,51];
for(let j:number=0;j<=array.length;j++){
    if(array[j]%2==0){
array.splice(j ,1)
j--;
    }
}console.log(array)
// Question no 4
function areaofcircle(radius:number){
    var area:number=3.14*radius*radius;
    return area;
}
var radius:number=54;
console.log(radius)
console.log(areaofcircle(radius))
// Question no 5
var listofgrades:number[]=[32,65,12,86]
for(let index=0;index<=listofgrades.length+1;index++){
    if(listofgrades[index]<50){
    listofgrades.splice(index,1)    
    }
    }console.log(listofgrades)
