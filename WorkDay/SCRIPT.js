
//GIVEN I am using a daily planner to create a schedule
// WHEN I open the planner
// THEN the current day is displayed at the top of the calendar

// WHEN I view the time blocks for that day
// THEN each time block is color-coded to indicate whether it is in the past, present, or future



// WHEN I click the save button for that time block
// THEN the text for that event is saved in local storage
function save(){
var userinput=$(this).siblings(".userinput").val()
var time=$(this).parent().attr("id")
console.log(userinput)
console.log(time)}
//addEventListener.querySelector(".save")
$(".save").on("click", save)
// WHEN I refresh the page
// THEN the saved events persist
