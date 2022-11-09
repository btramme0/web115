function username() {
  var fname = document.getElementById("first_name").value;
  var mname = document.getElementById("last_name").value;
  var lname = document.getElementById("middle_inital").value;
  alert("Hello " + " " + fname+ " " + mname + " " + lname);
  var question = prompt("How high would you like to count?");
  for (var i = 1; i <= 125; i++);
  var counting = "";
  if (i % 3 == 0) {`${counting}New book`}
  if (i % 5 == 0) {`${counting}New  reading`}
  document.getElementById("greeting").innerHTML = "welcome";
}

function header() { 
  var fname = document.getElementById("first_name").value;
  var mname = document.getElementById("last_name").value;
  var lname = document.getElementById("middle_initail").value;
  document.getElementById("head").innerHTML = "welcome " + fname + " " + mname + " " + lname;
};