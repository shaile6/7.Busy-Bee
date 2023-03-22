// Set the current date and time using Moment.js

var currentDay = moment().format("D MMM YYYY");
var currentTime = moment().format("HH:mm:ss");


// console.log(currentDay);





$(document).ready(function() {
  $(".saveBtn").on("click", function () {
    var description = $(this).siblings(".description").val();
    var time = $(this).parent().attr("id");
    localStorage.setItem(description, time);
  })
})








// var ore8 = $("#ore8");
// var ore9 = $("#ore9");
// var ore10 = $("#ore10");
// var ore11 = $("#ore11");
// var ore12 = $("#ore12");
// var ore13 = $("#ore13");
// var ore14 = $("#ore14");
// var ore15 = $("#ore15");
// var ore16 = $("#ore16");
// var ore17 = $("#ore17");
// var ore18 = $("#ore18");
// var ore19 = $("#ore19");



 $("#ore8 .description").val(localStorage.getItem("ore8"));
    $("#ore9 .description").val(localStorage.getItem("ore9"));
    $("#ore10 .description").val(localStorage.getItem("ore10"));
    $("#ore11 .description").val(localStorage.getItem("ore11"));
    $("#ore12 .description").val(localStorage.getItem("ore12"));
    $("#ore13 .description").val(localStorage.getItem("ore13"));
    $("#ore14 .description").val(localStorage.getItem("ore14"));
    $("#ore15 .description").val(localStorage.getItem("ore15"));
    $("#ore16 .description").val(localStorage.getItem("ore16"));
    $("#ore17 .description").val(localStorage.getItem("ore17"));
    $("#ore18 .description").val(localStorage.getItem("ore18"));
    $("#ore19 .description").val(localStorage.getItem("ore19"));
