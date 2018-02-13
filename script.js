$(document).ready(function(){

$('#sub').click(function(){ 
  var age = $("#age").val();
  var plan = $("#plan").val();
  var aDay = $("#aDay").val();
  var numOfCups = (parseInt(plan) - parseInt(age)) * 365 *parseInt(aDay);
  var drink = $("#drink").val();

console.log(numOfCups);
$("#result_one").html(numOfCups);
$("#result_two").html(drink);
	});

});