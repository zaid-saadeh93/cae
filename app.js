
var name = prompt("what is your name")

alert("hey, wlecome to my website " + name )

 var bestcar = prompt("what is you fav car? , please choose one of these ; mustang, BMW,mercedes")

 function userbestcar (bestcar){

 

while(bestcar != "mustang" && bestcar != "BMW" && bestcar != "mercedes"){


bestcar = prompt("what is you fav car? , please choose one of these ; mustang, BMW,mercedes")

}

var numberOfPic = prompt("how many times you wish to see it ")

while(numberOfPic >10 ){
  numberOfPic = prompt("please enter number less than 10!")
}


if(bestcar == "mustang"){

 
for(var i = 0; i< numberOfPic;i++)

{document.write(
  "<div>" + "<h3>" + bestcar
+"</h3>"
+ "<img  src='https://cdn.motor1.com/images/mgl/J7EjQ/s1/electric-ford-mustang-by-charge-cars.jpg' width='100' height='100'     />" + "</div>")}
}
else if (bestcar =="BMW"){

for(var i = 0 ; i <numberOfPic;i++)

{document.write(
  "<div>" + "<h3>" + bestcar
+"</h3>"
+ "<img  src='https://www.bmw-me.com/content/dam/bmw/common/home/teaser/bmw-2-series-gran-coupe-inspire-ag-home-teaser-xxl.jpg' width='100' height='100'     />" + "</div>")}
}
else if(bestcar =="mercedes"){
  for(var i = 0 ; i <numberOfPic;i++)
{document.write(
  "<div>" + "<h3>" + bestcar
+"</h3>"
+ "<img  src='https://www.topgear.com/sites/default/files/images/news-article/2018/08/5fea3e9cce58cc4be329b29854e6aa96/2014_mercedes-benz_sls_amg_black_series_0115.jpg' width='100' height='100'     />" + "</div>")}
}
 }


 userbestcar(bestcar);
