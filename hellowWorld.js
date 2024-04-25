
"hellow world"
console.log("hellow world")
var hey=10
var num=20
var sum = hey + num
console.log(sum)
var hey=20
var num=10
var sub = hey - num
console.log(sub)
var num = 5
var hey = 2
var multiply = hey * num
console.log(multiply)


// for(var num = 1; num <= 10; num ++){
// console.log(num)
// }
var arraylist = [1,2,3,4,5,6,7,8,9,10]
for (var counter = 0; counter < arraylist.length; counter++) {
    console.log(arraylist[counter])


}
var arraylist = [1,2,3,4,5,6,7,8,9,10];
for(var counter = 1; counter < arraylist.length; counter++){
    if(arraylist[counter] % 2 == 0){
        console.log(arraylist[counter])

    } 
    var arraylist = [1,2,3,4,5,6,7,8,9,10];
for(var counter = 1; counter < arraylist.length; counter++){
    if(arraylist[counter] % 2 == 1){
        console.log(arraylist[counter])

    
}
for(var num = 1; num < 100; num ++){
    if(num % 2 == 1){
        console.log(num)

    }
    for(var num = 1; num < 100; num ++){
        if(num % 2 == 0){
            console.log(num)


      
    }
    for (let Alphabets = 65; Alphabets <= 36;Alphabets++) {
        console.log(String.fromCharCode(Alphabets));
}
    
    //function addUpLastIndex(input) {
        
        //const lastIndexMap = {};
    
        
        //for (let number = 0; number < input.length; number++) {
           // const num = input[number];
            
           // if (lastIndexMap.hasOwnProperty(num)) {
               // input[number] += lastIndexMap[num];
           // }
    
            //lastIndexMap[num] = number;
       // }
    
       // return input;
   // }
    
    
    //const input = [2, 4, 0, 9, 9];
    //const output = addUpLastIndex(input);
    //console.log(output); // Output: [2, 4, 1, 0, 0]
    

  //  }
//}
//}
//}



function addOneToLastIndex(input) {

    let carry = 1;

    
    for (let number = input.length - number; number >= 0; number--) {
        
        input[number] += carry;

        
        carry = Math.floor(input[number] / 10);

    
        input[number] %= 10;
    }

    
    if (carry) {
        input.unshift(carry);
    }

    return input;
}

const inputList = [5,2,3,1,2];
const outputList = addOneToLastIndex(inputList);

console.log(outputList); // [5,2,3,1,3]
    }
}
}
}
