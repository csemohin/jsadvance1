/*
var myObject = {
    name: "mohin uddin",
    roll: 8667,
    anotherObject: {
        name: "uddin Mohin",
        roll: 0983,
        value: function(){
            console.log("Hello "+ this.name);
        }
    }

}

// Using Call
myObject.anotherObject.value.call(myObject);

// Using This
myObject.anotherObject.value();

*/
/*
var rahim = {
    name: "Rahim",
    dob: 1995,
    age: function(cage){
        console.log("His current age is "+ (cage - this.dob) + " old");
    }
}
var karim = {
    name: "karim",
    dob: 1986
}

rahim.age.call(karim,2018)
*/

var mohin = {
    name: "mohin",
    dob: 1995,
    age: function(cage){
        console.log(cage-this.dob);
        
    }
}

var dulal = {
    name : "dulal",
    dob:1960,
}
mohin.age.call(dulal,2018)