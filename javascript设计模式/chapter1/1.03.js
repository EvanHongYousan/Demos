/**
 * Created by yantianyu on 2015/5/11.
 */
function displayError(message){
    displayError.numTimesExecuted++;
    alert(message);
}

displayError.numTimesExecuted = 0;

function Person(name, age){
    this.name = name;
    this.age = age;
}

Person.prototype = {
    getName:function(){
        return this.name;
    },
    getAge:function(){
        return this.age;
    }
};

var alice = new Person('Alice',93);
var bill = new Person('Bill',30);

Person.prototype.getGreeting = function(){
    return 'Hi '+ this.getName() + '!';
};

alice.displayGreeting = function(){
    alert(this.getGreeting());
};