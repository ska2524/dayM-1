/**
 * Created by JSK on 2017-04-11.
 */
function Person(name) {
    this.name = name || "혁준";
}

Person.prototype.getName = function(){
    return this.name;
};

function Korean(name){}
Korean.prototype = new Person();

var kor1 = new Korean();
console.log(kor1.getName());  // 혁준

var kor2 = new Korean("지수");
console.log(kor2.getName());  // 혁준
console.log(kor2.name);