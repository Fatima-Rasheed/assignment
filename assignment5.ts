// Question no 1
var sum:number=0;
for(let i=0;i<=20;i++){
    if(i%2==0){
        sum+=i;
    }
}console.log(sum);
// Question no 2
var array:number[]=[20,56,77,89,44];
var evenNumbers:number[]=[]
for(let j:number=0;j<=array.length;j++){
    if(j%2==0){
        evenNumbers.push(j)
    }

}console.log(evenNumbers)

var array:number[]=[20,56,77,89,44];

for(let j:number=0;j<=array.length;j++){
    if(array[j]%2==0){
array.splice(j ,1)
j--;
    }
}console.log(array)
