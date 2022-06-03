//Business logic:

function compareSide(sideOne, sideTwo, sideThree) {
  if (sideOne===sideTwo===sideThree) { // Check to see if Equilateral
    return "Equilateral"
  } 
  else if (sideOne+sidetwo<=sideThree || sideOne+sideThree<=sideTwo || sideTwo+sideThree<=sideOne) {  // check to see if not a triangle
    return "Not a triangle"
  } 
  else if (sideOne===sideTwo||sideOne===sideThree||sidetwo===sideThree) {  //check to see if Scalene: No sides are equal.
    return "isoseceles"
  } 
  else {
    return "scalene"
  }
}



//Interface logic:

$(document).ready(function() {
  $("form#side").submit(function(event) {
    event.preventDefault();
    const sideOne = parseInt($("#side1").val());
    const sideTwo = parseInt($("#side2").val());
    const sideThree = parseInt($("#side3").val());
    const result = compareSide(sideOne, sideTwo, sideThree);
    $("#output").text(result);
  });
});
