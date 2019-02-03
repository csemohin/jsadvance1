var karim = {
    name: 'Karim Rahman',
    dob: 1996,
    age: function(currentYear, msg) {
       console.log(msg + ' ' + this.name + ' is ' + (currentYear - this.dob) + ' years old!');
    }
 }
 var rahim = {
    name: 'Rahim Abdu',
    dob: 1986
 }
//  Normal this uses
 karim.age(2018, 'Hello World!');
// Apply Use
 karim.age.apply(rahim, [2018, 'Hello World!']);