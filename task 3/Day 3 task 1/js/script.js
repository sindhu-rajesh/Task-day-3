
let obj1 = {name:"person 1",age:5};
let obj2 = {age:5,name:"person 1"};
console.log(obj1 === obj2);

let key1 = Object.keys(obj1);
let key2 = Object.keys(obj2);
key1.sort();
key2.sort();
let bool = false;
for(let i=0;i<key1.length;i++){
    bool = obj1[key1[i]]===obj2[key2[i]];
    if(bool){
    console.log("Both objects are not same")
    break;
    }
}
if(bool){
    console.log("Both objects are same")
}