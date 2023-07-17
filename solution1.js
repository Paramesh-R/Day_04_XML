/* Q1 - Compare 2 JSON have the same properties without order */
var obj1 = { name: "Person 1", age: 5 };
var obj2 = { age: 5, name: "Person 1" };
console.log(JSON.stringify(obj1) === JSON.stringify(obj2))
document.getElementById("task1-result").innerHTML = JSON.stringify(obj1) === JSON.stringify(obj2);
