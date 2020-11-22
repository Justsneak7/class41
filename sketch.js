var name;

name = "Ichigo Kurosaki";

no1 = 1;

console.log(name);
console.log(name.length);
console.log(name.toUpperCase());
console.log(2 + 7);
console.log(2 * 7 );
console.log(7/0);
console.log(7 - 2);
console.log(7 % 2);
console.log("a" / "b");
console.log(2 < 3);


if(3 === 1){
  console.log("great!");
}



else{
  console.log("what happened my dear child!");
}



function setup(){

  var rand = Math.round(random(1,5));

  switch(rand){
    case 1: console.log(name);
    break;
    case 2 : console.log(no1);
    break;
    case 3: console.log("soul reaper!");
    default : break;
  }

  for(var i = 1;i<6;i = i + 1){
        console.log(i);
  }

  var fname = ["kunal","handai jaisho","ichigo kurosaki","sado"];
  console.log(fname.length);

  fname.push("dhoni");

  console.log(fname);

  fname.pop();
  console.log(fname);
  var plate = circumferance(10);
  console.log(plate);

  var pizza = perimeter(100,100,5);
  console.log(pizza);
}

function circumferance(r){
  var C=2*3.14*r

  return C;
}

function perimeter(a,b,c){
  var P = a + b + c;

  return P;
}




