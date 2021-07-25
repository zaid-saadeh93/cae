var name = prompt (" What is ypur name? ")
alert ("Hello " + name + " Welcom to my website ")

var age = prompt (" How old are you? ")

var bestcar = prompt (" What is the best car in your opinion? , mercedes, mustang, BMW ")

while(bestcar != "mercedes" && bestcar != "mustang" &&  bestcar != "BMW"){

  bestcar = prompt (" What is the best car in your opinion? , mercedes, mustang, BMW")
if (bestcar == "mercedes" ||   bestcar == "mustang"  ){
  alert ("good choice ! " + name )
}
else{
  alert ("You're an awesome person")
}

console.log(name)

document.write(" thank you " + name )



