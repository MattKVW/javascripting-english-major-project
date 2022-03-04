/*
let userInput;
userInput = prompt("What do you want to have for dinner?", "Type your answer here.");
if ( userInput === "burrito" ) {
  $("#response").html("Brilliant choice!");
} else {
  $("#response").html("Don’t you want a burrito?");
}
*/

/*
let arrayOfStrings, arrayOfNumbers, arrayMixed;
arrayOfStrings = ["a", "b", "c"];
arrayOfNumbers = [1, 2, 3];
arrayMixed = ["a", null, true, arrayOfNumbers, [4.5, 5.6]];
$("#response").html(arrayOfStrings[2]);
*/

let myHabaneroSauceSquirts, myBurritoObject;
myHabeneroSauceSquirts 3;
myBurritoObject = {
    tortila: "wheat",
    guacamole: true,
    beans: "pinto",
    habaneroSauceSquirts: myHabaneroSauceSquirts,
    spiciness: function(){
      if (myHabaneroSauceSquirts > 0 ){
        alert("This is a spicy burrito!");
      } else {
        alert("This is a mild burrito.");
      }
    }
};
$("#response".html("Your burrito has " +
 myBurritoObject.habaneroSauceSquirts +
 " squirts of habanero.");
 myBurritoObject.spiciness();
