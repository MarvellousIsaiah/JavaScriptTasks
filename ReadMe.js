//function findMode(arr) {
    //let frequency = {};
    //let maxFrequency = 0;
    //let mode;

   
    //arr.forEach(num => {
        //frequency[num] = (frequency[num] || 0) + 1;
       // if (frequency[num] > maxFrequency) {
          //  maxFrequency = frequency[num];
        //    mode = num;
      //  }
    //});

   // return mode;
//
//}

let animal = {
    type: "unknown",
    sound : function(){
        console.log("the" + this.type +"make sound")
    }


}
let dog = Object.create(animal);
dog.type = "Dog";
dog.color = "brown";

dog.sound();
console.log(dog)

let goat = {};
Object.setPrototypeOf(goat, animal);
goat.type = "goat";
console.log(goat);

let cow = {};
Object.setPrototypeOf(cow ,animal);
goat.type = "goat";
console.log (cow);

let vehicle = {wheels:4};
let car = {
    seats : 5,
    __proto__: vehicle,
    wheels : 6,
};
console.log('vehicle:', vehicle, vehicle.__proto__);
console.log('car:',car,car.__proto__);
console.log('car:', car.wheels);

function Person(name, age){
    this.name = name;
    this.age = age;

    this.sayName = function(){
        this.sayName = function(){

        }
    }
}  

 function Personalbar(name, age){
const PersonOne = new Personalbar("jumoke", 13);
    console.log(PersonOne.name);
    console.log(PersonOne.age);
    PersonOne.sayName(); 
 }


    function Human(girl,age){
        this.girl = girl;
        this.age = age;

        

    }

    const json = '{"result": true,  "count":42}';
    const obj = JSON.parse(json);
    console.log(obj.count);

   class Dayo{
    constructor(name,age,size){
        this.name = name;
        this.age = age;
        this.size = size;

    }
    setName(newName){
        this.name = newName;
    }
    getName(){
        return this.name;
    }
    setAge(){
        this.age = age;
    }
   

    }
    class shape{
        constructor(name){
            this.name = name;
        }


    }
   
    class Rectangle extends shape{
        constructor(name,side1,side2,isquare){
            super(name);
            this.name = name;
            this.side1 = side1;
            this.side2 = side2;
            this.isquare = isquare;

           

        }
        getArea(){
            return 0.5*this.side1*this.side2;
        }
        isItSquare(){
            return this.isItSquare;
        }
       
        }

        class Square extends shape{
            constructor(name,side1,side2,isquare){
                super(name);
                this.name = name;
                this.side1 = side1;
                this.side2 = side2;
                this.isquare = isquare;
    

        }
        getArea(){
            return 0.5*this.side1*this.side2;
        }
        isItSquare(){
            return this.isItSquare;
        }
    }